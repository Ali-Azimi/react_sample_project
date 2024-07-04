import { useContext } from 'react'
import styles from './index.module.css'
import BasketContext from '../../contexts/BaksetContext'
import { useNavigate } from 'react-router-dom';


const Card = ({ id, title, image, category, price }) => {
    const { basket, setBasket } = useContext(BasketContext);
    const navigate = useNavigate();
    const handleAddToBasket = (event) => {
        event.stopPropagation();
        setBasket(prev => {
            return [...prev, { id, title }]
        })
    }

    const handleClick = (productId) => {
        navigate(`/product/${productId}`)
    }
    return (
        <div className={styles.card} onClick={() => handleClick(id)}>
            <img src={image} />
            <div className={styles.body}>
                <span>{category}</span>
                <h3>{title}</h3>
                <p>price: {price}</p>
                {
                    basket.find(item => item.id === id) ?
                        <button className={`${styles.button} ${styles.has}`} onClick={handleAddToBasket}>ADDED</button>
                        :
                        <button className={styles.button} onClick={handleAddToBasket}>Add To Basket</button>

                }

            </div>
        </div>
    )
}


export default Card;