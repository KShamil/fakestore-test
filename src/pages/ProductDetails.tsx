import { useParams } from 'react-router-dom'
import products from '../data/product';

const ProductDetails = () => {

    const { id } = useParams();
    const detalItems = products.find(p => p.id === id);

    return (
        <div className="container">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src={detalItems?.image} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={400} height={400} loading="lazy" />
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold lh-1 mb-3">{detalItems?.title}</h1>
                    <h1 className="display-5 fw-bold lh-1 mb-3 text-danger">{detalItems?.price} $</h1>
                    <p className="lead text-dark">{detalItems?.description}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails