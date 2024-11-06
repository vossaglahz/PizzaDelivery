import styles from "./CardItem.module.css";
import { useEffect, useState } from "react";
import cn from "classnames";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const CardItem = () => {
    const [cards, setCards] = useState<{ id: number; name: string; price: number; image: string; count: number }[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const data = localStorage.getItem("items");
        if (data) {
            const parsedData = JSON.parse(data);
            const initializedCards = parsedData.map((item: {}) => ({
                ...item,
                count: 1,
            }));
            setCards(initializedCards);
        }
    }, []);

    const add = (id: number) => {
        setCards((prevCards) =>
            prevCards.map((card) =>
                card.id === id ? { ...card, count: card.count + 1 } : card
            )
        );
    };

    const remove = (id: number) => {
        setCards((prevCards) =>
            prevCards.map((card) =>
                card.id === id ? { ...card, count: card.count - 1 } : card
            )
        );
    };

    const deleteCard = (id: number) => {
        setCards((prevCards) => prevCards.filter((card) => card.id !== id));
        const updatedCards = cards.filter((card) => card.id !== id);
        localStorage.setItem("items", JSON.stringify(updatedCards));
    };

    const handleSuccess = () => {
        navigate("/success");
        localStorage.removeItem("items");
    };

    const totalPrices = cards.reduce((total, card) => total + card.price * card.count, 0);
    const deliveryCharge = 20;
    const grandTotal = totalPrices + deliveryCharge;

    return (
        <div className={styles["cartWrapper"]}>
            <div className={styles["itemsContainer"]}>
                {cards.map((c) => (
                    <div key={c.id} className={styles["item"]}>
                        <div className={styles["header"]}>
                            <img className={styles["image"]} src={c.image} alt="image of food" />
                            <div className={styles["text"]}>
                                <div className={styles['name']}>
                                    {c.name}
                                </div>
                                <div className={styles['price']}>
                                    {c.price}&nbsp;
                                    <span className={styles["currency"]}>₸</span>
                                </div>
                            </div>
                            <div className={styles["add-wrapper"]}>
                                <button className={cn(styles["add-control"], {
                                    [styles.inactive]: c.count <= 0
                                })} disabled={c.count <= 0} onClick={() => remove(c.id)}>-</button>
                                <div className={styles["count"]}>{c.count}</div>
                                <button className={styles["add-control"]} onClick={() => add(c.id)}>+</button>
                                <button className={styles["delete-button"]} onClick={() => deleteCard(c.id)}>×</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {cards.length > 0 ? (
                <div className={styles["total"]}>
                    <div className={styles["summary"]}>
                        <span className={styles["itemName"]}>Товар:</span>
                        <span className={styles["itemPrice"]}>{totalPrices} <span className={styles["currencySymbol"]}>₸</span></span>
                    </div>
                    <div className={styles["summary"]}>
                        <span className={styles["itemName"]}>Доставка:</span>
                        <span className={styles["itemPrice"]}>{deliveryCharge} <span className={styles["currencySymbol"]}>₸</span></span>
                    </div>
                    <div className={styles["summary"]}>
                        <span className={styles["itemName"]}>Итого:</span>
                        <span className={styles["itemPrice"]}>{grandTotal} <span className={styles["currencySymbol"]}>₸</span></span>
                    </div>
                    <Button onClick={handleSuccess} className={styles["payButton"]} appearance="big">
                        Оплатить
                    </Button>
                </div>
            ) :  <img className={styles["NotingImage"]} src={'/public/empty-box.png'} alt="Noting" /> }
        </div>
    );
}

export default CardItem;
