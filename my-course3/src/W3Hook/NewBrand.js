import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
// export default function NewBrand() {
//     const [brands, setBrand] = useState({
//         brand: 'Channel',
//         Year: 2022,
//         color: 'red',
//         quality: 'good',
//     })
//     const handelUpdateBrand = () => {
//         setBrand(
//             brand => {

//                 return {...brand,Year:2023};
//             }
//         )
//     }
//     return (
//         <div className='containertext-center'>
//             <h1 >my {brands.brand} is my favorites brand and published in {brands.Year} </h1>
//            <button className='btn btn-danger me-3' onClick={()=>{handelUpdateBrand()}}>Click me!</button>
//         </div>
//     )
// }

export default function NewBrand() {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);
    useEffect(() => {
        setCalculation(() => count * 2);
    }, [count]); // <- add the count variable here

    return (
        <div className='container text-center'>
            <h1 className='btn btn-danger' onClick={() => setCount((c) => c + 1)}>Count Up {count}</h1>
            <p>Calculation: {calculation}</p>
        </div >
    )
}