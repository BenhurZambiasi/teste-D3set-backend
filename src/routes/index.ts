import { Router } from "express";

import { userRouter } from "./user/user.routes";

const router = Router();

router.use(userRouter);

export { router };
