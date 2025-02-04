const app = require('../index');
const supertest = require('supertest');
const requestWithSupertest = supertest(app)

const User = require('../models/mysql/User');
const bcrypt = require('bcryptjs');
const { sequelize } = require('../config/db');

jest.mock('../models/mysql/User')

describe(`POST /api/v1/register`, () => {
    const baseUrl = '/api/v1/register';

    beforeEach(() => {
        jest.clearAllMocks();
    });

    afterAll(() => {
        jest.clearAllMocks();
        jest.resetModules();
    });

    it('200 - Register successfully', async () => {
        const mockUser = {
            id: 1,
            name: 'testUser',
            email: 'testUser@gmail.com',
            password: await bcrypt.hash('testUserPassword', 10)
        };
        
        User.create.mockResolvedValue(mockUser);

        const res = await requestWithSupertest
            .post(baseUrl)
            .send({
                name: 'testUser',
                email: 'testUser@gmail.com',
                password: 'testUserPassword'
            });
        
        expect(res.status).toBe(200);
        expect(res.body).toEqual({
            status: 'success',
            message: 'User registered successfully',
            data: expect.any(Object),
        });
        expect(User.create).toHaveBeenCalledWith({
            name: 'testUser',
            email: 'testUser@gmail.com',
            password: expect.any(String)
        });
    });

    it('400 - Email already in use', async () => {
        User.findOne.mockResolvedValue({
            name: 'testUser',
            email: 'testUser@gmail.com',
            password: 'testUserPassword' 
        })
        
        User.create.mockResolvedValue(null);

        const res = await requestWithSupertest
            .post(baseUrl)
            .send({
                name: 'testUser',
                email: 'testUser@gmail.com',
                password: 'testUserPassword'
            });

        expect(res.status).toBe(400);
        expect(res.body).toEqual({
            status: 'error',
            message: 'Email already in use',
        });

        // 測試完成後還原 mock
        User.findOne.mockRestore();
        User.create.mockRestore();
    });

    it('500 - Database error', async () => {
        User.create.mockRejectedValue(new Error('Database error'));

        const res = await requestWithSupertest
            .post(baseUrl)
            .send({
                name: 'testUser',
                email: 'testUser@gmail.com',
                password: 'testUserPassword'
            });

        expect(res.status).toBe(500);
        expect(res.body).toEqual({
            status: 'error',
            message: 'Database error',
        });
    });
});