// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient, ObjectId } from "mongodb";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({
        message: "Dados inválidos.",
      });

      return;
    }

    const newMessage: {
      email: string;
      name: string;
      message: string;
    } = {
      email,
      name,
      message,
    };

    let client;

    try {
      client = await MongoClient.connect(`${process.env.DB_URL}`);
    } catch (error) {
      res.status(500).json({
        message: "Não foi possível a conexão com a base de dados.",
      });

      return;
    }

    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);

      const messageReceived = {
        ...newMessage,
        id: result.insertedId,
      };
    } catch (error) {
      client.close();
      res.status(500).json({
        message: "Falhou o envio da mensagem.",
      });
      return;
    }

    client.close();

    res.status(201).json({
      message: "Mensagem enviada com sucesso!",
    });
  }
}
