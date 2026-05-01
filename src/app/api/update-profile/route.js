
import { MongoClient } from "mongodb";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, image, email } = body;

    if (!email) {
      return Response.json({ success: false, message: "Email required" });
    }

    const client = new MongoClient(process.env.MONGO_URI);
    await client.connect();

    const db = client.db("qurbani-hat");
    const users = db.collection("user"); // ⚠️ check your collection name

    const result = await users.updateOne(
      { email },
      {
        $set: {
          name,
          image,
        },
      }
    );

    return Response.json({
      success: true,
      message: "Profile updated successfully",
      result,
    });
  } catch (error) {
    return Response.json({
      success: false,
      error: error.message,
    });
  }
}