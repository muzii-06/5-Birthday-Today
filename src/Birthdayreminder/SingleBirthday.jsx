import React from 'react'
import { FaTrash } from "react-icons/fa";
const SingleBirthday = ({id,name,age,image,remove}) => {
  return (
    <>
    <div className="card border shadow rounded-2 p-4">
        <div className="d-flex justify-content-between">
            <div className="d-flex gap-2 ">
                <img className='border border-info rounded-circle' style={{objectFit:'contain'}}  width={"70px"} height={"70px"} src={image} alt="" />
                <div className="d-flex flex-column">
                    <h5>{name}</h5>
                    <p className='text-secondary'> {age} years old</p>
                </div>
            </div>
            <button onClick={()=>remove(id)} className="btn btn-danger align-self-center">
            <FaTrash />
            </button>
        </div>
    </div>
    </>
  )
}

export default SingleBirthday