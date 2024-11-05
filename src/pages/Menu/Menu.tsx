import { useEffect, useState } from "react";
import Headling from "../../components/Headling/Headling"
import Search from "../../components/Search/Search"
import { API } from "../../helpers/API";
import { Product } from "../../interfaces/product.interface";
import styles from "./Menu.module.css";
import axios, { AxiosError } from "axios";
import { MenuList } from "./MenuList/MenuList";

export const Menu = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [error, setError] = useState<string | undefined>();
    const [filter, setFilter] = useState<string>("");
    
    const getMenu = async () => {
        try {
            const { data } = await axios.get<Product[]>(`${API}`)
            setProducts(data);
        } catch (error) {
            if(error instanceof AxiosError) {
                setError(error.message)
            }
            return console.error(error);
        }
    };

    useEffect(() => {
        getMenu();
    }, [])

    return (
        <>
            <div className={styles["head"]}>
                <Headling>Menu</Headling>
                <Search onChange={(e => setFilter(e.target.value))} placeholder="Write name of food"/>
            </div>
            <div>
                {error && <>{error}</>}
                <MenuList products={products} filter={filter}/>
            </div>
        </>
    )
}