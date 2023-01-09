import { Router } from "express";
import {
  createCategoriesController,
  listCategoriesByIdController,
  listCategoriesController,
} from "../controllers/categories.controller";
import { verifyCategoriesExistsMiddleware } from "../middlewares/categories/varifyCategoriesExists.middleware";
import { ensureAdmMiddleware } from "../middlewares/ensureAdm.middleware";
import { ensureAuthMiddleware } from "../middlewares/Auth.Middleware";

export const categoriesRoutes = Router();

categoriesRoutes.get("", listCategoriesController);
categoriesRoutes.get("/:id/properties", listCategoriesByIdController);
categoriesRoutes.post(
  "",
  ensureAuthMiddleware,
  ensureAdmMiddleware,
  verifyCategoriesExistsMiddleware,
  createCategoriesController
);
