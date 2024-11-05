import { NavLink, Outlet } from "react-router-dom"
import styles from "./Layout.module.css";
import Button from "../../components/Button/Button";
import cn from "classnames";

export const Layout = () => {
    
    return (
        <div className={styles["layout"]}>
            <div className={styles["sideBar"]}>
                <div className={styles["user"]}>
                    <img className={styles["avatar"]} src="/public/avatar.png" alt="avatar" />
                    <div className={styles["name"]}>Жалгасов Мерей</div>
                    <div className={styles["email"]}>mereyzhalgassov@mail.ru</div>
                </div>
                <div className={styles["menu"]}>
                    <NavLink to='/' className={({ isActive }) => cn(styles["link"], {
                        [styles.active]: isActive
                    })}>
                    <img className={styles["icon"]} src="/public/menu.svg" alt="menu" />Меню</NavLink>
                    <NavLink className={({ isActive }) => cn(styles["link"], {
                        [styles.active]: isActive
                    })} to='/cart'>
                    <img className={styles["icon"]}src="/public/cart.svg" alt="cart"/>Корзина</NavLink>
                </div>
                <Button className={styles["exit"]}>
                    <img className={styles["icon"]} src="/public/exit.svg" alt="exit" />
                    Выход
                </Button>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}