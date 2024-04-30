import { Router } from "express";
import db from "./../db";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const snapshot = await db.collection("LineChart").get();
    const data = snapshot.docs.map((doc) => doc.data());
    res.status(200).json(data);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.toString() });
    }
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const docRef = db.collection("LineChart").doc(id);
    const doc = await docRef.get();
    if (doc.exists) {
      res.status(200).json(doc.data());
    } else {
      res.status(404).send("Document not found");
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.toString() });
    }
  }
});

router.put("/update/:id", async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const docRef = db.collection("LineChart").doc(id);
    await docRef.update(data);
    res.status(201).send(`Line Chart ${data.Name} was added with ID: ${id}`);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.toString() });
    }
  }
});

router.post("/", async (req, res) => {
  try {
    const { data } = req.body;
    const addedDoc = await db.collection("LineChart").add(data);
    res
      .status(201)
      .send(`Line Chart ${addedDoc.Name} was added with ID: ${addedDoc.id}`);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.toString() });
    }
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const docRef = db.collection("LineChart").doc(id);
    const doc = await docRef.get();
    await docRef.delete();
    res
      .status(200)
      .send(`Line Chart with ${doc.Name} was successfully deleted`);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.toString() });
    }
  }
});

export default router;
