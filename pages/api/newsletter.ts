import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@") || !userEmail.includes(".")) {
      res.status(422).json({ message: "Invalid Email" });
      return;
    }

    const client = await MongoClient.connect(
      "mongodb://localhost:27017/space-events"
    );
    const db = client.db();

    await db.collection("emails").insertOne({ email: userEmail });

    client.close();

    res.status(201).json({ message: "Signed Up" });
  }
};

export default handler;
