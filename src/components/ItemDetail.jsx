import './style.css';

function ItemDetail({item}) {
  return (
    <div>
    <h2 className='title-detail'>Detalles del producto</h2>
      <div className='card'>
          <div className='card-content'>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <h4>{item.desription}</h4>
          </div>
      </div>
    </div>
  )
}

export default ItemDetail
