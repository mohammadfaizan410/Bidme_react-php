import React from 'react'
import "./globalStyles.css"
import "./home.css";


function Home() {
  const handleScroll = () => {
    document.getElementById('middle').scrollIntoView({behavior: 'smooth'})
  }
  return (
    <div className='container-padded'>

      <div className='home-top'>
        <img className='home-topImg' src={require('./Antiques.jpg')} alt="" />
        <h3 className='home-topTitle'>A one stop shop for bidding on rare items </h3>
        <h3 className='home-Title'>Bidme</h3>
        <button className='home-galleryBtn' onClick={handleScroll}>Show Gallery</button>

        <div id='middle'>

        <h3 className='text-primary home-galleryTitle'>Our Gallery</h3>
      <div className='home-middle' >
        <div className='home-imgContainer' >
          <img className='home-middleImg' src={require('./music.png')} alt="" />
        </div>
        <div className='home-imgContainer'>
          <img className='home-middleImg' src={require('./mangal.jpg')} alt="" />
        </div>
        <div className='home-imgContainer'>
          <img className='home-middleImg' src={require('./cloth.jpeg')} alt="" />
        </div>
      </div>
      </div>
      <div className='home-middle'>
        <div className='home-imgContainer'>
          <img className='home-middleImg' src={require('./sculpture.jpg')} alt="" />
        </div>
        <div className='home-imgContainer'>
          <img className='home-middleImg' src={require('./davinci.jpg')} alt="" />
        </div>
        <div className='home-imgContainer'>
          <img className='home-middleImg' src={require('./Antiques.jpg')} alt="" />
        </div>
      </div>
        </div>
    </div>
    
  )
}

export default Home