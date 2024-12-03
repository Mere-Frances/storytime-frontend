import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <>
        <button className="back-button primary-button" onClick={()=>navigate(-1)}>
            <a>Back</a>
        </button>
    </>
  )
}

export default BackButton
