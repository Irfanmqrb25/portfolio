import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";
import { Message } from "@prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { name, email, message }: Message = req.body;
      const createMessage = await prisma.message.create({
        data: {
          name,
          email,
          message,
        },
      });
      res.status(201).json(createMessage);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
}
