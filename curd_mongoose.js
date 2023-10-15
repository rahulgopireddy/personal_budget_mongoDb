const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const myBudgetSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  budget: {
    type: Number,
    required: true,
  },
  colorCode: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^#[0-9A-Fa-f]{6}$/i.test(v);
      },
      message: (props) =>
        `${props.value} is not a valid hexadecimal color code!`,
    },
  },
});

const dyDataSchema = new Schema({
  label: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  background: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^#[0-9A-Fa-f]{6}$/i.test(v);
      },
      message: (props) =>
        `${props.value} is not a valid hexadecimal color code!`,
    },
  },
});

const MyBudget = mongoose.model("MyBudget", myBudgetSchema);
const DyData = mongoose.model("DyData", dyDataSchema);

module.exports = { MyBudget, DyData };
