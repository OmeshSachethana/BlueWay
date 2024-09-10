const Employee = require('../models/employee');

// Create a new employee
exports.createEmployee = async (req, res) => {
  try {
    const newEmployee = new Employee(req.body);
    const savedEmployee = await newEmployee.save();
    res.status(201).json({
      message: 'Employee created successfully',
      employee: savedEmployee,
    });
  } catch (error) {
    res.status(400).json({
      message: 'Error creating employee',
      error: error.message,
    });
  }
};

// Get all employees
exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json({
      message: 'Employees retrieved successfully',
      employees,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error retrieving employees',
      error: error.message,
    });
  }
};

// Get a single employee by ID
exports.getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.status(200).json({
      message: 'Employee retrieved successfully',
      employee,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error retrieving employee',
      error: error.message,
    });
  }
};

