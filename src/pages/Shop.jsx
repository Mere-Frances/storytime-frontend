import React, { useContext } from 'react';
import PageHeader from '../components/PageHeader';
import ContentSection from '../components/ContentSection';
import ProductList from '../components/ProductList';
import { Link } from 'react-router-dom';
import { IoAddOutline } from "react-icons/io5";
import { CartContext } from '../context/CartContext';
import Seo from '../components/Seo';

const Shop = () => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({
      id: 'pepeha-book',
      name: 'Pepeha Book',
      price: 19.90,
      quantity: 1,
      images: { src: '/section-imgs/Storytime-Pepeha-Book.jpg' },
    });
  };

  return (
    <>
    <Seo
      title="Shop - Storytime Foundation"
      description="Browse our products and packages."
    />
      <PageHeader
        img_url='/header-bg-imgs/shop-header.jpg'
        surtitle=''
        title={
          <>
                <span>p</span>
                <span>e</span>
                <span>p</span>
                <span>e</span>
                <span>h</span>
                <span>a</span><br/>
                <span>b</span>
                <span>o</span>
                <span>o</span>
                <span>k</span>
          </>
        }
        subtitle='The first title in our Storytime Books range is the Pepeha Cloth Book'
        btn='Buy now'
        btnLink='/shop/singlepage'
      />

      <section className='shop-single-item--preview'>
        <ContentSection
          title={
            <>
              Give one, Get one
              <p>Our first title, the Pepeha Cloth Book, is available now. And for every book you buy, we will gift a second one to another family. We call it ‘Give One, Get One’.</p>
            </>
          }
          customElement={
            <div id="homeCont" className='post-container'>
              <div className='quick-link'>
                <a className="tertiary-button" onClick={handleAddToCart}>
                  <IoAddOutline />
                </a>
                <Link to='/shop/singlepage' className='single-post-container'>
                  <img src='/section-imgs/Storytime-Pepeha-Book.jpg' alt='Pepeha Book' />
                </Link>
                <h3>Pepeha Book</h3>
                <h3>$19.90 NZD</h3>
              </div>
            </div>
          }
          paragraph={
            <>
              The first title in our Storytime Books range is a cloth picture book for babies aged 0-12 months. Inspired by the rich tradition of ‘pepeha’ from Māori culture, it is designed to encourage the sharing of whānau purakau/stories and connections.
              <br /><br />Pepeha is a key concept in tikanga Māori – a way of introducing ourselves through connections to the people and places that are important in our lives.
              <br /><br />Featuring striking black and white illustrations designed for babies’ developing vision, this book encourages families to tell their own stories prompted by the pictures as they share a space of togetherness, where bonds and a sense of whānau belonging can deepen.
            </>
          }
          includeSvg={false}
        />
      </section>

      <section className='shop-products--container'>
        <h2>Browse our donation packages</h2>
        <ProductList />
      </section>
    </>
  );
};

export default Shop;
