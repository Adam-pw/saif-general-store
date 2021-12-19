import React from 'react'
import './Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export const Footer = () => {
    return (
        <div>
            <>
                <div className='mpd'>
                    <h4>Address :-</h4>
                    46, K.d. gate, Kamri Marg, Ujjain
                </div>
                <br></br>
                <div className='mpd'>
                    <h4>Contact :-</h4>
                    Mustafa Pithenwala :- 9039952851<br></br>
                    Adam Pithenwala :- 7777881545<br></br>
                    Umema Pithenwla :- 9926051598<br></br>
                    Email :- adampithewan@gmail.com
                </div>
                <br></br>
                <div className='mpd'>
                    <h4>Credits :-</h4>
                    Adam Pithenwala<br></br>
                    Made from :- React, SASS and Bootstrap.
                </div>
            </>
        </div>
    )
}
