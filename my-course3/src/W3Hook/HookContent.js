/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import { useContext, useState, createContext } from 'react'
const UserContext = createContext();
export default function HookContent() {
    const [user, setUser] = useState(([{
        brand: 'Channel',
        Year: 2022,
        color: 'red',
        quality: 'good',
    },
    {
        brand: 'Local',
        Year: 123,
        color: 'blue',
        quality: 'normal',
    }

    ]));
    const handel_user = () => {

        return user.map((item, index) => {
            return <div>
                <div key={index} className="card text-white bg-dark mt-5">

                    <img style={{ width: '300px' }} alt='hotgirl' src="https://anh.24h.com.vn/upload/1-2022/images/2022-03-16/baukrysie_275278910_3174792849424333_1380029197326773703_n-1647427653-670-width1440height1800.jpg" />
                    <div className="card-body">
                        <h4 className="card-title">Idol details</h4>
                        <p className="card-text">{item.brand}</p>

                        <p className="card-text">{item.color}</p>

                        <p className="card-text">{item.quality}y</p>

                    </div>
                </div>
            </div>



        })
    }
    console.log(handel_user())
    return (
        <div className='container' >
            <div className='row'>
                <div className='col-6'><UserContext.Provider value={handel_user()}>
                    <h1>{handel_user()}</h1>
                    <Component2 user={user.brand} />
                </UserContext.Provider></div>

            </div>


        </div>
    )
}
function Component2() {
    return (
        <>
            <h1>Component 2</h1>
            <Component3 />
        </>
    );
}

function Component3() {
    return (
        <>
            <h1>Component 3</h1>
            <Component4 />
        </>
    );
}

function Component4() {
    const user = useContext(UserContext);

    return (
        <>

            <Component5 />
        </>
    );
}

function Component5() {
    const user = useContext(UserContext);
    console.log(user)
    return (
        <>
            <h1>Component 5</h1>
            <h2>{user}</h2>
        </>
    );
}


