import React, { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './ProductDetails.module.scss';
import Product from '../../../models/Product';
import { getProduct } from '../../../utils/fetch';
import { BASE_API_URL } from '../../../config';

interface ProductDetailsProps {}

const ProductDetails: FC<ProductDetailsProps> = () => {
  const params = useParams();
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState(false);


  console.log(product)

  useEffect(()=>{
    if(params.prodId){
      setLoading(true);

      getProduct(+params.prodId).then((product) => {
        console.log('loading', loading)
        setProduct(product);


      }).catch((err) => {
        console.log(err);

      }).finally(()=>{
        setLoading(false)
      });
    }

  },[]);

  const renderProduct = () => {
    if (product){
      const imgSrc = `${BASE_API_URL}/products/images/${product.imageName}`;

      return (
        <div className={styles.ProductDetails__product}>
          <div className={styles.ProductDetails__imgContainer}>
            <img src={imgSrc}/>
          </div>
          <div className={styles.ProductDetails__content}>
            <h3>name:{product.name}</h3>
            <h3>name:{product.price}</h3>
            <h3>name:{product.stock}</h3>

       

          </div>
        </div>
      )

    }


  }

  return (
    <div className={styles.ProductDetails}>
      <header className={styles.productDetails__header}>
        <h2>Product Details</h2>
      </header>
      <div className={styles.ProductDetails__body}>
        {renderProduct()}
      </div>

    </div>
  );
}

export default ProductDetails;
