import express from 'express';
import mongoose from 'mongoose';
//to implement real logic for the functions
//gives access to the real model
import PostMessage from '../models/postMessage.js';

const router = express.Router();

//declare the function for the router.get (in server/routes/posts.js)
//to use in the server/routes/posts.js, I must export it
export const getPosts = async (req, res) => { 
    try {
        //retrieve all the posts that I currently have in the database
        /*
            finding something inside of a model takes time which means it is an asynchronous action 
            therefore it requires the keyword 'await' and make the function asynchronous with the 
            keyword 'async'
        */
        const postMessages = await PostMessage.find();
               
        //200 means everything went okay
        //return json which is simply going to be an array of all messages that I have
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getPost = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await PostMessage.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//ALSO an arrow function that has a request and respond
export const createPost = async (req, res) => {
    //with post requests, I have access to req.body
    const { title, message, selectedFile, creator, tags } = req.body;

    const newPostMessage = new PostMessage({ title, message, selectedFile, creator, tags }) //not sending this requests yet until the logic is implemented on the front-end

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage );
    } catch (error) {
        // for the status codes, check this link:
        // http://www.restapitutorial.com/httpstatuscodes.html
        res.status(409).json({ message: error.message });
    }
}

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

export const likePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    const post = await PostMessage.findById(id);

    const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });
    
    res.json(updatedPost);
}


export default router;