import React from 'react';

    const ContentSection = ({ title, img_url, customElement, paragraph, includeSvg }) => {
    return (
    <>
        <div className='content-section--wave'>
        {includeSvg && (
            <svg
            id='wave'
            viewBox='0 0 1440 100'
            xmlns='http://www.w3.org/2000/svg'
            preserveAspectRatio='none'
            ><path d='M0,10L15,11.7C30,13,60,17,90,20C120,23,150,27,180,38.3C210,50,240,70,270,78.3C300,87,330,83,360,81.7C390,80,420,80,450,80C480,80,510,80,540,75C570,70,600,60,630,51.7C660,43,690,37,720,33.3C750,30,780,30,810,35C840,40,870,50,900,60C930,70,960,80,990,81.7C1020,83,1050,77,1080,63.3C1110,50,1140,30,1170,23.3C1200,17,1230,23,1260,25C1290,27,1320,23,1350,21.7C1380,20,1410,20,1440,28.3V100H0Z'></path>
            </svg>
        )}
        </div><div className='section-content--container'>
            <h2>{title}</h2>
            <div className='content-details'>
            <div className="content-section--image">
                {customElement ? (
                    customElement
                ) : (
                    img_url && <img src={img_url} alt="Content Section" />
                )}
                </div>
                <p>{paragraph}</p>
            </div>
        </div>
    </>
  )
}

export default ContentSection
