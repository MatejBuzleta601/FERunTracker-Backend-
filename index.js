import express from "express";
import path from "path";
const app = express();

app.use(express.json());
const PORT = 3000;

const fegame = [
    { id: 1, name: 'Awakening', characters: 49 },
    { id: 2, name: 'Engage', characters: 36 }
];

app.get('/', (req, res) => {
    console.log("WELCOME TO FERUNTRACKER!");
    let putanja = path.join('public', 'index.html');
    let abs_putanja = path.resolve(putanja);
    res.sendFile(abs_putanja);
});

app.get('/fegames', (req, res) => {
    console.log("Called GET method on /fegames endpoint")
    return res.status(200).json(fegame); // 200 OK
});

app.listen(PORT, error => {
    if (error) {
        console.error(`Error from backend side: ${error.message}`);
    } else {
        console.log(`Server is running on http://localhost:${PORT}`);
    }
});