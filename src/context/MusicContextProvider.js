import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { db } from "../fire";

export const musicContext = createContext();
export const useMusic = () => {
  return useContext(musicContext);
};

const MusicContextProvider = ({ children }) => {
  const productsCollectionRef = collection(db, "music-project");
  const [data, setData] = useState([]);
  const [oneMusic, setOneMusic] = useState({});

  //! add Music
  async function addMusic(data) {
    await addDoc(productsCollectionRef, data);
    getMusic();
  }

  //! getMusic
  async function getMusic() {
    const data = await getDocs(productsCollectionRef);
    setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  }

  //! getOneMusic
  async function getOneMusic(id) {
    const oneMusicRef = doc(db, "music-project", id);
    const oneMusic = await getDoc(oneMusicRef);
    setOneMusic(oneMusic.data());
  }

  //! updateMusic
  async function updateMusic(id, updateMusic) {
    const productDocRef = doc(db, "music-project", id);
    await updateDoc(productDocRef, updateMusic);
    getMusic();
  }

  //! deleteMusic
  async function deleteMusic(id) {
    const productDocRef = doc(db, "music-project", id);
    await deleteDoc(productDocRef);
    getMusic();
  }

  //! Filter
  async function testData(filter, type) {
    const q = query(productsCollectionRef, where(filter, "==", type));
    let filterArr = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      filterArr.push(doc.data());
    });
    setData(filterArr);
  }

  //! Pagination
  const navigate = useNavigate();
  const location = useLocation();
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;
  const count = Math.ceil(data.length / itemsPerPage);

  function currentData() {
    const begin = (page - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return data.slice(begin, end);
  }

  const values = {
    data,
    addMusic,
    getMusic,
    getOneMusic,
    deleteMusic,
    updateMusic,
    oneMusic,
    page,
    count,
    setPage,
    currentData,
  };
  return (
    <musicContext.Provider value={values}>{children}</musicContext.Provider>
  );
};

export default MusicContextProvider;
