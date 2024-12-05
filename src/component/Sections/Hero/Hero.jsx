import girl from '../../../assets/Images/girls.png';
import './Hero.css';

function Hero() {
  return (
    <div className='hero'>
      <div className='sec1'>
        <p className='container1'>NEW ARRIVALS ONLY</p>
        <div className='container2'>
          <span className='f'>new</span>
          <span className='ff'> collections  </span>
          for  everyone
        </div>
        {/* <div className='button'>
          <button className='b'>Latest collections</button>
        </div> */}
        <div className='c'>Latest collection</div>
      </div>
      <div className='sec2'>
        <img src={girl} alt='Hero' className='girlimage' />
      </div>
    </div>
  );
}

export default Hero;
