import prismaClient from "../../prisma";
interface IPessoaRequest {
  id: string;
  name: string;
  data_nascimento: Date;
}

export class UpdatePessoaService {
  async execute({ id, name, data_nascimento }: IPessoaRequest) {
    if (!name) {
      throw new Error("Name required");
    }

    const pessoa = await prismaClient.pessoa.update({
      where: { id },
      data: {
        name: name,
        data_nascimento,
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
