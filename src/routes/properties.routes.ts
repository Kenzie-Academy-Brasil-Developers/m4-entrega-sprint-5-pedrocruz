import { Router } from "express";
import {
  createPropertiesController,
  listPropertiesController,
} from "../controllers/properties.controller";
import { ensureAdmMiddleware } from "../middlewares/ensureAdm.middleware";
import { ensureAuthMiddleware } from "../middlewares/Auth.Middleware";

export const propertiesRoutes = Router();

propertiesRoutes.get("", listPropertiesController);
propertiesRoutes.post(
  "",
  ensureAuthMiddleware,
  ensureAdmMiddleware,
  createPropertiesController
);
