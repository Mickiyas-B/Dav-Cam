import React from 'react'
import './Show.css';
import show1 from '../../../../Assets/Images/Wedding-101.jpg';
import show2 from '../../../../Assets/Images/family.jpg';
import show3 from '../../../../Assets/Images/Mommy and me.jpg';

    function Show() {
    return (
        <>
            <div className='show-container'>
                <div className='show'>
                    <h3>Wedding</h3>
                    <img className='Wedding' src={show1} alt=""  />
                </div>
                    <div className='show'>
                    <h3>Family</h3>
                    <img src={show2} alt="" />
                </div>
                    <div className='show'>
                    <h3>Mom with Me</h3>
                    <img src={show3} alt="" />
                </div>
        </div>
        </>
    )
    }

    export default Show
