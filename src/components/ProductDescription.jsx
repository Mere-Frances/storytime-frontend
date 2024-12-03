import React, { useState } from 'react';
  
const ContentReveal = ({filters}) => {
  const [activeFilter, setActiveFilter] = useState(Object.keys(filters)[0]);


  return (
    <>
        <div className='product-preview--titles single-page-descriptions'>
            <div className='product-filters'>
                {Object.keys(filters).map((filter) => (
                <a
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`filter-link ${activeFilter === filter ? "active" : ""}`}
                    >
                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </a>
                ))}
            </div>

            <div className='product-dynamic-content'>
                {filters[activeFilter]}
            </div>
        </div>
    </>
  )
}

export default ContentReveal
