import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

import PageHeader from '../components/PageHeader';
import ContentSection from '../components/ContentSection';
import Sponsors from '../components/Sponsors';
import Carousel from '../components/Testimonials';
import ContentReveal from '../components/ProfileReveal';
import Seo from '../components/Seo';

const OurWork = () => {
  const workPages = [
    { id: 'page1', title: 'Child centric visiting', coverImage: '/section-imgs/flower-cover.png' },
    { id: 'page2', title: 'Taonga mō ngā Tamariki', coverImage: '/section-imgs/sun-cover.png' },
    { id: 'page3', title: 'Storytime Books', coverImage: '/section-imgs/house-cover.png' },
    { id: 'page4', title: 'First 1000 days', coverImage: '/section-imgs/plant-cover.png' }
  ];
  return (
    <>
    <Seo
      title="Our work - Storytime Foundation"
      description="Learn more about our impact."
    />
      <PageHeader
        img_url='/header-bg-imgs/ourwork-header.jpg'
        surtitle=''
        title={
          <>
            <span>o</span>
            <span>u</span>
            <span>r</span>
            <span> </span>
            <span>w</span>
            <span>o</span>
            <span>r</span>
            <span>k</span>
          </>
        }
        subtitle='Learn more about how we support families across Aotearoa'
        includeBtn={false}
        includeSvg={false}
      />

      <section className='work-quick-links--container'>
        <div className='quick-links'>
        {workPages.map((page) => (
          <NavLink key={page.id} to={`/work/${page.id}`} className='quick-link'>
            <div className='single-post-container'>
              <img src={page.coverImage} alt={page.title} />
            </div>
            <h3>{page.title}</h3>
          </NavLink>
        ))}
        </div>
      </section>

      <section className='content-section beige-section'>
        <ContentSection 
          title='About our work' 
          img_url='/section-imgs/mother-and-child-reading-2.png' 
          paragraph={
            <> 
            Research shows that establishing these bonds of security and connection can help both children and their parents/caregivers to reduce stress and process emotions better, and to improve overall family cohesion.
            <br/><br/>For these families, the stress and anxiety of their situation can get in the way of developing these important relationships, or they may simply lack the resources or knowledge. Storytime Foundation’s book-focused programmes give parents and caregivers the tools and confidence they need to build this early attachment.
            <br/><br/>“Providing access to books for children under five years is important, as it helps to develop early literacy skills, cognitive skills, language skills, [and] exposes them to new ideas and knowledge, and promotes positive parent-child interaction. All these factors can help to lay a strong foundation for future academic success and lifelong wellbeing.” Storytime Foundation 2023 Annual Report
            </>
          }
        />
      </section>

      <section className='content-section blue-section'>
        <ContentSection 
          title='Meet the team' 
        />
        <h3>Select a member to read their story</h3>
        <ContentReveal />
      </section>

      <section className='testimonial-section'>
        <h2>Testimonials</h2>
        <Carousel/>
      </section>

      <Sponsors/>
    </>
  )
}

export default OurWork
