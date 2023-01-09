import { Request, Response } from "express";
import { createPropertiesServices } from "../services/properties/createProperties.service";
import { listPropertiesServices } from "../services/properties/listProperties.service";

export const createPropertiesController = async (
  req: Request,
  res: Response
) => {
  const { value, size, address, categoryId } = req.body;

  const newProperties = await createPropertiesServices({
    value,
    size,
    address,
    categoryId,
  });
  return res.status(201).json(newProperties);
};

export const listPropertiesController = async (req: Request, res: Response) => {
  const properties = await listPropertiesServices();
  return res.status(200).json(properties);
};
