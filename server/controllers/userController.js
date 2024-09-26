const User = require("../models/User");
const Order = require("../models/Order");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validator = require("validator");
var sendEmail = require("../utils/sendEmail");

const { getAllCustomerOrders } = require("../controllers/orderController");

// Helper function to group data
function groupBy(list, keyGetter) {
  const map = new Map();
  list.forEach((item) => {
    const key = keyGetter(item);
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });
  return map;
}

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "2d" });
};

// get all users
const getUsers = async (req, res) => {
  const users = await User.find({}).sort({ lastLogin: -1 });
  res.status(200).json(users);
};

// get inactive users
const getOldUsers = async (req, res) => {
  const users = await User.find({}).sort({ lastLogin: -1 });
  var order = null;
  var dataset = [];
  const currentYear = new Date().getFullYear();

  users.forEach((element) => {
    // Validate lastLogin before accessing it
    if (element.lastLogin && element.lastLogin instanceof Date) {
      var year = element.lastLogin.toISOString().split("T")[0].slice(0, 4);
      order = Order.find({ CustomerID: element._id });

      // Check if the user has not logged in for more than 2 years and has placed an order
      if (currentYear - year >= 2 && order) {
        dataset.push({
          _id: element._id,
          name: element.name,
          email: element.email,
          address: element.address,
          phone: element.phone,
        });
      }
    }
  });

  const grouped = groupBy(users, (user) => user.phone);
  res.status(200).json(dataset);
};

// get account usage
const getAccountUsage = async (req, res) => {
  const users = await User.find({}).sort({ lastLogin: 0 });
  var dataset = [];
  const currentYear = new Date().getFullYear();

  for (var month = 1; month <= 12; month++) {
    // Populate dataset for previous year and current year
    dataset.push({
      month: `${currentYear - 1}-${month < 10 ? "0" + month : month}`,
      users: 0,
    });
    dataset.push({
      month: `${currentYear}-${month < 10 ? "0" + month : month}`,
      users: 0,
    });
  }

  users.forEach((element) => {
    if (element.lastLogin && element.lastLogin instanceof Date) {
      var year = element.lastLogin.toISOString().split("T")[0].slice(0, 4);
      var year_month = element.lastLogin
        .toISOString()
        .split("T")[0]
        .slice(0, 7);

      // Check if the last login year is within 2 years
      if (currentYear - year < 2) {
        const datasetItem = dataset.find((item) => item.month === year_month);
        if (datasetItem) {
          datasetItem.users += 1;
        }
      }
    }
  });

  res.status(200).json(dataset);
};

// get a single user
const getUser = async (req, res) => {
  const { id } = req.params;

  // Validate that 'id' is a valid MongoDB ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "User does not exist" });
  }

  const user = await User.findById(id);

  if (!user) {
    return res.status(404).json({ error: "User does not exist" });
  }

  res.status(200).json(user);
};

// create new user
const createUser = async (req, res) => {
  const { name, email, address, phone, password } = req.body;

  // Type checks for all fields
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof address !== "string" ||
    typeof phone !== "string" ||
    typeof password !== "string"
  ) {
    return res.status(400).json({ error: "Invalid input types" });
  }

  var isPhoneValid = /^[0-9]{10}$/.test(phone); // Validate phone to be exactly 10 digits

  // Validate required fields
  if (!name || !email || !address || !phone || !password) {
    return res
      .status(400)
      .json({ error: "All fields must be filled", errorPosition: "1" });
  }
  // Validate email
  if (!validator.isEmail(email)) {
    return res
      .status(400)
      .json({ error: "Email is not valid", errorPosition: "2" });
  }
  // Check if email is already used
  if (await User.findOne({ email })) {
    return res
      .status(400)
      .json({ error: "Email already in use", errorPosition: "3" });
  }
  // Validate phone number
  if (!isPhoneValid) {
    return res
      .status(400)
      .json({ error: "Phone number is not valid", errorPosition: "4" });
  }
  // Validate password strength
  if (!validator.isStrongPassword(password)) {
    return res.status(400).json({
      error:
        "Password not strong enough. Must contain uppercase, lowercase, numbers and more than eight characters",
      errorPosition: "5",
    });
  }

  // Hash the password
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  try {
    const user = await User.create({
      name,
      email,
      address,
      phone,
      password: hash,
    });
    sendEmail(
      email,
      "Jiffy Account Created",
      `Your account has been created successfully. Email: ${email} Password: ${password}`
    );
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a user
const deleteUser = async (req, res) => {
  const { id } = req.params;

  // Validate that 'id' is a valid MongoDB ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "User does not exist" });
  }

  const user = await User.findOneAndDelete({ _id: id });

  if (!user) {
    return res.status(404).json({ error: "User does not exist" });
  }

  sendEmail(
    user.email,
    "Jiffy Account Deleted",
    "Your account has been deleted successfully."
  );

  res.status(200).json(user);
};

// update a user
const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, address, phone } = req.body;

  // Type checks for input fields
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof address !== "string" ||
    typeof phone !== "string"
  ) {
    return res.status(400).json({ error: "Invalid input types" });
  }

  var isPhoneValid = /^[0-9]{10}$/.test(phone); // Validate phone number

  // Validate required fields
  if (!name || !email || !address || !phone) {
    return res.status(400).json({ error: "All fields must be filled" });
  }
  // Validate email
  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: "Email is not valid" });
  }
  // Validate phone number
  if (!isPhoneValid) {
    return res.status(400).json({ error: "Phone number is not valid" });
  }

  // Validate that 'id' is a valid MongoDB ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "User does not exist" });
  }

  var user = await User.findOne({ email });

  // Check if the email belongs to a different user
  if (user && user._id != id) {
    return res.status(400).json({ error: "Email already in use" });
  }

  user = await User.findOneAndUpdate(
    { _id: id },
    {
      name,
      email,
      address,
      phone,
    }
  );

  if (!user) {
    return res.status(404).json({ error: "User does not exist" });
  }

  sendEmail(
    email,
    "Jiffy Account Updated",
    "Your account has been updated successfully."
  );

  res.status(200).json(user);
};

// login
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // Type checks for login credentials
  if (typeof email !== "string" || typeof password !== "string") {
    return res.status(400).json({ error: "Invalid input types" });
  }

  try {
    const user = await User.login(email, password);

    // Create a token
    const token = createToken(user._id);
    const id = user._id;

    res.status(200).json({ id, email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// signup user
const signupUser = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  // Type checks for input fields
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof password !== "string" ||
    typeof confirmPassword !== "string"
  ) {
    return res.status(400).json({ error: "Invalid input types" });
  }

  try {
    const user = await User.signup(name, email, password, confirmPassword);
    const id = user._id;

    // Create a token
    const token = createToken(user._id);

    res.status(200).json({ id, email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// reset password
const resetPassword = async (req, res) => {
  const { id } = req.params;
  const { currentPassword, newPassword, confirmPassword } = req.body;

  // Validate required fields
  if (!currentPassword || !newPassword || !confirmPassword) {
    return res.status(400).json({ error: "All fields must be filled" });
  }
  // Check if newPassword matches confirmPassword
  if (newPassword !== confirmPassword) {
    return res
      .status(400)
      .json({ error: "New password and confirm password mismatch" });
  }
  // Validate password strength
  if (!validator.isStrongPassword(newPassword)) {
    return res.status(400).json({
      error:
        "Password not strong enough. Must contain uppercase, lowercase, numbers and more than eight characters",
    });
  }
  // Validate MongoDB ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "User does not exist" });
  }

  var user = await User.findOne({ _id: id });

  if (!user) {
    return res.status(404).json({ error: "User does not exist" });
  }

  const match = await bcrypt.compare(currentPassword, user.password);

  if (!match) {
    return res.status(400).json({ error: "Current password is incorrect" });
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(newPassword, salt);

  user = await User.findOneAndUpdate(
    { _id: id },
    {
      password: hash,
    }
  );

  res.status(200).json(user);
};

// admin reset password
const adminResetPassword = async (req, res) => {
  const { id } = req.params;
  const { email, newPassword, confirmPassword } = req.body;

  // Validate required fields
  if (!newPassword || !confirmPassword) {
    return res.status(400).json({ error: "All fields must be filled" });
  }
  // Check if newPassword matches confirmPassword
  if (newPassword !== confirmPassword) {
    return res
      .status(400)
      .json({ error: "New password and confirm password mismatch" });
  }
  // Validate password strength
  if (!validator.isStrongPassword(newPassword)) {
    return res.status(400).json({
      error:
        "Password not strong enough. Must contain uppercase, lowercase, numbers and more than eight characters",
    });
  }
  // Validate MongoDB ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "User does not exist" });
  }

  var user = await User.findOne({ _id: id });

  if (!user) {
    return res.status(404).json({ error: "User does not exist" });
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(newPassword, salt);

  user = await User.findOneAndUpdate(
    { _id: id },
    {
      password: hash,
    }
  );

  sendEmail(
    email,
    "Jiffy password reset",
    `Your account password has been reset. New password: ${newPassword}`
  );

  res.status(200).json(user);
};

module.exports = {
  createUser,
  getUsers,
  getUser,
  getOldUsers,
  deleteUser,
  updateUser,
  loginUser,
  signupUser,
  resetPassword,
  adminResetPassword,
  getAccountUsage,
};
