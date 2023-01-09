import { Request, Response } from "express";

import { createCategoriesServices } from "../services/categories/createCategories.service";
import { listCategoriesByIdServices } from "../services/categories/listCategoriesById.service";
import { listCategoriesServices } from "../services/categories/listCategories.service";
export const createCategoriesController = async (
  req: Request,
  res: Response
) => {
  const { name } = req.body;
  const newCategories = await createCategoriesServices(name);
  return res.status(201).json(newCategories);
};

export const listCategoriesByIdController = async (
  req: Request,
  res: Response
) => {
  const id: string = req.params.id;
  const categories = await listCategoriesByIdServices(id);

  return res.status(200).json(categories);
};

export const listCategoriesController = async (req: Request, res: Response) => {
  const categories = await listCategoriesServices();
  return res.status(200).json(categories);
};
