import { useEffect,useState } from "react"
import "./SearchBar.css"



export default function SearchBar(){
    const [filteredProducts,setFilteredProducts] = useState([])
    function fetchAPIData(){
        fetch('https://fakestoreapi.com/products')
        .then(response=>response.json())
        //.then(result=>console.log(result))
        .then(products => {
            const currentFilter = products.map((product, index) =>{
                return (<div className="productStyle">
                        <p>{product.title}</p>
                        <p>${product.price}</p>
                        <img style= {{width: "100px"}} src={product.image} alt={product.title}/>
                    </div>)
            })
            setFilteredProducts(currentFilter)
        })
    }
    useEffect(fetchAPIData, []) // on page load, call fetchAPIData

    return <div>
        <p>The Search Bar</p>
        <div style={{display:"flex", flexFlow:"row wrap"}}>{filteredProducts}</div>
    </div>
    
}