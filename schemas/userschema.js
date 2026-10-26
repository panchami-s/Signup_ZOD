const { z } = require('zod');

const signup = z.object({
    name: z.string().regex(/^[a-zA-Z ]{3,}$/, "Invalid name"),
    email: z.string().email(),
    password: z.string().regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/, "Weak password")
});

const login = z.object({
    email: z.string().email(),
    password: z.string().min(8)
});

module.exports = { signup, login };