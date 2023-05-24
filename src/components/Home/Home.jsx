import "./Home.scss";
import Banner from './Banner/Banner'
import Category from "./Category/Category";
import Products from "../Products/Products";
import { useContext, useEffect, useState } from "react";
import { fetchDataFromApi } from "../../utils/api";   
import { Context } from "../../utils/context";
const Home = () => {
    const { categories, setCategories, products, setProducts } = useContext(Context);

    useEffect(() => {
        getCategories();
        getProducts();
    }, []);

    const getCategories = () => {
        fetchDataFromApi("/api/categories?populate=*").then( res => { setCategories(res) });
    }
    const getProducts = () => {
        fetchDataFromApi("/api/products?populate=*").then( res => { setProducts(res) });
    }
    return (
        <div>
            <Banner />
            <div className="main-content">
                <div className="layout">
                    { categories.length!=0 && <Category categories  = { categories } /> }
                    { products.length!= 0 && <Products products = { products } headingText="Popular Products" flag={false} /> }
                </div>
            </div>
        </div>
    );
};

export default Home;
