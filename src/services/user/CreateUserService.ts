import prismaClient from "../../prisma";
interface IPessoaRequest {
  name: string;
  data_nascimento: Date;
}

export class CreateUserService {
  async execute({ name, data_nascimento }: IPessoaRequest) {
    if (!name) {
      throw new Error("Name required");
    }

    const pessoa = await prismaClient.pessoa.create({
      data: {
        name: name,
        data_nascimento,
      },
      select: {
        id: true,
        name: true,
        data_nascimento: true,
      },
    });

    return pessoa;
  }
}
