import { Request, Response } from "express";
import { GetPessoaByIdService } from "../../services/user/GetPessoaByIdService";
import { DeletePessoaService } from "../../services/user/DeletePessoaService";

import { DeletePessoaTelefoneService } from "../../services/pessoa_telefone/DeletePessoaTelefoneService";

export class DeleteUserController {
  async handle(req: Request, res: Response) {
    const id = req.query.id as string;
    const deletePessoaTelefoneService = new DeletePessoaTelefoneService();
    const getPessoaByIdService = new GetPessoaByIdService();
    const deletePessoaService = new DeletePessoaService();

    const findUser = await getPessoaByIdService.execute({ id });

    if (findUser) {
      findUser.pessoa_telefone.forEach(async (number) => {
        await deletePessoaTelefoneService.execute({ id: number.id });
      });
    }
    await deletePessoaService.execute({ id });

    return res.status(200).json();
  }
}
