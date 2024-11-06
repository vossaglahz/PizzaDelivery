import styles from "./ProductDetails.module.css";
import { ProductCardProps } from "../ProductCard/ProductCard.props";

const ProductDetails = (props: ProductCardProps) => {
    return (
        <div>
            <div className={styles["header"]}>
                <div className={styles["title"]}>{props.name}</div>
            </div>
            <div className={styles["container"]}>
                <img className={styles["image"]} src={props.image} alt="image of food" />
                <div className={styles["textside"]}>
                    <div className={styles['price']}>
                        <span className={styles["itemName"]}>Цена: </span>&nbsp;
                        {props.price}&nbsp;<span className={styles["currency"]}>₸</span>
                    </div>
                    <div className={styles["rating"]}>
                        {props.rating}&nbsp;
                        <img className={styles['star-icon']} src="./public/star.svg" alt="star" />
                    </div>
                    <div className={styles["description"]}>
                        <p className={styles["descriptionName"]}>Состав:</p>
                        <ul className={styles["ingredients-list"]}>
                            {props.description.split(",").map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
