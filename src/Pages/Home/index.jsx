import CardProduct from "../../Components/CardProduct"
import { useEffect, useState } from "react"
import Loading from "../../Components/Loading"

function Home(){
    const [products, setProducts] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)

    useEffect(() =>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>(
                setProducts(data),
                setRemoveLoading(true)
                ))
                .catch(err => console.log(err))
    }, [])


    return(
        <div className="h-screen w-full flex flex-wrap gap-3 ">  
        
        {!removeLoading && <Loading/>}
         {products.map(prod => {
            return(
                <CardProduct key={prod.id} image={prod.image} title={prod.title} price={prod.price} category={prod.category} description={prod.description} />

            )
        })}
       

        </div>  
    )
}

export default Home