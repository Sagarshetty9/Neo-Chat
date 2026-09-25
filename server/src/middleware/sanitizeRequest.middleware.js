import { z } from "zod";

export const userLoginSchema = z.object({
  email: z.email().trim(),
  password: z.string(),
});

export const userRegisterSchema = z.object({
  email: z.email().trim(),
  password: z.string().trim().min(6),
  username: z.string().trim().min(3),
});

export function validateSchema(schema) {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      console.log("didnt work")
      throw new Error("Invalid Input! Please try again!");
    }

    req.validatedData = result.data;

    next();
  };
}
