import ProductCard from "../../../components/ProductCard/ProductCard";
import { MenuListProps } from "./MenuList.props";
import styles from "./MenuList.module.css";
import { images } from "../../../helpers/images";

export const MenuList = ({ products, filter }: MenuListProps) => {

    return (
        <div className={styles.wrapper}>
            {products
                .filter(p => p.name.includes(filter))
                .map((p, index) => (
                    <ProductCard 
                        key={p.id}
                        id={p.id}
                        name={p.name}
                        description={p.topping ? p.topping.join(", ") : ""}
                        rating={p.rank || 0}
                        price={p.price}
                        image={images[index % images.length]}
                    />
                ))
            }
        </div>
    );
};