import express, { Request, Response } from 'express';
import cors from 'cors';
const app = express();
const port = process.env.PORT || 3000; // Use port from environment or default to 3000

app.use(cors({
    origin: ['http://localhost*']
  }));

// Basic middleware to parse JSON bodies
app.use(express.json());

// Define a simple route
app.get('/', (req: Request, res: Response) => {
  res.send({
    message: 'Hello, TypeScript with Express!',
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
