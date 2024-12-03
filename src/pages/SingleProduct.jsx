import React, {useState, useContext} from 'react';
import BackButton from '../components/BackButton';
import ProductList from '../components/ProductList';
import ContentReveal from '../components/ProductDescription';
import { CartContext } from '../context/CartContext';
import Seo from '../components/Seo';

const SingleProduct = () => {
    const [mainImage, setMainImage] = useState("/src/assets/Pepeha-Book-1001x1024.webp");
    const [clickedIndex, setClickedIndex] = useState(null);
    const { addToCart } = useContext(CartContext);

    const galleryImages = [
        "/assets/Storytime-Pepeha-Book.jpg",
        "/src/assets/Storytime-Pepeha-Both-Sides-Flat.webp",
        "/src/assets/Pepeha-in-Cloth-Bag-Front.webp",
        "/src/assets/Pepeha-in-Cloth-Bag-Back.webp",
        "/src/assets/Pepeha-Book-1001x1024.webp",
    ];

    const filters = {
        description: (<p>first title in our Storytime Books range is the Pepeha Cloth Book – a picture book for babies aged 0-12 months. Inspired by the rich Māori tradition of pepeha, it is designed to encourage the sharing of whānau purakau/stories and connections.<br/><br/>
            Part of tikanga Māori, a pepeha is a way of introducing ourselves through connections to the people and places that are important in our lives. Featuring striking black and white illustrations designed for babies’ developing vision, the Pepeha Cloth Book encourages families to spend time together telling their own stories to little ones, prompted by the pictures.<br/><br/>
            For babies and young children, every touch, every word, every shared moment holds profound significance and an opportunity for connection. The Pepeha Cloth Book helps to foster emotional closeness and cultural appreciation. With each picture, parents and caregivers can impart not only language skills, but also values and traditions.<br/><br/>
            The Pepeha Cloth Book helps to create a space where whānau bonds and a sense of security and belonging can deepen. Pepeha Cloth Book is presented in a drawstring cotton bag for easy storage and beautiful gifting.</p>),
        specifications: (<p>
            <span className='bold-text'>Format:</span> Cloth<br/><br/>
            <span className='bold-text'>Publication Date:</span> July 1, 2017<br/><br/>
            <span className='bold-text'>Publisher:</span> Storytime Foundation<br/><br/>
            <span className='bold-text'>Country of Origin:</span> New Zealand<br/><br/>
            <span className='bold-text'>Pages:</span> 10<br/><br/>
            <span className='bold-text'>Dimensions (mm):</span> 150x150x30. Presented in a drawstring cotton bag.
            </p>),
        shipping: (<p>We offer fast and reliable shipping across New Zealand.<br/>All orders are processed within 1-2 business days and shipped via standard delivery.<br/><br/>
        <span className='bold-text'>Shipping Rates:</span><br/><br/>
        <span className='bold-text'>Free Shipping on orders over $50 NZD</span><br/><br/>
        <span className='bold-text'>A flat rate of $5 NZD for orders under $50 NZD</span><br/><br/>
            Please note that delivery times may vary depending on your location, but typically range from 3-7 business days.<br/>We’ll send you a tracking number once your order has shipped, so you can monitor its progress.</p>),
      };

      const handleAddToCart = () => {
        addToCart({
          id: 'pepeha-book',
          name: 'Pepeha Book',
          price: 19.90,
          images: [{ src: mainImage }],
        });
      };
  return (
    <>
    <Seo
      title="Shop - Storytime Foundation"
      description="Our latest product- The Pepeha Book"
    />
        <section className='product-section'>
        <BackButton/>
            <div className='product-display--container'>
                <div className="product-gallery">
                    {galleryImages.map((image, index) => (
                        <img
                            key={index}
                            className={`product-gallery--item item-${index + 1} ${clickedIndex === index ? 'clicked' : ''}`}
                            src={index === 5 ? mainImage : image}
                            alt={`Gallery item ${index + 1}`}
                            onClick={() => {
                            setMainImage(image);
                            setClickedIndex(index);
                            }}
                        />
                    ))}
                </div>
                <div className='main-image'>
                    <img src={mainImage} alt="Selected product" />
                </div>
                <div className='product-details'>
                    <h2>Pepeha cloth book</h2>
                    <h3>$19.90 NZD</h3>
                    <p>first title in our Storytime Books range is the Pepeha Cloth Book – a picture book for babies aged 0-12 months. Inspired by the rich Māori tradition of pepeha, it is designed to encourage the sharing of whānau purakau/stories and connections.</p>
                    <div className='cart-buttons'>
                        <a className='primary-button' onClick={handleAddToCart}>Add to cart</a>
                    </div>
                </div>
            </div>
        </section>

        <section className='product-preview--container'>
            <div className='product-preview--details'>
                <img src='/section-imgs/blob-svg-2.png'/>
                    <ContentReveal filters={filters}/>
                <img/>
            </div>
        </section>

        <section className='shop-products--container'>
            <h2>You might be interested in</h2>
            <ProductList/>
        </section>
    </>
  )
}

export default SingleProduct
