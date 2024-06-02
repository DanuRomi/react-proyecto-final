import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getProductoById } from '../Utils/MockData';
import ItemDetail from './ItemDetail';
import Loading from './Loading'
import { db } from '../firebase/dbConnection';
import { collection, doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {

  const [product, setProduct] = useState([]);
  const { productId } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const productsCollection = collection(db, "productos");
    const refDoc = doc(productsCollection, productId);

    getDoc(refDoc).then((res) => {
      setProduct({id: res.id, ...res.data()});
      setLoading(false);
    });

  }, [productId]);

  return (
    <>
      { loading ? 
        <Loading /> :
        <div className='itemDetail'>
          <ItemDetail {...product} />
        </div>
      }
    </>
  )
}

export default ItemDetailContainer