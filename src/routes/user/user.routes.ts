import { Router } from "express";
import { CreateUserController } from "../../controllers/user/CreateUserController";
import { ListPessoaController } from "../../controllers/user/ListPessoaController";
import { UpdateUserController } from "../../controllers/user/UpdateUserController";
import { GetPessoaByIdController } from "../../controllers/user/GetPessoaByIdController";
import { DeleteUserController } from "../../controllers/user/DeleteUserController";

const userRouter = Router();

userRouter.post("/user", new CreateUserController().handle);
userRouter.put("/user", new UpdateUserController().handle);
userRouter.get("/user", new GetPessoaByIdController().handle);
userRouter.delete("/user", new DeleteUserController().handle);

userRouter.get("/users", new ListPessoaController().handle);

export { userRouter };
