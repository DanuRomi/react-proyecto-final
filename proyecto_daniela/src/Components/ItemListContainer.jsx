import { useEffect, useState } from 'react'
import ItemList from './ItemList';
import { getProducts, getFilteredProducts } from '../Utils/MockData'
import { useParams } from 'react-router-dom';
import Loading from './Loading'
import { db } from '../firebase/dbConnection';
import { collection, getDoc, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = ({ mensaje }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { categoryId } = useParams();

  useEffect(() =>{

    const productsCollection = collection(db, "productos");

    setLoading(true);
    if (categoryId){

      const consulta = query(productsCollection, where("type", "==", categoryId));

      getDocs(consulta)
        .then(({docs}) => {
          const prodFromDocs = docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
          }));

          setProducts(prodFromDocs);
          setLoading(false);
        });
      //  getFilteredProducts(categoryId).then((res) => {
      //  setProducts(res);
      //  setLoading(false);
      //});
    }
    else{

      getDocs(productsCollection)
        .then(({docs}) => {
          const prodFromDocs = docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
          }));
          setProducts(prodFromDocs);
          setLoading(false);
      })
      //getProducts()
      //  .then((res) => {
      //    setProducts(res);
      //    setLoading(false);
      //  });
    }

  }, [categoryId]);

  return (
    <div>
      <h3 className='p-3'>{mensaje}</h3>
      { loading ?
        <Loading></Loading> :
        <ItemList productsList={products} />
      }

    </div>
  )
}

export default ItemListContainer