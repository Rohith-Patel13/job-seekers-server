const request = require('supertest');
const express = require('express');
const userRoutes = require('../routes/userRoutes');
require('../test/setup'); 


const app = express();
app.use(express.json());
app.use('/worko/user', userRoutes);

describe('User Controller Tests', () => {
    it('should create a user', async () => {
        const response = await request(app)
            .post('/worko/user')
            .set('Authorization', 'Basic YWRtaW46cGFzc3dvcmQ=') // Base64 encoded admin:password
            .send({
                email: 'testuser@example.com',
                name: 'Test User',
                age: 30,
                city: 'Test City',
                zipCode: '12345'
            });

        expect(response.status).toBe(201);
        expect(response.body.email).toBe('testuser@example.com');
    });

    it('should list users', async () => {
        const response = await request(app)
            .get('/worko/user')
            .set('Authorization', 'Basic YWRtaW46cGFzc3dvcmQ=');

        expect(response.status).toBe(200);
        expect(response.body).toEqual([]);
    });

    it('should get details of a specific user', async () => {
        const newUser = await request(app)
            .post('/worko/user')
            .set('Authorization', 'Basic YWRtaW46cGFzc3dvcmQ=') // Base64 encoded admin:password
            .send({
                email: 'testuser@example.com',
                name: 'Test User',
                age: 30,
                city: 'Test City',
                zipCode: '12345'
            });

        const userId = newUser.body._id;

        const response = await request(app)
            .get(`/worko/user/${userId}`)
            .set('Authorization', 'Basic YWRtaW46cGFzc3dvcmQ=');

        expect(response.status).toBe(200);
        expect(response.body.email).toBe('testuser@example.com');
    });

    it('should update an existing user', async () => {
        const newUser = await request(app)
            .post('/worko/user')
            .set('Authorization', 'Basic YWRtaW46cGFzc3dvcmQ=') // Base64 encoded admin:password
            .send({
                email: 'testuser@example.com',
                name: 'Test User',
                age: 30,
                city: 'Test City',
                zipCode: '12345'
            });

        const userId = newUser.body._id;

        const response = await request(app)
            .put(`/worko/user/${userId}`)
            .set('Authorization', 'Basic YWRtaW46cGFzc3dvcmQ=') // Base64 encoded admin:password
            .send({
                email: 'updateduser@example.com',
                name: 'Updated User',
                age: 35,
                city: 'Updated City',
                zipCode: '54321'
            });

        expect(response.status).toBe(200);
        expect(response.body.email).toBe('updateduser@example.com');
    });

    it('should partially update an existing user', async () => {
        const newUser = await request(app)
            .post('/worko/user')
            .set('Authorization', 'Basic YWRtaW46cGFzc3dvcmQ=') // Base64 encoded admin:password
            .send({
                email: 'testuser@example.com',
                name: 'Test User',
                age: 30,
                city: 'Test City',
                zipCode: '12345'
            });

        const userId = newUser.body._id;

        const response = await request(app)
            .patch(`/worko/user/${userId}`)
            .set('Authorization', 'Basic YWRtaW46cGFzc3dvcmQ=') // Base64 encoded admin:password
            .send({
                name: 'Partially Updated User'
            });

        expect(response.status).toBe(200);
        expect(response.body.name).toBe('Partially Updated User');
    });

    it('should delete a user', async () => {
        const newUser = await request(app)
            .post('/worko/user')
            .set('Authorization', 'Basic YWRtaW46cGFzc3dvcmQ=') // Base64 encoded admin:password
            .send({
                email: 'testuser@example.com',
                name: 'Test User',
                age: 30,
                city: 'Test City',
                zipCode: '12345'
            });

        const userId = newUser.body._id;

        const response = await request(app)
            .delete(`/worko/user/${userId}`)
            .set('Authorization', 'Basic YWRtaW46cGFzc3dvcmQ='); // Base64 encoded admin:password

        expect(response.status).toBe(204);
    });
});
