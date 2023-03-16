import React, { FC, useEffect, useState } from 'react';
import Product from '../../models/Product';
import { getProducts } from '../../utils/fetch';
import Products from './Products/Products';
import styles from './ProductsArea.module.scss';

interface ProductsAreaProps { }

const ProductsArea: FC<ProductsAreaProps> = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect( () => {

        setIsLoading(true);

        getProducts().then((products) => {
            setProducts(products)

        }).catch((err) => {

            console.log(err.message)
        }).finally(() => {
            setIsLoading(false);
        });


    }, []);








    if (isLoading) return <p>...loading</p>

    return (
        <div className={styles.ProductsArea}>
            <Products products={products} />
        </div>
    )
}






export default ProductsArea;
