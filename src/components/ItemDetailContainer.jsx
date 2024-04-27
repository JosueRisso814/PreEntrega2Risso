import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';
import { getProducts } from '../data/logicaItemDetail'

function ItemDetailContainer() {

  const [item, setItem] = useState(null);
  const id = (Number(useParams().id))

  useEffect(() => {
    getProducts(id)
      .then((res) => {
        setItem(res);
      })
  }, [id])

  return (
    <div>
      {item && <ItemDetail item={item} />}
    </div>
  )
}

export default ItemDetailContainer
