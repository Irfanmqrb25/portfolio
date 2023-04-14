import { getServerSession } from "next-auth";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";
import { Guestbook } from "@prisma/client";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);

  if (req.method === "POST" && !session) {
    return res.status(401).json({ message: "you must be logged in" });
  }

  if (req.method === "POST") {
    const { message, created_by }: Guestbook = req.body;
    try {
      const createChat = await prisma.guestbook.create({
        data: {
          created_by,
          message,
        },
      });
      return res.status(201).json(createChat);
    } catch (error: any) {
      res.status(500).json(error.message);
    }
  }

  if (req.method === "GET") {
    try {
      const result = await prisma.guestbook.findMany();
      res.status(200).json(result);
    } catch (error: any) {
      return res.status(500).json(error.message);
    }
  }
}
