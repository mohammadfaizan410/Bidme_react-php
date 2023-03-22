import React from 'react'
import "./styles/globalStyles.css"
import "./styles/home.css";


function Home() {
  const handleScroll = () => {
    document.getElementById('middle').scrollIntoView({behavior: 'smooth'})
  }
  return (
    <div className='container-padded'>

      <div className='home-top'>
        <img className='home-topImg' src={require('./images/Antiques.jpg')} alt="" />
        <h3 className='home-topTitle'>Unleash your inner auctioneer </h3>
        <h3 className='home-Title'>Bidme</h3>
        <h3 className='home-TitleMobile'>Bidme</h3>
        <h3 className='home-topTitleMobile'>Unleash your inner auctioneer</h3>
        <button className='home-galleryBtn' onClick={handleScroll}>Show Gallery</button>

        <div id='middle'>

        <h3 className='text-primary home-galleryTitle'>Our Gallery</h3>
      <div className='home-middle' >
        <div className='home-imgContainer' >
          <img className='home-middleImg' src={require('./images/music.png')} alt="" />
        </div>
        <div className='home-imgContainer'>
          <img className='home-middleImg' src={require('./images/mangal.jpg')} alt="" />
        </div>
        <div className='home-imgContainer'>
          <img className='home-middleImg' src={require('./images/cloth.jpeg')} alt="" />
        </div>
      </div>
      </div>
      <div className='home-middle'>
        <div className='home-imgContainer'>
          <img className='home-middleImg' src={require('./images/sculpture.jpg')} alt="" />
        </div>
        <div className='home-imgContainer'>
          <img className='home-middleImg' src={require('./images/davinci.jpg')} alt="" />
        </div>
        <div className='home-imgContainer'>
          <img className='home-middleImg' src={require('./images/Antiques.jpg')} alt="" />
        </div>
      </div>
        </div>
    </div>
    
  )
}

export default Home