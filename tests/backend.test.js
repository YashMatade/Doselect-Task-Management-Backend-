const request = require('supertest');
const app = require('../server');
const Task = require('../models/taskModel');

describe('Task API', () => {

    beforeEach(async () => {
        await Task.deleteMany();
    });

    it('should get all tasks', async () => {
        // Add a task to the database
        await Task.create({ title: 'Task 1', description: 'Description 1' });

        // Send a GET request to the API endpoint
        const response = await request(app).get('/api/tasks');

        // Assertions
        expect(response.status).toBe(200);
        expect(response.body.length).toBe(1);
        expect(response.body[0].title).toBe('Task 1');
        expect(response.body[0].description).toBe('Description 1');
    });

    it('should create a new task', async () => {
        const newTask = { title: 'New Task', description: 'New Description' };

        // Send a POST request to create a new task
        const response = await request(app).post('/api/tasks').send(newTask);

        // Assertions
        expect(response.status).toBe(201);
        expect(response.body.title).toBe('New Task');
        expect(response.body.description).toBe('New Description');

        // Verify that the task is in the database
        const tasks = await Task.find();
        expect(tasks.length).toBe(1);
        expect(tasks[0].title).toBe('New Task');
        expect(tasks[0].description).toBe('New Description');
    });

    it('should update an existing task', async () => {
        // Add an existing task to the database
        const existingTask = await Task.create({ title: 'Task 1', description: 'Description 1' });
        const updatedTaskData = { title: 'Updated Task', description: 'Updated Description' };

        // Send a PUT request to update the existing task
        const response = await request(app).put(`/api/tasks/${existingTask._id}`).send(updatedTaskData);

        // Assertions
        expect(response.status).toBe(200);
        expect(response.body.title).toBe('Updated Task');
        expect(response.body.description).toBe('Updated Description');

        // Verify that the task is updated in the database
        const updatedTask = await Task.findById(existingTask._id);
        expect(updatedTask.title).toBe('Updated Task');
        expect(updatedTask.description).toBe('Updated Description');
    });

    it('should delete an existing task', async () => {
        // Add an existing task to the database
        const existingTask = await Task.create({ title: 'Task 1', description: 'Description 1' });

        // Send a DELETE request to delete the existing task
        const response = await request(app).delete(`/api/tasks/${existingTask._id}`);

        // Assertions
        expect(response.status).toBe(200);
        expect(response.body.title).toBe('Task 1');
        expect(response.body.description).toBe('Description 1');

        // Verify that the task is deleted from the database
        const tasks = await Task.find();
        expect(tasks.length).toBe(0);
    });
    it('should get a specific task by ID', async () => {
        // Add a task to the database
        const newTask = await Task.create({ title: 'Task 1', description: 'Description 1' });

        // Send a GET request to the API endpoint to get the task by ID
        const response = await request(app).get(`/api/tasks/${newTask._id}`);

        // Assertions
        expect(response.status).toBe(200);
        expect(response.body.title).toBe('Task 1');
        expect(response.body.description).toBe('Description 1');
    });
});