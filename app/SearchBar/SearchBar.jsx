import { useEffect,useState } from "react"
import "./SearchBar.css"



export default function SearchBar(){
    const [filteredProducts,setFilteredProducts] = useState([])
    const [searchValue, setSearchValue] = useState("")
    const shouldDisplayButton = searchValue.length > 0
    useEffect(fetchAPIData, [searchValue])

    const handleInputChange = (event) => {
        setSearchValue(event.target.value)
    }

    const handleClearClick = () => {
        setSearchValue("")
    }
    

    function fetchAPIData(){
        fetch('https://fakestoreapi.com/products')
        .then(response=>response.json())
        .then(products => {
            const filteredProducts = products.filter((product) => {
                return product.title.toLowerCase().includes(searchValue.toLowerCase())
            })
            const currentFilter = filteredProducts.map((product, index) =>{
                return (<div className="productStyle" key={index}>
                        <p>{product.title}</p>
                        <p> ${product.price}</p>
                        <img style= {{width: "100px"}} src={product.image} alt={product.title}/>
                    </div>)
            })
            setFilteredProducts(currentFilter)
        })
    }
    //useEffect(fetchAPIData, []) // on page load, call fetchAPIData

    return <div>
        <p>The Search Bar</p>
        <input type="text" value={searchValue} onChange={handleInputChange}/>
        {shouldDisplayButton && <button onClick={handleClearClick}>clear</button>}
        <div style={{display:"flex", flexFlow:"row wrap"}}>{filteredProducts}</div>
    </div>
    
}