const User = require("../models/User");
const income = require("../models/incomeHistory");
const mongoose = require("mongoose");
const xss = require("xss");

const insert = async (req, res) => {
  try {
    const history = new income({
      Order_id: xss(req.body.order_ID),
      total_Amount: xss(req.body.total),
    });

    await history.save();

    res.json(history);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getIncomeOverview = async (req, res) => {
  var sendData = [];

  var currentYear = parseInt(new Date().getFullYear());

  var year = currentYear;
  var month = parseInt(new Date().getMonth() + 1);

  var tempYear;
  var tempMonth;
  var yrPasses = false;
  var Nmonth;
  while (currentYear - year < 2) {
    Nmonth = 12;
    if (yrPasses == false) {
      while (month >= 1) {
        var history = await income.find();
        var amount = 0;
        for (i = 0; i < history.length; i++) {
          tempYear = parseInt(history[i].Date.getFullYear());
          tempMonth = parseInt(history[i].Date.getMonth() + 1);

          if (year == tempYear && tempMonth == month) {
            amount += history[i].total_Amount;
          }
        }

        sendData.push({ date: year + "-" + month, income: amount });
        month--;
      }
      yrPasses = true;
      year--;
    } else {
      while (Nmonth >= 1) {
        var history = await income.find();
        var amount = 0;
        for (i = 0; i < history.length; i++) {
          tempYear = parseInt(history[i].Date.getFullYear());
          tempMonth = parseInt(history[i].Date.getMonth() + 1);

          if (year == tempYear && tempMonth == Nmonth) {
            amount += history[i].total_Amount;
          }
        }

        sendData.push({ date: year + "-" + Nmonth, income: amount });
        Nmonth--;
      }
      yrPasses = true;
      year--;
    }
  }

  res.send(sendData);
};

module.exports = {
  insert,
  getIncomeOverview,
};
