
import { useEffect } from 'react';
import styles from './index.module.css';
import { useState } from 'react';
import Card from '../Card';
import Header from '../Header';
import BasketContext from '../../contexts/BaksetContext';


const Homepage = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
    }, [])
    return (

            <section className={styles.container}>
                {
                    products.map(product => {
                        return <Card key={product.id} {...product} />
                    })
                }
            </section>
    )
}


export default Homepage;