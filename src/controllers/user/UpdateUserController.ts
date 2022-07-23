import { Request, Response } from "express";
import { CreatePessoaTelefoneService } from "../../services/pessoa_telefone/CreatePessoaTelefoneService";
import { DeletePessoaTelefoneService } from "../../services/pessoa_telefone/DeletePessoaTelefoneService";
import { UpdatePessoaService } from "../../services/user/UpdatePessoaService";
import { GetPessoaByIdService } from "../../services/user/GetPessoaByIdService";

export class UpdateUserController {
  async handle(req: Request, res: Response) {
    const { name, data_nascimento, numbers } = req.body;
    const id = req.query.id as string;
    const updatePessoaService = new UpdatePessoaService();
    const createPessoaTelefoneService = new CreatePessoaTelefoneService();
    const deletePessoaTelefoneService = new DeletePessoaTelefoneService();
    const getPessoaByIdService = new GetPessoaByIdService();

    const findUser = await getPessoaByIdService.execute({ id });

    if (findUser) {
      findUser.pessoa_telefone.forEach(async (number) => {
        await deletePessoaTelefoneService.execute({ id: number.id });
      });
    }

    const user = await updatePessoaService.execute({
      id,
      name,
      data_nascimento,
    });

    numbers.forEach(async (number) => {
      await createPessoaTelefoneService.execute({
        pessoa_id: user.id,
        numero_telefone: number,
      });
    });

    return res.status(204).json(user);
  }
}
