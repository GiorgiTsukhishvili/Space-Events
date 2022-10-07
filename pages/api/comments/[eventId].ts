import type { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const eventId = req.query.eventId;

  if (req.method === "POST") {
    const { email, name, text } = req.body;

    if (
      !email ||
      !name ||
      !text ||
      name.trim() === "" ||
      text.trim() === "" ||
      !email.includes("@") ||
      !email.includes(".")
    ) {
      res.status(422).json({ message: "Invalid Email, Text or Name" });
      return;
    }

    const newComment = {
      id: new Date().toISOString(),
      name,
      email,
      text,
    };
  }

  if (req.method === "GET") {
    const dummy = [
      { id: "sad", email: "sad@dsad.ga", text: "sadsad", name: "sdad" },
      { id: "sad2", email: "sad@dsad.ga", text: "sadsad", name: "sdad" },
    ];

    res.status(200).json({
      message: "success",
      data: { comments: dummy },
    });
  }
};

export default handler;
