import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";
import { ProductCardProps } from "./ProductCard.props";

const ProductCard = (props: ProductCardProps) => {
    return (
        <Link to={"#"} className={styles["card-wrapper"]}>
            <div className={styles["card"]}>
                <div className={styles["header"]} style={{backgroundImage: `url("${props.image}")`}}>
                    <div className={styles['price']}>
                        {props.price}&nbsp;
                        <span className={styles["currency"]}>₸</span>
                    </div>
                    <button className={styles['add-to-cart']}>
                        <img className={styles['cart-icon']} src="/public/cart.svg" alt="cart" />
                    </button>
                    <div className={styles["rating"]}>
                        {props.rating}&nbsp;
                        <img className={styles['star-icon']} src="/public/star.svg" alt="star" />
                    </div>
                </div>
                <div className={styles["footer"]}>
                    <div className={styles["title"]}>{props.title}</div> 
                    <div className={styles["description"]}>{props.description}</div>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard;