import { useState } from "react"

export default function Team (){
    const teamStyle = {
        border: '1px solid red',
        padding: '20px',
        margin: '20px',
        borderRadius: '20px', // Corrected property name
      };
    const[count, setCount]=useState(0);

    const handleAdd = () =>{
        const newCount = count + 1;
        setCount(newCount);
    }
    const handleRemove = () =>{
        if(count>0){
            const newCount =count - 1;
            setCount(newCount);
        }
    }


    return(
        <>
        <div style={teamStyle}>
            <h3>Players : {count}</h3>
            <button className="btn" onClick={handleAdd}>Add</button>
            <button className="btn" onClick={handleRemove}>Remove</button>
        </div>
        </>
    )
}