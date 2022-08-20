import React, { useCallback, useState } from 'react'
import SonOfChild from './SonOfChild'

export default function ChildUseCallBack(props) {
    let [like, setLike] = useState(1)
    const renderLike = () => {
        return `Ban Da tha ${like}`;
    }// cac ham khong anh huong set state set props truyen xuong do bi thay doi nen call back xay ra
    const callbackRenderLike = useCallback(renderLike,[like]);//tham so thu 2 la tham so chi thay doi khi cai do thay doi

    return (
        <div className='m-5'>
            Like:{like} <i className='fa fa-heart'></i>
            <br></br>
            <span style={{ cursor: 'pointer', color: 'red', fontSize: '25px' }} onClick={() => { setLike(like + 1) }}><i className='fa fa-heart'></i></span>
            <br></br>
            <SonOfChild renderLike={callbackRenderLike}></SonOfChild>
        </div>
    )
    }
// }
// export default function ChildUseCallBack({make, model}) {
//     return <h1>{make} {model}</h1>;
//   };
