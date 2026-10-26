const request = require('supertest');
const app = require('./app');

describe('Signup and Login', () => {
    it('should signup successfully', async () => {
        const res = await request(app).post('/auth/signup').send({
            name: 'Panchami',
            email: 'panchami@gmail.com',
            password: 'Hello@123'
        });
        expect(res.statusCode).toBe(201);
        expect(res.text).toBe('Signup successful');
    });

    it('should reject invalid name', async () => {
        const res = await request(app).post('/auth/signup').send({
            name: 'Pa123',
            email: 'test@gmail.com',
            password: 'Hello@123'
        });
        expect(res.statusCode).toBe(400);
    });

    it('should reject invalid email', async () => {
        const res = await request(app).post('/auth/signup').send({
            name: 'Panchami',
            email: 'wrongemail',
            password: 'Hello@123'
        });
        expect(res.statusCode).toBe(400);
    });

    it('should reject weak password', async () => {
        const res = await request(app).post('/auth/signup').send({
            name: 'Panchami',
            email: 'weak@gmail.com',
            password: 'hello123'
        });
        expect(res.statusCode).toBe(400);
    });

    it('should login successfully', async () => {
        const res = await request(app).post('/auth/login').send({
            email: 'panchami@gmail.com',
            password: 'Hello@123'
        });
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe('Login successful');
    });

    it('should reject incorrect password', async () => {
        const res = await request(app).post('/auth/login').send({
            email: 'panchami@gmail.com',
            password: 'Wrong@123'
        });
       expect(res.statusCode).toBe(401);
        expect(res.text).toBe('Invalid login');
    });
});