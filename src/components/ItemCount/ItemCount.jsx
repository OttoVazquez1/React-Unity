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
    <div className="container">
        <div className='row' style={{border: '1px solid white'}}>
            <div className='col-2'>
                <button onClick={RemoveCount}>-</button>
            </div>
            <div className='col-8'>
                <h1 className='h2' style={{color: 'black'}}>{count}</h1>
            </div>
            <div className='col-2'>
                <button onClick={AddCount}>+</button>
            </div>
        </div>
    </div>
  )
}

export default ItemCount