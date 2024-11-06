import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";
import { ProductCardProps } from "./ProductCard.props";
import { useEffect, useRef, useState } from "react";

const ProductCard = (props: ProductCardProps) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [isAdded, setIsAdded] = useState(false);
    const [cards, setCards] = useState<{ id: number; name: string; price: number; image: string; count: number }[]>([]);

    const add = (id: number, name: string, price: number, image: string) => {
        const newItem = { id, name, price, image};
        const existingItems = localStorage.getItem("items");
        let itemsArray: { name: string; price: number }[] = [];
        if (existingItems) {
            itemsArray = JSON.parse(existingItems);
        }
        itemsArray.push(newItem);
        localStorage.setItem("items", JSON.stringify(itemsArray));
        setIsAdded(true);
    };

    useEffect(() => {
        const data = localStorage.getItem("items");
        if (data) {
            const parsedData = JSON.parse(data);
            setCards(parsedData);
        }
    }, []);

    return (
        <Link to={`/product/${props.id}`} className={styles["card-wrapper"]}>
            <div className={styles["card"]}>
                <div className={styles["header"]} style={{ backgroundImage: `url("${props.image}")` }}>
                    <div className={styles['price']}>
                        {props.price}&nbsp;
                        <span className={styles["currency"]}>₸</span>
                    </div>
                    <button
                        ref={buttonRef} disabled={isAdded}
                        style={(isAdded || cards.some(card => card.id === props.id)) ? { backgroundColor: "green" } : {}}
                        className={styles['add-to-cart']}
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            add(props.id ,props.name, props.price, props.image);
                        }}
                    >
                        <img className={styles['cart-icon']} src="/public/cartButton.svg" alt="cartButton" />
                    </button>
                    <div className={styles["rating"]}>
                        {props.rating}&nbsp;
                        <img className={styles['star-icon']} src="/public/star.svg" alt="star" />
                    </div>
                </div>
                <div className={styles["footer"]}>
                    <div className={styles["title"]}>{props.name}</div>
                    <div className={styles["description"]}>{props.description}</div>
                </div>
            </div>
        </Link>
    );
}

export default ProductCard;
