import mongoose from 'mongoose';

const articleSchema = new mongoose.Schema({
    title: String,
    link: String,
    pubDate: Date,
});

const Article = mongoose.model('Article', articleSchema);
export default Article;
