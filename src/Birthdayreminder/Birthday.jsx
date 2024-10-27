import React, { useState } from 'react'
import SingleBirthday from './SingleBirthday'
import {bdays} from './bdays';
const Birthday = () => {
    const[data,setData]=useState(bdays);
   const handleClick =() => {
    if(data.length>0)
    {

        setData([]);
    }
    else{
        setData(bdays);
    }
    
   };
   const removedata =(id)=>
    {
        // console.log(id);
       const newPeople= data?.filter((item,index)=>
    {
        return item.id !== id;
    });
    setData(newPeople);
        
    }
  return (
    <>
    <div className="container col-lg-5 mx-auto rounded-2 p-5 shadow">
        <h1 className="dispay-3 text-center"> {data.length} Birthdays Today</h1>
        {data?.map((item,index)=>
        {
            
            return <SingleBirthday key={index} {...item} remove={removedata} />
        })}
        <button onClick={handleClick} className={`btn d-block mx-auto w-50 mt-3 rounded-2 text-white ${data.length>0?"btn-danger":"btn-success"}  `}>
            {data.length>0 ?"Remove All":"Refresh All"}</button>

         </div>
    </>
  )
}

export default Birthday