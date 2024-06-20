const { z } = require('zod');

const userSignupSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
});

const userLoginSchema = z.object({
  username: z.string(),
  password: z.string().min(6),
});

module.exports = { userLoginSchema, userSignupSchema };
