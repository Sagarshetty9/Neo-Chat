import { z } from "zod";

export const userLoginSchema = z.object({
  email: z.email(),
  password: z.string(),
});

export const userRegisterSchema = z.object({
  email: z.email(),
  password: z.string(),
  username: z.string(),
});

export function validateSchema(schema) {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      throw new Error("Invalid Input! Please try again!");
    }

    req.validatedData = result.data;

    next();
  };
}
