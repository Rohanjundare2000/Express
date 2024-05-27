import express from 'express';
import numberRouter from './NumberRouter';

const PORT = 6500;
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Mounting the numberRouter
app.use('/number', numberRouter);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
