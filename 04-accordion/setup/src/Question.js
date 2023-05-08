import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title,info}) => {

  const [plus,setPlus] = useState(false) 

  return <article className='question'>
     <header>
      <h4>{title}</h4>
      <button className='btn' onClick={()=>{
        setPlus(!plus)
        }}>{plus?<AiOutlineMinus/>:<AiOutlinePlus/>}</button>
     </header>
      <p>{plus?info:''}</p>
  </article>
  
};

export default Question;
