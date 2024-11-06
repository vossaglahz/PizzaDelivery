import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { API } from "../../helpers/API";
import { Product } from "../../interfaces/product.interface";
import { images } from "../../helpers/images.ts";
import ProductDetails from "../../components/ProductDetails/ProductDetails";

export const ProductItem = () => {
    const { id } = useParams();
    const [products, setProducts] = useState<Product[]>([]);
    
    const getMenu = async () => {
        try {
            const { data } = await axios.get<Product[]>(`${API}`)
            setProducts(data);
        } catch (error) {
            if(error instanceof AxiosError) {
                console.log(error.message);
            }
            return console.error(error);
        }
    };

    useEffect(() => {
        getMenu();
    }, [])
    
    return (
        <div>
            {products
                .filter(p => p.id.toString().includes(id || ""))
                .map((p) => (
                    <ProductDetails 
                        key={p.id}
                        id={p.id}
                        name={p.name}
                        description={p.topping ? p.topping.join(", ") : ""}
                        rating={p.rank || 0}
                        price={p.price}
                        image={images[p.id - 1]}
                    />
                ))
            }
        </div>
    );
};