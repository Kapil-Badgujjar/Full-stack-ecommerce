import Products from "../../Products/Products"
import useFetch from "../../../hooks/useFetch";
const RelatedProducts = ({productId, categoryId}) => {
    const {data} = useFetch(`/api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`);
    console.log(data);
    return <div className="">
        <Products headingText="Related Products" products={{data}} flag={false}/>
        </div>;
};

export default RelatedProducts;
