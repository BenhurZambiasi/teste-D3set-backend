import prismaClient from "../../prisma";
interface IPessoaRequest {
  id: string;
}
export class GetPessoaByIdService {
  async execute({ id }: IPessoaRequest) {
    const pessoa = await prismaClient.pessoa.findFirst({
      where: {
        id: id,
      },
      select: {
        id: true,
        name: true,
        data_nascimento: true,
        pessoa_telefone: true,
      },
    });

    return pessoa;
  }
}
