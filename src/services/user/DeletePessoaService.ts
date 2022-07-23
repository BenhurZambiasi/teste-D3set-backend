import prismaClient from "../../prisma";
interface IPessoaRequest {
  id: string;
}

export class DeletePessoaService {
  async execute({ id }: IPessoaRequest) {
    const pessoa = await prismaClient.pessoa.delete({
      where: { id },
    });

    return pessoa;
  }
}
