import { NextFunction, Request, Response } from "express";
import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entity";
import { AppError } from "../../errors/app.errors";

export const verifyCategoriesExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const categoryRegistered = AppDataSource.getRepository(Categories);

  const category = await categoryRegistered.findBy({
    name: req.body.name,
  });

  if (category.length > 0) {
    throw new AppError("Category already exists", 409);
  }

  next();
};
