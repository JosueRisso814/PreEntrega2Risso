import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data/MOCK_DATA.json";
import ItemList from "./ItemList";

function ItemListContainer() {
    const [productos, setProductos] = useState([]);
    const category = useParams().categoryid;

    const pedirProductos = () => {
        return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(data)
        }, 500);
        })
    }
    useEffect(()=> {
        pedirProductos ()
        .then((res)=> {
            category 
            ? setProductos( res.filter((el)=> el.category === category))
            : setProductos(res);
        })
    }, [category])


  return (
    <div>
        <ItemList prod={productos} />
    </div>
  )
}

export default ItemListContainer
