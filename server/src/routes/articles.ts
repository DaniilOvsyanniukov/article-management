import express from 'express';
import Article from '../models/article';
import jwt from 'jsonwebtoken';
import Joi from 'joi';

const router = express.Router();

const verifyJWT = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const token = req.header('auth-token');
  if (!token) return res.status(401).send('Access Denied');

  try {
    const verified = jwt.verify(token, 'PrivateKey');
    (req as any).user = verified;
    next();
  } catch (err) {
    res.status(400).send('Invalid Token');
  }
};

router.get('/', verifyJWT, async (req: express.Request, res: express.Response) => {
  const articles = await Article.find();
  res.send(articles);
});

router.get('/:id', verifyJWT, async (req: express.Request, res: express.Response) => {
  const article = await Article.findById(req.params.id);
  if (!article) return res.status(404).send('The article with the given ID was not found.');
  res.send(article);
});

router.post('/', verifyJWT, async (req: express.Request, res: express.Response) => {
  const schema = Joi.object({
    title: Joi.string().min(3).required(),
    link: Joi.string().uri().required(),
    content: Joi.string().required(),
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const article = new Article(req.body);
  await article.save();
  res.send(article);
});

router.put('/:id', verifyJWT, async (req: express.Request, res: express.Response) => {
  const article = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!article) return res.status(404).send('The article with the given ID was not found.');
  res.send(article);
});

router.delete('/:id', verifyJWT, async (req: express.Request, res: express.Response) => {
  const article = await Article.findByIdAndRemove(req.params.id);
  if (!article) return res.status(404).send('The article with the given ID was not found.');
  res.send(article);
});

export default router;
