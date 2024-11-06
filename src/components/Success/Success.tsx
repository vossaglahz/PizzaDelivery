import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./Success.module.css";

const Success = () => {
    const navigate = useNavigate();
    return (
        <div className={styles["success"]}>
            <img className={styles["image"]} src="/bigpizza.png" alt="Big Pizza" />
            <div className={styles["text"]}>
                Ваш заказ успешно оформлен!
            </div>
            <Button onClick={() => navigate("/")} className={styles["button"]} appearance="big">
                    Сделать новый
            </Button>
        </div>
    );
};

export default Success;   