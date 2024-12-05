import React from 'react';
import PageHeader from '../components/PageHeader';
import ContentSection from '../components/ContentSection';
import ProductList from '../components/ProductList';
import Seo from '../components/Seo';

const Donate = () => {
  return (
    <>
    <Seo
      title="Donate - Storytime Foundation"
      description="Support us through donations."
    />
      <PageHeader
        img_url='/header-bg-imgs/donate-header.jpg'
        alt='child reading'
        surtitle=''
        title={
          <>
                <span>s</span>
                <span>u</span>
                <span>p</span>
                <span>p</span>
                <span>o</span>
                <span>r</span>
                <span>t</span><br/>
                <span>u</span>
                <span>s</span>
          </>
        }
        subtitle='we rely on grants and donations to fund our work with whānau across Aotearoa'
        btn='Learn more'
        btnLink='/ourwork'
        includeSvg={false}
      />

      <section className='shop-products--container'>
        <h2>Browse our donation packages</h2>
        <ProductList/>
      </section>

      <section className='content-section beige-section'>
        <ContentSection 
          title='How your donation can help' 
        />
        <div className='donation-info--container'>
          <img src='/section-imgs/multiple-family-photo-blobs.png' alt='Photos of families reading'/>
          <p>You can support us by donating, all donations over $5 are tax deductible.</p>
          <h4>We are also proud to have the support of key organisations such as The Tindall Foundation, Todd Foundation, NZ Lotteries, and many more. </h4>
        </div>
      </section>  
    </>
  )
}

export default Donate
