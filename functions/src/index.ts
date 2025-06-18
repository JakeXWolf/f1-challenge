import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cors = require("cors");

admin.initializeApp();
const db = admin.firestore();
const corsHandler = cors({origin: true});

export const getUsers = functions.https.onRequest((req, res) => {
  corsHandler(req, res, async () => {
    try {
      const snapshot = await db.collection("users").get();
      const users = snapshot.docs.map((doc) => doc.data());
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).send("Error fetching users: " + error);
    }
  });
});

export const saveConstructorLineup = functions.https.onRequest((req, res) => {
  corsHandler(req, res, async () => {
    try {
      const {raceId, lineup} = req.body;
      if (!raceId || !Array.isArray(lineup)) {
        res.status(400).send("Missing or invalid payload.");
        return;
      }

      const db = admin.firestore();
      const batch = db.batch();

      lineup.forEach((c) => {
        const userId = c.UserName.toLowerCase().replace(/\s/g, "-");
        const ref = db.collection("users")
          .doc(userId).collection("lineups").doc(raceId);
        batch.set(ref, c);
      });

      await batch.commit();
      res.status(200).send("Lineups saved successfully.");
    } catch (error) {
      console.error("Error saving lineups:", error);
      res.status(500).send("Internal Server Error");
    }
  });
});
