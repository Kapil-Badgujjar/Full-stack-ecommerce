import { useParams } from "react-router-dom";
import { useEffect } from "react";
import "./Category.scss";
import Products from "../Products/Products"
import useFetch from "../../hooks/useFetch";
const Category = () => {
    const {id} = useParams();
    const data = useFetch(`/api/products?populate=*&[filters][categories][id]=${id}`);
    return <div className="category-main-content">
        <div className="layout">
            <div className="category-title">
                {data.length != 0 && data.data[0].attributes.categories.data[0].attributes.title }
            </div>
            { data.length != 0 && <Products products={data}  highelitedtext = { data.data[0].attributes.categories.data[0].attributes.title }flag={true} />}
        </div>
    </div>;
};

export default Category;
