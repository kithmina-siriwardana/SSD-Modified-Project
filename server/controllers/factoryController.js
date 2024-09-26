const Factory = require("../models/Factory");
const xss = require("xss"); // Import xss for input sanitization

// Create a new Factory
const createFactory = async (req, res) => {
  const {
    fId,
    fName,
    fLocation,
    numOfEmployees,
    numOfMachines,
    numOfVehicles,
    createdDate,
  } = req.body;

  // Input validation
  if (
    !fId ||
    !fName ||
    !fLocation ||
    !numOfEmployees ||
    !numOfMachines ||
    !numOfVehicles ||
    !createdDate
  ) {
    return res.status(400).json({ error: "All fields must be filled." });
  }

  // Sanitizing inputs
  const sanitizedFId = xss(fId);
  const sanitizedFName = xss(fName);
  const sanitizedFLocation = xss(fLocation);
  const sanitizedNumOfEmployees = parseInt(numOfEmployees, 10);
  const sanitizedNumOfMachines = parseInt(numOfMachines, 10);
  const sanitizedNumOfVehicles = parseInt(numOfVehicles, 10);
  const sanitizedCreatedDate = xss(createdDate);

  // Validation checks
  if (sanitizedFId.length < 6) {
    return res.status(400).json({
      error: "Factory ID must include at least 6 characters. Eg: XXX000",
    });
  }

  if (sanitizedNumOfEmployees < 0) {
    return res
      .status(400)
      .json({ error: "Number of Employees cannot be less than 0." });
  }

  if (sanitizedNumOfMachines < 0) {
    return res
      .status(400)
      .json({ error: "Number of Machines cannot be less than 0." });
  }

  if (sanitizedNumOfVehicles < 0) {
    return res
      .status(400)
      .json({ error: "Number of Vehicles cannot be less than 0." });
  }

  // Check if Factory ID already exists
  if (await Factory.findOne({ fId: sanitizedFId })) {
    return res.status(400).json({ error: "Factory ID already exists." });
  }

  try {
    const factory = await Factory.create({
      fId: sanitizedFId,
      fName: sanitizedFName,
      fLocation: sanitizedFLocation,
      numOfEmployees: sanitizedNumOfEmployees,
      numOfMachines: sanitizedNumOfMachines,
      numOfVehicles: sanitizedNumOfVehicles,
      createdDate: sanitizedCreatedDate,
    });
    res.status(201).json(factory); // Respond with created factory
  } catch (error) {
    res.status(400).json({ error: xss(error.message) }); // Handle errors
  }
};

// Get all Factories
const getAllFactories = async (req, res) => {
  try {
    const factories = await Factory.find();
    res.status(200).json(factories); // Send back factories
  } catch (error) {
    res.status(400).json({ error: xss(error.message) }); // Handle errors
  }
};

// Get a single Factory by its ID
const getFactory = async (req, res) => {
  try {
    const factory = await Factory.findById(req.params.id);
    if (!factory) {
      return res.status(404).json({ error: "Factory not found." });
    }
    res.status(200).json(factory); // Send back factory
  } catch (error) {
    res.status(400).json({ error: xss(error.message) }); // Handle errors
  }
};

// Delete a Factory
const deleteFactory = async (req, res) => {
  try {
    const factory = await Factory.findByIdAndDelete(req.params.id);
    if (!factory) {
      return res.status(404).json({ error: "Factory not found." });
    }
    res.status(200).json({ message: "Factory deleted successfully.", factory }); // Send back deleted factory
  } catch (error) {
    res.status(400).json({ error: xss(error.message) }); // Handle errors
  }
};

// Update a Factory
const updateFactory = async (req, res) => {
  const { id } = req.params;
  const {
    fId,
    fName,
    fLocation,
    numOfEmployees,
    numOfMachines,
    numOfVehicles,
    createdDate,
  } = req.body;

  // Input validation
  if (
    !fId ||
    !fName ||
    !fLocation ||
    !numOfEmployees ||
    !numOfMachines ||
    !numOfVehicles ||
    !createdDate
  ) {
    return res.status(400).json({ error: "All fields must be filled." });
  }

  // Sanitizing inputs
  const sanitizedFId = xss(fId);
  const sanitizedFName = xss(fName);
  const sanitizedFLocation = xss(fLocation);
  const sanitizedNumOfEmployees = parseInt(numOfEmployees, 10);
  const sanitizedNumOfMachines = parseInt(numOfMachines, 10);
  const sanitizedNumOfVehicles = parseInt(numOfVehicles, 10);
  const sanitizedCreatedDate = xss(createdDate);

  // Validation checks
  if (sanitizedFId.length < 6) {
    return res.status(400).json({
      error: "Factory ID must include at least 6 characters. Eg: XXX000",
    });
  }

  if (sanitizedNumOfEmployees < 0) {
    return res
      .status(400)
      .json({ error: "Number of Employees cannot be less than 0." });
  }

  if (sanitizedNumOfMachines < 0) {
    return res
      .status(400)
      .json({ error: "Number of Machines cannot be less than 0." });
  }

  if (sanitizedNumOfVehicles < 0) {
    return res
      .status(400)
      .json({ error: "Number of Vehicles cannot be less than 0." });
  }

  try {
    const factory = await Factory.findByIdAndUpdate(
      id,
      {
        fId: sanitizedFId,
        fName: sanitizedFName,
        fLocation: sanitizedFLocation,
        numOfEmployees: sanitizedNumOfEmployees,
        numOfMachines: sanitizedNumOfMachines,
        numOfVehicles: sanitizedNumOfVehicles,
        createdDate: sanitizedCreatedDate,
      },
      { new: true } // Return the updated factory
    );

    if (!factory) {
      return res.status(404).json({ error: "Factory does not exist." });
    }

    res.status(200).json(factory); // Send back updated factory
  } catch (error) {
    res.status(400).json({ error: xss(error.message) }); // Handle errors
  }
};

module.exports = {
  createFactory,
  getAllFactories,
  getFactory,
  deleteFactory,
  updateFactory,
};
