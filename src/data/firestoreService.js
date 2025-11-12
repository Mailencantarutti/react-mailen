// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";
import { products } from "./data.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvcKeGy-k_e55GPRAh5de0N0c4aHGMZFA",
  authDomain: "react-cantarutti.firebaseapp.com",
  projectId: "react-cantarutti",
  storageBucket: "react-cantarutti.firebasestorage.app",
  messagingSenderId: "165056928849",
  appId: "1:165056928849:web:0fd00de09736234ec76c70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getData(){
  const productsRef = collection(db, "products")
  const productsSnapshot = await getDocs(productsRef)
  const docs = productsSnapshot.docs;  
  const dataDocs = docs.map( item => {
     return { ...item.data(), id: item.id }
  })
  return dataDocs;
}

//getProductById
export async function getProductById(idParam){
 const docRef = doc(db, "products", idParam)
 const docSnapshot = await getDoc(docRef);
 const docData = docSnapshot.data()
 const idDoc = docSnapshot.id
 return { ...docData, id: idDoc };
}

//getProductsByCategory
export async function getProductsByCategory(categParam){
  const productsRef = collection(db, "products")

  const q = query(productsRef, where("category", "==", categParam))

  const productsSnapshot = await getDocs(q)
  const docs = productsSnapshot.docs;  
  const dataDocs = docs.map( item => {
     return { ...item.data(), id: item.id }
  })
  return dataDocs;
}

export async function createBuyOrder(orderData){
  const ordersRef = collection(db, "orders")
  const newDoc = await addDoc(ordersRef, orderData)
  return newDoc;
}

export async function exportProducts(){
  const productsRef = collection(db, "products")
  for(let item of products){
    delete item.id;
    const newDoc = await addDoc(productsRef, item)
    console.log("doc creado", newDoc.id)
  }  
}


export default getData;