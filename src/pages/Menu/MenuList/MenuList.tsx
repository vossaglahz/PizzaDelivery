import ProductCard from "../../../components/ProductCard/ProductCard"
import { MenuListProps } from "./MenuList.props";

export const MenuList = ({ products }: MenuListProps) => {
    return (
        products.map(p => 
            <ProductCard 
                key={p.id}
                id={p.id}
                title={p.name}
                description={p.topping ? p.topping.join(", ") : ""}
                rating={p.rank ? p.rank : 0}
                price={p.price}
                image="/public/pizza.jpg"
            />
    ));
};