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

export const saveUsers = functions.https.onRequest((req, res) => {
    corsHandler(req, res, async () => {
        try {
        const { users } = req.body;
        if (!Array.isArray(users)) {
            res.status(400).send('Invalid payload');
            return;
        }

        const batch = db.batch();
        users.forEach(user => {
            const userId = user.Name.toLowerCase().replace(/\s/g, "-");
            const ref = db.collection('users').doc(userId);
            batch.set(ref, user, { merge: true });
        });

        await batch.commit();
            res.status(200).json({ message: 'Users updated.' });
        } catch (error) {
            console.error('Error saving users:', error);
            res.status(500).send('Failed to save users');
        }
    });
});
  
  

/* used to write to: /users/{userId}/lineups/{raceId}
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
*/

/*
new datastructure:
/races/{raceId}/metadata
/races/{raceId}/lineups/{userId}
/races/{raceId}/results/{driver}
/races/{raceId}/challengeResults/{userId}
*/

/* writes to: /races/{raceId}/lineups/{userName} */
export const saveConstructorLineup = functions.https.onRequest((req, res) => {
    corsHandler(req, res, async () => {
      try {
        const { raceId, lineup } = req.body;
        if (!raceId || !Array.isArray(lineup)) {
          res.status(400).send("Missing or invalid payload.");
          return;
        }
  
        const batch = db.batch();
  
        lineup.forEach(c => {
          const userId = c.UserName.toLowerCase().replace(/\s/g, "-");
          const ref = db
            .collection("races")
            .doc(raceId)
            .collection("lineups")
            .doc(userId);
          batch.set(ref, c);
        });
  
        await batch.commit();
        res.status(200).json({ message: "Lineups saved successfully." });
      } catch (error) {
        console.error("Error saving lineups:", error);
        res.status(500).send("Internal Server Error");
      }
    });
});

export const saveRaceChallengeResults = functions.https.onRequest((req, res) => {
    corsHandler(req, res, async () => {
      try {
        const { raceId, results } = req.body;
        if (!raceId || !Array.isArray(results)) {
          res.status(400).send('Invalid payload');
          return;
        }
  
        const batch = db.batch();
        results.forEach(result => {
          const ref = db.collection('raceChallengeResults').doc(raceId).collection('entries').doc(result.UserName);
          batch.set(ref, result);
        });
  
        await batch.commit();
        res.status(200).send('Challenge results saved.');
      } catch (error) {
        console.error('Error saving challenge results:', error);
        res.status(500).send('Failed to save challenge results');
      }
    });
  });
  

  export const getRaceChallengeResults = functions.https.onRequest((req, res) => {
    corsHandler(req, res, async () => {
      const raceId = req.query.raceId as string;
  
      if (!raceId) {
        res.status(400).send('Missing raceId');
        return;
      }
  
      try {
        const snapshot = await db.collection('raceChallengeResults').doc(raceId).collection('entries').get();
        const results = snapshot.docs.map(doc => doc.data());
        res.status(200).json(results);
      } catch (error) {
        console.error('Error fetching challenge results:', error);
        res.status(500).send('Internal Server Error');
      }
    });
  });



export const saveRaceResults = functions.https.onRequest((req, res) => {
    corsHandler(req, res, async () => {
      try {
        const { raceId, results } = req.body;
        if (!raceId || !Array.isArray(results)) {
          res.status(400).send('Missing or invalid raceId/results');
          return;
        }
  
        const batch = db.batch();
        const collectionRef = db.collection('races').doc(raceId).collection('results');
  
        results.forEach((result, index) => {
          const docRef = collectionRef.doc(result.number || `driver${index}`);
          batch.set(docRef, result);
        });
  
        await batch.commit();
        res.status(200).send('Race results saved.');
      } catch (error) {
        console.error('Error saving race results:', error);
        res.status(500).send('Internal Server Error');
      }
    });
});
  
export const getRaceResults = functions.https.onRequest((req, res) => {
    corsHandler(req, res, async () => {
      const raceId = req.query.raceId as string;
  
      if (!raceId) {
        res.status(400).send('Missing raceId');
        return;
      }
  
      try {
        const snapshot = await db.collection('races').doc(raceId).collection('results').get();
        const results = snapshot.docs.map(doc => doc.data());
        res.status(200).json(results);
      } catch (error) {
        console.error('Error fetching race results:', error);
        res.status(500).send('Internal Server Error');
      }
    });
  });

  export const saveRaceMetadata = functions.https.onRequest((req, res) => {
    corsHandler(req, res, async () => {
      try {
        const { raceId, metadata } = req.body;
        if (!raceId || !metadata) {
          res.status(400).send('Invalid payload');
          return;
        }
  
        await db.collection('races').doc(raceId).set(metadata, { merge: true });
        res.status(200).send('Race metadata saved.');
      } catch (error) {
        console.error('Error saving race metadata:', error);
        res.status(500).send('Internal Server Error');
      }
    });
  });

  export const getAllRaceMetadata = functions.https.onRequest((req, res) => {
    corsHandler(req, res, async () => {
      try {
        const snapshot = await db.collection('races').get();
  
        const races = [];
        for (const doc of snapshot.docs) {
          const metadata = (await doc.ref.get()).data();
          if (metadata) {
            races.push(metadata);
          }
        }
  
        res.status(200).json(races);
      } catch (error) {
        console.error('Error fetching races:', error);
        res.status(500).send('Internal Server Error');
      }
    });
  });
  
  export const getRaceLineups = functions.https.onRequest((req, res) => {
    corsHandler(req, res, async () => {
      const raceId = req.query.raceId as string;
      if (!raceId) {
        res.status(400).send('Missing raceId');
        return;
      }
  
      try {
        const snapshot = await db.collection('races').doc(raceId).collection('lineups').get();
        const lineups = snapshot.docs.map(doc => doc.data());
        res.status(200).json(lineups);
      } catch (error) {
        console.error('Error fetching race lineups:', error);
        res.status(500).send('Internal Server Error');
      }
    });
  });
  
  