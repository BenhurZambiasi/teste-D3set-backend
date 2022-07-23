import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import swaggerUI from "swagger-ui-express";
import cors from "cors";

import { router } from "./routes";
import swaggerDocs from "./swagger.json";

const app = express();

const port = process.env.API_PORT || 3333;

app.use(express.json());
app.use(cors());

app.use(router);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({ error: err.message });
  }
  return res
    .status(500)
    .json({ status: "error", message: "Internal Server Error" });
});

app.listen(port, () => console.log(`Server is running in port ${port}`));
