import React from 'react';
import "./Sobre.css";
import aboutImg from "../images/about-img.jpg";

const Sobre = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>Sobre</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>Sobre BookFinder</h2>
            <p className='fs-17'>...Pense em algo....</p>
            <p className='fs-17'>... Adicionar texto aqui.....</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sobre