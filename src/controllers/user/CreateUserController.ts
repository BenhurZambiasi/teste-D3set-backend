import { Request, Response } from "express";
import { CreatePessoaTelefoneService } from "../../services/pessoa_telefone/CreatePessoaTelefoneService";
import { CreateUserService } from "../../services/user/CreateUserService";

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, data_nascimento, numbers } = req.body;
    const createUserService = new CreateUserService();
    const createPessoaTelefoneService = new CreatePessoaTelefoneService();

    const user = await createUserService.execute({
      name,
      data_nascimento,
    });

    if (user) {
      numbers.forEach(async (number) => {
        await createPessoaTelefoneService.execute({
          pessoa_id: user.id,
          numero_telefone: number,
        });
      });
    }

    return res.status(201).json(user);
  }
}
