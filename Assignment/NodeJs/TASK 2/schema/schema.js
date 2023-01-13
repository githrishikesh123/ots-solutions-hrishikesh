const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  employee_name: { type: String, required: true },
  salary:{ type: Number, default: 0 },
  place: { type: String, required: true },
});

 const model = mongoose.model('employees', EmployeeSchema);
 module.exports = model;