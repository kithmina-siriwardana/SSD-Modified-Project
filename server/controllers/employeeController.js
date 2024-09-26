const Employee = require("../models/Employee");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const validator = require("validator");
var sendEmail = require("../utils/sendEmail");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "2d" });
};

// get all users
const getUsers = async (req, res) => {
  const employees = await Employee.find({}).sort({ lastLogin: -1 });
  res.status(200).json(employees);
};

// get a single user
const getUser = async (req, res) => {
  const { id } = req.params;

  // Validate that the 'id' is a valid MongoDB ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "User does not exist" });
  }

  const employee = await Employee.findById(id);

  if (!employee) {
    return res.status(404).json({ error: "User does not exist" });
  }

  res.status(200).json(employee);
};

// create new user
const createUser = async (req, res) => {
  const { name, email, dob, role, address, phone, password } = req.body;

  // Type checks for all input fields
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof dob !== "string" ||
    typeof role !== "string" ||
    typeof address !== "string" ||
    typeof phone !== "string" ||
    typeof password !== "string"
  ) {
    // If any field is not of the expected type, return an error
    return res.status(400).json({ error: "Invalid input types" });
  }

  // Check if all required fields are provided
  if (!name || !email || !dob || !role || !address || !phone || !password) {
    return res.status(400).json({ error: "All fields must be filled" });
  }

  // Validate email format
  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: "Email is not valid" });
  }

  // Check if email is already in use
  if (await Employee.findOne({ email })) {
    return res.status(400).json({ error: "Email already in use" });
  }

  // Validate phone number to be exactly 10 digits and only numeric
  var isPhoneValid = /^[0-9]{10}$/.test(phone);
  if (!isPhoneValid) {
    return res.status(400).json({ error: "Phone number is not valid" });
  }

  // Validate password strength
  if (!validator.isStrongPassword(password)) {
    return res.status(400).json({
      error:
        "Password not strong enough. Must contain uppercase, lowercase, numbers, and more than eight characters",
    });
  }

  // Add the new employee document to the database
  try {
    const employee = await Employee.create({
      name,
      email,
      dob,
      role,
      address,
      phone,
      password,
    });
    sendEmail(
      email,
      "Jiffy Account Created",
      `Your account has been created successfully. Email: ${email} Password: ${password}`
    );
    res.status(200).json(employee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a user
const deleteUser = async (req, res) => {
  const { id } = req.params;

  // Validate that the 'id' is a valid MongoDB ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "User does not exist" });
  }

  const employee = await Employee.findOneAndDelete({ _id: id });

  if (!employee) {
    return res.status(404).json({ error: "User does not exist" });
  }

  res.status(200).json(employee);
};

// update a user
const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, dob, role, address, phone } = req.body;

  // Type checks for all input fields
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof dob !== "string" ||
    typeof role !== "string" ||
    typeof address !== "string" ||
    typeof phone !== "string"
  ) {
    // If any field is not of the expected type, return an error
    return res.status(400).json({ error: "Invalid input types" });
  }

  // Validate required fields are filled
  if (!name || !email || !dob || !role || !address || !phone) {
    return res.status(400).json({ error: "All fields must be filled" });
  }

  // Validate email format
  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: "Email is not valid" });
  }

  // Validate phone number to be exactly 10 digits and only numeric
  var isPhoneValid = /^[0-9]{10}$/.test(phone);
  if (!isPhoneValid) {
    return res.status(400).json({ error: "Phone number is not valid" });
  }

  // Validate that the 'id' is a valid MongoDB ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "User does not exist" });
  }

  // Update the employee document in the database
  const employee = await Employee.findOneAndUpdate(
    { _id: id },
    {
      name,
      email,
      dob,
      role,
      address,
      phone,
    },
    { new: true } // Return the updated document
  );

  if (!employee) {
    return res.status(404).json({ error: "User does not exist" });
  }

  res.status(200).json(employee);
};

// login
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // Type checks for login credentials
  if (typeof email !== "string" || typeof password !== "string") {
    // If either email or password is not a string, return an error
    return res.status(400).json({ error: "Invalid input types" });
  }

  try {
    const employee = await Employee.login(email, password);

    // Create a JWT token
    const token = createToken(employee._id);
    const id = employee._id;
    const role = employee.role;

    res.status(200).json({ id, email, role, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// signup user
const signupUser = async (req, res) => {
  const { name, dob, role, address, phone, email, password } = req.body;

  // Type checks for all input fields
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof dob !== "string" ||
    typeof role !== "string" ||
    typeof address !== "string" ||
    typeof phone !== "string" ||
    typeof password !== "string"
  ) {
    // If any field is not of the expected type, return an error
    return res.status(400).json({ error: "Invalid input types" });
  }

  try {
    const employee = await Employee.signup(
      name,
      dob,
      role,
      address,
      phone,
      email,
      password
    );
    sendEmail(
      email,
      "Jiffy Account Created",
      `Your account has been created successfully. Email: ${email} Password: ${password}`
    );
    const id = employee._id;

    // Create a JWT token
    const token = createToken(employee._id);

    res.status(200).json({ id, email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
  loginUser,
  signupUser,
};
