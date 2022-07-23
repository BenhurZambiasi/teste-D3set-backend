import { Request, Response } from "express";
import { ListPessoaService } from "../../services/user/ListPessoaService";
export class ListPessoaController {
  async handle(req: Request, res: Response) {
    const listPessoaService = new ListPessoaService();

    const pessoas = await listPessoaService.execute();

    return res.status(200).json(pessoas);
  }
}
