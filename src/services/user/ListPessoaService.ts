import prismaClient from "../../prisma";

export class ListPessoaService {
  async execute() {
    const pessoa = await prismaClient.pessoa.findMany({
      orderBy: {
        name: "asc",
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
