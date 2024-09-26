const Machine = require("../models/Machine");
const xss = require("xss");

// Create a new Machine
const createMachine = async (req, res) => {
  const { mId, maxRunningHrs, product, mFactory, installedDate } = req.body;

  if (!mId || !maxRunningHrs || !product || !mFactory || !installedDate) {
    return res.status(400).json({ error: "All fields must be filled." });
  }

  const sanitizedMId = xss(mId);
  const sanitizedProduct = xss(product);
  const sanitizedMFactory = xss(mFactory);
  const sanitizedInstalledDate = xss(installedDate);

  if (await Machine.findOne({ mId: sanitizedMId })) {
    return res.status(400).json({ error: "Machine ID already exists." });
  }

  if (sanitizedMId.length < 6) {
    return res.status(400).json({
      error: "Machine ID must include at least 6 characters. Eg: XXX000",
    });
  }

  if (maxRunningHrs < 50) {
    return res
      .status(400)
      .json({ error: "Maximum running hours cannot be less than 50." });
  }

  try {
    const machine = await Machine.create({
      mId: sanitizedMId,
      maxRunningHrs,
      product: sanitizedProduct,
      mFactory: sanitizedMFactory,
      installedDate: sanitizedInstalledDate,
    });
    res.status(200).json(xss(machine));
  } catch (error) {
    res.status(400).json({ error: xss(error.message) });
  }
};

// Get all Machines
const getAllMachines = async (req, res) => {
  const factoryId = req.query.factory;

  if (factoryId) {
    const sanitizedFactoryId = xss(factoryId);
    const machines = await Machine.find({ mFactory: sanitizedFactoryId });
    res.send(machines.map((machine) => xss(machine)));
  } else {
    const machines = await Machine.find();
    res.send(machines.map((machine) => xss(machine)));
  }
};

// Get Machines by factory IDs
const getMachinesByFId = async (req, res) => {
  const sanitizedMFactory = xss(req.params.mFactory);
  const machines = await Machine.find({ mFactory: sanitizedMFactory });
  res.send(machines.map((machine) => xss(machine)));
};

// Get a single Machine by its ID
const getMachine = async (req, res) => {
  const sanitizedId = xss(req.params.id);
  const machine = await Machine.findById(sanitizedId);
  if (!machine) {
    return res.status(404).json({ error: "Machine not found" });
  }
  res.send(xss(machine));
};

// Delete a Machine
const deleteMachine = async (req, res) => {
  const sanitizedId = xss(req.params.id);
  const machine = await Machine.findByIdAndDelete(sanitizedId);
  if (!machine) {
    return res.status(404).json({ error: "Machine not found" });
  }
  res.send(xss(machine));
};

// Update a Machine
const updateMachine = async (req, res) => {
  const { id } = req.params;
  const {
    mId,
    maxRunningHrs,
    product,
    mFactory,
    installedDate,
    totalProductions,
    totalRunningHrs,
  } = req.body;

  if (!mId || !maxRunningHrs || !product || !mFactory || !installedDate) {
    return res.status(400).json({ error: "All fields must be filled." });
  }

  const sanitizedMId = xss(mId);
  const sanitizedProduct = xss(product);
  const sanitizedMFactory = xss(mFactory);
  const sanitizedInstalledDate = xss(installedDate);

  if (sanitizedMId.length < 6) {
    return res.status(400).json({
      error: "Machine ID must include at least 6 characters. Eg: XXX000",
    });
  }

  if (maxRunningHrs < 50) {
    return res
      .status(400)
      .json({ error: "Maximum running hours cannot be less than 50." });
  }

  const machine = await Machine.findByIdAndUpdate(
    { _id: xss(id) },
    {
      mId: sanitizedMId,
      maxRunningHrs,
      product: sanitizedProduct,
      mFactory: sanitizedMFactory,
      installedDate: sanitizedInstalledDate,
      totalProductions: xss(totalProductions),
      totalRunningHrs: xss(totalRunningHrs),
    },
    { new: true }
  );

  if (!machine) {
    return res.status(404).json({ error: "Machine does not exist" });
  }

  res.status(200).json(xss(machine));
};

module.exports = {
  createMachine,
  getAllMachines,
  getMachinesByFId,
  getMachine,
  deleteMachine,
  updateMachine,
};
