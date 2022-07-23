import prismaClient from "../../prisma";
interface IPessoaTelefoneRequest {
  numero_telefone: string;
  pessoa_id: string;
}

export class CreatePessoaTelefoneService {
  async execute({ numero_telefone, pessoa_id }: IPessoaTelefoneRequest) {
    if (!numero_telefone) {
      throw new Error("Number phone is required");
    }

    const pessoaTelefone = await prismaClient.pessoaTelefone.create({
      data: {
        numero_telefone,
        pessoa_id,
      },
      select: {
        id: true,
        pessoa_id: true,
        numero_telefone: true,
      },
    });

    return pessoaTelefone;
  }
}
