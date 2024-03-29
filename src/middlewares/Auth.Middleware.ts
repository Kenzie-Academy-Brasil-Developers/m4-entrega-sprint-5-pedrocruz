import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import "dotenv";

export const ensureAuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }

  token = token.split(" ")[1];

  jwt.verify(token, process.env.SECRET_KEY, (error, decoded: any) => {
    if (error) {
      return res.status(401).json({
        message: error.message,
      });
    }

    req.user = {
      id: decoded.id,
      isAdm: decoded.isAdm,
      isActive: decoded.isActive,
    };

    return next();
  });
};
