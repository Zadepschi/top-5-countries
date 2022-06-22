import { useState } from 'react';
import { data } from './data/data';
import previous from './1.png';
import next from './2.png';
import './App.css';

function Visited() {

  const [favCountry, setFavCountry] = useState(0);
  const {id, image, img, country, picture} = data[favCountry];

const nextCountry = () => {
  setFavCountry((favCountry => {
    favCountry++;
    if(favCountry > data.length -1 ) {
      favCountry = 0;
    }
    return favCountry;
  }))
}

const previousCountry = () => {
setFavCountry((favCountry => {
  favCountry--;
  if(favCountry < 0) 
  return data.length - 1;
  return favCountry;
}))

}


  return (
    <div>
     
      <div className='container'>
        <h1> Top 5 countries I have visited </h1> 
      </div>
      <div className='container' key={id}>
       <h2> {id}</h2>
      </div>
  <div  className='container'> 
       <div className='btn'>
          <img className='pic' src={img} width="300px" alt="map"/>
       </div>
      <div className='btn'>
        <img className='arrow' onClick={previousCountry} src={previous}  width="70px" alt="button"/>
      </div>
      <div className='container'>
        <img className='visitedPic' src={image} width="500px" alt="country"  />
      </div>
      <div className='btn'>
       <img className='arrow'  onClick={nextCountry} src={next} width="70px" alt="button" />
     </div>
     <div className='btn'>
        <img className='pic' src={picture} width="300px" alt="koala"/>
     </div>
  </div> 
     <div className='container'>
       <h2> {country}</h2>
     </div>

    

    </div>
  );
}

export default Visited;
