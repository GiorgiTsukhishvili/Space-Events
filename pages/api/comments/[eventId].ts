import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const eventId = req.query.eventId;

  const client = await MongoClient.connect(
    "mongodb://localhost:27017/space-events"
  );

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

    const newComment: {
      name: string;
      email: string;
      text: string;
      eventId: string | string[] | undefined;
      id?: Object;
    } = {
      name,
      email,
      text,
      eventId,
    };

    const db = client.db();

    const result = await db.collection("comments").insertOne(newComment);

    newComment.id = result.insertedId;

    res
      .status(201)
      .json({ message: "Added to database", data: { newComment } });
  }

  if (req.method === "GET") {
    const db = client.db();

    const documents = await db
      .collection("comments")
      .find()
      .sort({ _id: -1 })
      .toArray();

    res.status(200).json({
      message: "success",
      data: { comments: documents },
    });
  }

  client.close();
};

export default handler;
