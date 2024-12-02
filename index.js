// Import dependencies
import express, { json } from 'express';
import {edd} from './firebase_init.js';
import { setDoc , doc} from 'firebase/firestore';

// import { initializeApp, credential as _credential, database } from 'firebase-admin';
// import fs from 'fs';

// Initialize Express app
const app = express();

// Middleware to parse JSON bodies
app.use(json());



// Define the webhook endpoint
app.post('/webhook', async (req, res) => {
    console.log('Webhook received!');

    // Extract payload from the webhook
    const { id, updateData } = req.body; // Expecting 'id' and 'updateData' in the payload

    if (!id || !updateData) {
        return res.status(400).send('Invalid payload: "id" and "updateData" are required');
    }

    try {
        // Update data in Firebase Realtime Database
       
    
        await setDoc(doc(edd, "cities", "LA"), {
            name: "Los Angeles",
            state: "CA",
            country: "USA"
        });
        // Log success and send acknowledgment
        console.log(`Data updated for ID: ${id}`);
        res.status(200).send('Data updated successfully!');
    } catch (error) {
        console.error('Error updating Firebase:', error);
        res.status(500).send('Failed to update data');
    }
});
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Webhook server is running on port ${PORT}`);
});
