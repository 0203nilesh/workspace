import React from 'react'
import './style.css';

export default function Footer() {
  return (
    <>
    <div className="footer">
        <div className="left-box">
        <a target='blank' href="https://instagram.com/iitgwt?igshid=MzRlODBiNWFlZA=="><i className="fa-brands fa-instagram"></i></a>
        <a target='blank' href="https://twitter.com/IITGuwahati?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><i className="fa-brands fa-twitter"></i></a>
        <a target='blank' href="https://www.youtube.com/channel/UCPm2vuTGBM80v0tEecjP3Kw"><i className="fa-brands fa-youtube"></i></a>
        <a target='blank' href="https://m.facebook.com/iitgwt"><i className="fa-brands fa-facebook"></i></a>
        <a target='blank' href="https://www.iitg.ac.in/"><i className="fa-solid fa-graduation-cap"></i></a>
        <a target='blank' href="https://iitg.ac.in/eee/"><i className="fa-solid fa-book"></i></a>

        </div>
        <div className="right-box">
         <span>All copyright</span> <i className="fa-regular fa-copyright"></i>
                <span>are reserved by IIT Guwahat</span>
        </div>
    </div>
    </>
  )
}
