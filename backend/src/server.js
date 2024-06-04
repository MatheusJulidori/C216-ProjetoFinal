import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';

const app = express();

app.use(cors({
  origin: 'http://0.0.0.0:3000', // specify your frontend's origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

app.use('/api', routes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});