const { z } = require('zod');

const signup = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(8)
});

const login = z.object({
    email: z.string().email(),
    password: z.string().min(8)
});

module.exports = { signup, login };