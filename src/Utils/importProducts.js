import { addDoc, collection } from "firebase/firestore";
import { db } from '../firebase/dbConnection'
import { products } from "./MockData";

export const importProducts = () => {
    const productsCollection = collection(db, "productos");

    products.forEach((elem) => {
            addDoc(productsCollection, elem)
            .then()
            .catch((err) => console.log(err));
    })
}
