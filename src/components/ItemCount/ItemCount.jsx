import React, { useState } from 'react'

function ItemCount() {
    const [ count, setCount ] = useState( 0 )

    const AddCount =()=>{
        setCount (count + 1)
    }
    const RemoveCount =()=>{
        if(count > 0){
        setCount (count - 1)
        }
    }
    return (
    <div className='row w-25'>
        <div className='col'>
            <button onClick={AddCount}>+</button>
        </div>
        <div className='col'>
            <h1 className='h2'>{count}</h1>
        </div>
        <div className='col'>
            <button onClick={RemoveCount}>-</button>
        </div>
    </div>
  )
}

export default ItemCount