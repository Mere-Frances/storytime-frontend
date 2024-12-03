import React, {useContext, useEffect, useState} from 'react';
import wooCommerceApi from '../woocommerceApi';
import { IoAddOutline } from "react-icons/io5";
import { CartContext } from '../context/CartContext';
import { IoCheckmarkOutline } from "react-icons/io5";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const { addToCart } = useContext(CartContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
              const response = await wooCommerceApi.get('/products');
              console.log('API Response:', response.data);
              setProducts(response.data);
              setLoading(false);
            } catch (error) {
              console.error('Error fetching products:', error);
            }
          };
          fetchProducts();
    }, []);

    const handleAddToCart = (product) => {
        addToCart(product);
      };

  return (
    <>
        <section className='populated-posts'>
          <div id="homeCont" className='post-container'>
                {loading ? (
                    <div className='loader'>
                        <h3>Loading</h3>
                        <div className="custom-loader"></div>
                    </div>
                    ) : (
                        products.map((product) => (
                            <div key={product.id} className='quick-link'>
                                <a className="tertiary-button" onClick={(e) => {handleAddToCart(product); e.currentTarget.classList.add('clicked');}}>
                                    <IoAddOutline className='plus'/>
                                    <IoCheckmarkOutline className='check' />
                                </a>
                                <div className='single-post-container' onClick={() => handleAddToCart(product)}>
                                    {product.images && product.images.length > 0 && (
                                        <img
                                            src={product.images[0].src}
                                            alt={product.images[0].alt || product.name}
                                        />
                                    )}
                                </div>
                                <h3>{product.name}</h3>
                                <h3>${(product.prices.price / 100).toFixed(2)} NZD</h3>
                            </div>
                        ))
                    )}
                </div>
        </section>
    </>
  )
}

export default ProductList
