import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { title, description } = JSON.parse(req.body);

  try {
    const data = await prisma.post.create({
      select: {
        id: true,
        title: true,
        description: true,
      },
      data: {
        title: title,
        description: description,
      },
    });

    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ error });
  }
}
