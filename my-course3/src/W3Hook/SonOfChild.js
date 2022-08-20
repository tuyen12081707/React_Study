

import React, { memo } from 'react'

 function SonOfChild(props) {
    console.log('run')
    return (
        <div> 
            <div>
                <span>{props.renderLike()}</span>
                <br></br>
            <textarea></textarea>
            <br></br>
            <button className='btn btn-success'>Send Comment</button>
        </div></div>
    )
}
export default memo(SonOfChild)
// memo không thay đổi thuộc tính nữa
