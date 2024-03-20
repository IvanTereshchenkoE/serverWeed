import { body } from "express-validator";

export const registerValidation = [
  body("email").isEmail(),
  body("password").isLength({ min: 5, max: 50 }),
  body("firstName").isLength({ min: 3 }),
  body("lastName").isLength({ min: 3 }),
  body("phone").isMobilePhone("any", { strictMode: false }),
];
