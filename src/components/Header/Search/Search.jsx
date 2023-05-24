import { MdClose } from "react-icons/md";
import "./Search.scss";
import prod from "../../../assets/products/earbuds-prod-1.webp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
useFetch;
const Search = ({ setShowSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  let { data } = useFetch(
    `/api/products?populate=*&[filters][title][$contains]=${query}`
  );

  console.log(data);
  if (!query.length) {
    data = null;
  }
  return (
    <div className="search-modal">
      <div className="form-field">
        <input
          type="text"
          autoFocus
          placeholder="Search for products"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <MdClose
          onClick={() => {
            setShowSearch(false);
          }}
        />
      </div>
      <div className="search-result-content">
        <div className="search-results">
          {data?.map((item) => (
            <div key={item.id + "S"} className="search-result-item" onClick={()=>{setShowSearch(false); navigate("/product/"+item.id)}}>
              <div className="img-container">
                <img
                  src={
                    "http://localhost:1337" +
                    item.attributes.img.data[0].attributes.url
                  }
                  alt=""
                />
              </div>
              <div className="product-details">
                <span className="name">{item.attributes.title}</span>
                <span className="desc">{item.attributes.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
