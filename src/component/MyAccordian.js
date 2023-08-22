import React, { useState } from 'react'
import './Accordian.css'

const MyAccordian = ({question,answer}) => {

    const[show,setShow] = useState(false);

    const visible = () => {
        setShow(!show);
    }
  return (
    <>
    <section className='main-heading'>
    <p onClick={visible}>{show?"➖":"➕"}</p>
    <h2>{question}</h2>
    </section>
    {
        show && <p>{answer}</p>
    }
    
      
    </>
  )
}

export default MyAccordian
