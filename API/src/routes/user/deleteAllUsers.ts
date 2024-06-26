import User from "./../../Models/user";
import { Express, Request, Response } from "express";
import { authMiddleware } from "../../helpers/middleware";

export default (app: Express) => {
  app.delete("/users",authMiddleware, async (req: Request, res: Response) => {
    try {
      const users = await User.deleteMany({});
      return res.status(200).json({ message: "Succeed", deleted: users });
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Failed", error: "An error occured" });
    }
  });
};
