import React, { useState } from 'react';

const Carousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(3);

  const items = [
    { name: 'Justice Andrew Becroft', description: '"Nothing is more important to the long-term good of our society than investing in the earliest years of a child’s life. The goal of Storytime Foundation is totally in line with maximising parental involvement during these critical early years."', subtext: 'The children\'s future depends on early education.' },
    { name: 'Carmen Golds-Uili', description: '“The Storytime Foundation programme is a wonderful resource for whānau. The books and activities provide opportunities for quality time and bonding between pēpi, tamariki and caregivers and expand knowledge, vocabulary, writing ability, imagination and creativity.”', subtext: 'Community Karitāne, West Auckland' },
    { name: 'Te Rau Herenga o Aotearoa LIANZA', description: '“New Zealand\'s literacy levels have declined with persistent gaps between students from different socioeconomic backgrounds, ethnic groups and genders. Programmes such as Storytime Foundation’s that support and promote reading for pleasure are important for reversing this trend and improving literacy for all New Zealanders.”', subtext: '(Library and Information Association of New Zealand Aotearoa)' },
    { name: 'Alex Woodley', description: '“The Storytime Foundation is using evidence to help change the lives of New Zealand\'s most disadvantaged children. Research shows that reading to infants makes a lifelong difference to their wellbeing and education outcomes. As evaluators it is rare to see a programme have such a profound impact on child wellbeing and achievement. Our dream would be that we listen to the evidence and extend the programme to enable even more children and whānau to thrive and flourish."', subtext: 'Director – Point Research' },
    { name: 'Alan Dingley', description: 'The importance of reading, and being read aloud to, cannot be underestimated. The Storytime programme is the perfect vehicle to connect parents and children with the pleasure of reading, and creating reading habits and role models. Reading is a doorway, a pathway or escape to other worlds, and Storytime is helping families do this very thing.”', subtext: 'Te Awhi Rito NZ Reading Ambassador' },
  ];

  const moveToSelected = (direction) => {
    if (direction === 'next') {
      setSelectedIndex((prev) => (prev + 1) % items.length);
    } else if (direction === 'prev') {
      setSelectedIndex((prev) => (prev - 1 + items.length) % items.length);
    }
  };

  const getClass = (index) => {
    const diff = (index - selectedIndex + items.length) % items.length;

    switch (diff) {
      case 0:
        return 'selected';
      case 1:
        return 'next';
      case 2:
        return 'nextRightSecond';
      case items.length - 1:
        return 'prev';
      case items.length - 2:
        return 'prevLeftSecond';
      default:
        return 'hidden';
    }
  };

  return (
    <>
        <section className='carousel-container'>
            <div id='carousel'>
                {items.map((item, index) => (
                <div
                    key={index}
                    className={`single-post-container ${getClass(index)}`}
                    onClick={() => setSelectedIndex(index)}
                >
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <h4>{item.subtext}</h4>
                </div>
                ))}
            </div>
            <div className='buttons'>
                <div className='primary-button' id='prev' onClick={() => moveToSelected('prev')}>
                <a>Prev</a>
                </div>
                <div className='primary-button' id='next' onClick={() => moveToSelected('next')}>
                <a>Next</a>
                </div>
            </div>
        </section>
    </>
  );
};

export default Carousel;
