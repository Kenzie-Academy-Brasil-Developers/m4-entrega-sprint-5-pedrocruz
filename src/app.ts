import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { userRoutes } from "./routes/users.routes";
import { handleError } from "./errors/handle.error";
import { sessionRoutes } from "./routes/session.routes";
import { categoriesRoutes } from "./routes/categories.routes";
import { propertiesRoutes } from "./routes/properties.routes";
import { schedulesRoutes } from "./routes/schedules.routes";

const app = express();
app.use(express.json());

app.use("/login", sessionRoutes);
app.use("/users", userRoutes);
app.use("/categories", categoriesRoutes);
app.use("/properties", propertiesRoutes);
app.use("/schedules", schedulesRoutes);

app.use(handleError);

export default app;
