import React from 'react'

 const Payment = ({reset}) => {
    return (
        <div>
            <button onClick={()=>reset()}>Payment</button>
        </div>
    )
}
export default Payment