import { NextFunction, Request, Response } from "express";
import AppDataSource from "../../data-source";
import { AppError } from "../../errors/app.errors";
import { Properties } from "../../entities/properties.entity";

export const verifyPropertyIsValidMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const propertyRegistered = AppDataSource.getRepository(Properties);

  const property = await propertyRegistered.findBy({
    id: req.params.id,
  });

  if (property.length <= 0) {
    throw new AppError("Property not found", 404);
  }

  next();
};
