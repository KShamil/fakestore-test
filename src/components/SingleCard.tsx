import { Link } from 'react-router-dom'

type productType = {
  title: String,
  price: String,
  descr: String
  img: any,
  id: String
}

const SingleCard = (props: productType) => {
  return (
    <div className="product-card">
      <div className="img-box">
        <img width={200} height={250} src={props.img} alt="" />
      </div>
      <div className="details">
        <h3 className="title">{props.title}</h3>
        <p className="descr">{props.descr.substring(0, 100)}...</p>
        <h4 className="price">{props.price}$</h4>
        <Link to={`/products/${props.id}`} className="read-more">Read More</Link>
        <button className="card-btn">Buy Now</button>
      </div>
    </div>
  )
}

export default SingleCard