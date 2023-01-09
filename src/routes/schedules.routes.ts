import { Router } from "express";
import {
  createSchedulesController,
  listSchedulesByIdPropertyController,
} from "../controllers/schedules.controler";
import { ensureAdmMiddleware } from "../middlewares/ensureAdm.middleware";
import { ensureAuthMiddleware } from "../middlewares/Auth.Middleware";
import { verifyPropertyIsValidMiddleware } from "../middlewares/schedules/verifyPropertysIsValid.middlewares";

export const schedulesRoutes = Router();

schedulesRoutes.get(
  "/properties/:id",
  ensureAuthMiddleware,
  ensureAdmMiddleware,
  verifyPropertyIsValidMiddleware,
  listSchedulesByIdPropertyController
);
schedulesRoutes.post("", ensureAuthMiddleware, createSchedulesController);
