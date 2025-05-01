import { db } from '../config/firebase';
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';

export const createUserProfile = async (userId: string, data: any) => {
  await setDoc(doc(db, 'users', userId), {
    ...data,
    isAdmin: false,
    createdAt: new Date()
  });
};

export const setUserAsAdmin = async (userId: string) => {
  await updateDoc(doc(db, 'users', userId), {
    isAdmin: true,
    updatedAt: new Date()
  });
};

export const getUserProfile = async (userId: string) => {
  const docRef = doc(db, 'users', userId);
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return null;
  }
};