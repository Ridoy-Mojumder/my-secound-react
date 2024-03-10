import { useState } from "react"

export default function Counter(){
    const counterStyle = {
        border: '1px solid green',
        padding: '20px',
        margin: '20px',
        borderRadius: '20px', // Corrected property name
      };

    const [count, setCount]=useState(0)
    const handleAdd = () =>{
        const newCount = count + 1;
        setCount(newCount)
    }

    const handleReduce = () => {
        if(count > 0){
            const reduceCount = count - 1;
            setCount(reduceCount);
        }else{
            return(
                <h3>alert('The count is 0')</h3>
            );
        }
    }
    return(
        <>
        <div style={counterStyle}>
            <h3>Counter : {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button className="btn" onClick={handleReduce}>Reduce</button>
        </div>
        </>
    )
}