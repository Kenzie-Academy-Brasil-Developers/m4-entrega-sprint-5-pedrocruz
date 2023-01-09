import { NextFunction, Request, Response } from "express";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/app.errors";

export const verifyUserEmailExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRegistered = AppDataSource.getRepository(User);

  const user = await userRegistered.findBy({
    email: req.body.email,
  });

  if (user.length > 0) {
    throw new AppError("User already registered", 409);
  }

  next();
};
