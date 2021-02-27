//utilize the possibilities of mongoose
import mongoose from 'mongoose';

//first I need to create a mongoose schema
//it will be a function that will have an object immediately in there
/*
    What is Schema? With Mongodb, I can create documents that are absolutely
    different, what can have the title and the message, and what can only have 
    the message and so on. Mongoose allows me to give some sort of form of 
    uniformity to my documents, I am going to specify that each post is going
    to have to have these things (eg. title, message, creator, etc..)
*/

const postSchema = mongoose.Schema({
    //each post is going to have:
    title: String, //of type of String
    message: String,
    creator: String,
    tags: [String], //array of Strings 
    selectedFile: String, //going to convert an image into a String using the base64
    likeCount: { //an object {} because I need to add additional information
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

//now that I have the Schema (above), I have to turn it into a model
const PostMessage = mongoose.model('PostMessage', postSchema);

/*
    I am exporting a mongoose model from the PostMessage file, and then
    on that model (later on) I will be able to run commands such as Find, 
    Create, Delete and Update.
*/
export default PostMessage;

//now that the model is done, I can create more routes

