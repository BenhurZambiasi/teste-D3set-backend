import { Request, Response } from "express";
import { GetPessoaByIdService } from "../../services/user/GetPessoaByIdService";

export class GetPessoaByIdController {
  async handle(req: Request, res: Response) {
    const getPessoaByIdService = new GetPessoaByIdService();
    const id = req.query.id as string;

    const pessoa = await getPessoaByIdService.execute({ id });

    return res.status(200).json(pessoa);
  }
}
