import React, { useState } from 'react'
import { data } from '../data';
import MyAccordian from './MyAccordian';

const Accordian = () => {

    const[show,setshow] = useState(data);
  return (
    <>
    <div className='main-div'>
    <section >
    <h1>React Interview Question</h1>

    </section>
    {
        show.map((val)=>{
            const { id } = val;
            return <MyAccordian key={id} {...val}/>
        })
    }
    
    </div>
      
    </>
  )
}

export default Accordian
