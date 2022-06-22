import { useState } from 'react';
import { data } from './data/going';
import './App.css';

function Goingtovisit() {

    const [going, setGoing] = useState(data);
    const [showText, setShowText] = useState(false);


    const removeItem = (id) => {
        let newList = going.filter(list => list.id  !==  id);
        setGoing(newList)
    }

    const showTextClick = (item) => {
        item.showMore = !item.showMore
        setShowText(!showText)
    }

    return(<div>
        <div className='container h1'>
            <h1>Top {going.length} countries I'm going to visit </h1>
        </div> 
        <div className='test'>
        {going.map((item => {
            const { id, image, country, description, showMore} = item;
            return ( 
          <div key={id} className="container2">
                 <div>
                    <img className='goingTo' src={image} width="400px" alt="country" />
                 </div>
                 <div>
                 <h2>{id} - {country} </h2>
                 </div>
                 <div>
                 <p>{showMore ? description : description.substring(0, 100) + "..."}
                 <button className='showMore' onClick={() => showTextClick(item)}>{showMore ? "Show less" : "Show more"} </button> </p>
                 </div>
                 <div>
                    <button className='remove' onClick={() =>  removeItem(id) }>Remove</button>
                 </div>
              </div>
              
            )
        } ))}</div>
       <div className='container'>
        <button  className='deleteAll' onClick={() => setGoing([])} >Delete All</button>
       </div>
        </div>
    )
}

export default Goingtovisit;