import type { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@") || !userEmail.includes(".")) {
      res.status(422).json({ message: "Invalid Email" });
      return;
    }

    res.status(201).json({ message: "Signed Up" });
  }
};

export default handler;
