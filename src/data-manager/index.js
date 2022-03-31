import { db } from "../firebase";
import {
  collection,
  getDocs,
  addDoc,
  getDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

const postCollection = collection(db, "posts");

class PostManager {
  addPost = (newPost) => {
    return addDoc(postCollection, newPost);
  };
  getAllPosts = () => {
    return getDocs(postCollection);
  };
  getOnePost = (id) => {
    const postDoc = doc(db, "posts", id);
    return getDoc(postDoc);
  };
  deleteOnePost = (id) => {
    const postDoc = doc(db, "posts", id);
    return deleteDoc(postDoc);
  };
}

export default new PostManager();
