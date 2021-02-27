import axios from 'axios';

const url = 'http://localhost:5000/posts'; //this is the url pointing to the back-end route

/** functions **/
export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);

/*
    All actions toward the back-end will be done using redux,  I will need to dispatch 
    those actions and to do that I Will need to add borderplate code meaning that I Will
    have to add new files and folders but, later on, on bigger applications this is going
    to be extremely great due to the scalability, by making the application scalable so 
    when it grows I will be able to use that same consistency without any trouble.

    Starting with creating folders named 'actions' and 'reducers'

*/