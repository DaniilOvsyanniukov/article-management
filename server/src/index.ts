import express from 'express';
import mongoose from 'mongoose';
import articleRouter from './routes/articles';
import authRouter from './routes/auth';

const app = express();
mongoose.connect('mongodb://localhost/article_management', { useNewUrlParser: true, useUnifiedTopology: true } as any)
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB:', err));

app.use(express.json());
app.use('/api/articles', articleRouter);
app.use('/api/auth', authRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
