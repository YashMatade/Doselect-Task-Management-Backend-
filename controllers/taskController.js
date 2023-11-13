const Task = require('../models/taskModel');

// Get all tasks
const getAllTasks = async (req, res) => {
    try {
       // Write your code here
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a specific task by ID
const getTaskById = async (req, res) => {
    const { id } = req.params;
    try {
        // write your code here
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create a new task
const createTask = async (req, res) => {
    const { title, description } = req.body;
    try {
       // write your code here
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a task by ID
const updateTaskById = async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    try {
       // write your code here
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a task by ID
const deleteTaskById = async (req, res) => {
    const { id } = req.params;
    try {
      // write your code here
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTaskById,
    deleteTaskById,
};
