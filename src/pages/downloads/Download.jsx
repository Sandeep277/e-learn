import './Download.css'
import qrcode from '../assets/qrcode.png'

import { AiFillApple } from 'react-icons/ai'
import { AiFillAndroid } from 'react-icons/ai'


const Download = () => {
    return (
        <div className='download'>
            <div className="down-left">
                <span className="larg">Download <a href="#"> Our Online Learning</a> Mobile App Now</span>
                <p>Lorem ipsum dolor, porro rem consequatur quia animi! Asperiores neque voluptate soluta natus numquam aperiam, tenetur ipsam quas dignissimos quo!</p>
                <div className='active-info'>
                    <div className="active-users">
                        <p className="large-white">5 Million+</p>
                        <p>Worldwide Active Users</p>
                    </div>
                    <hr />
                    <div className="active-users">
                        <p className="large-white">1332+</p>
                        <p>Tutors</p>
                    </div>
                    <hr />
                    <div className="active-users">
                        <p className="large-white">7000+</p>
                        <p>Courses</p>
                    </div>
                </div>
            </div>
            <div className="down-right">
                <div className="down-box">
                    <div className="box-contents">
                        <span>For iOS</span>
                        <p>iOS 15.6+</p>
                        <button>Download App</button>
                        <img src={qrcode} alt="" />
                    </div>
                    <div className="box-logo">
                        <div className="cmp-logo">
                            <AiFillApple className='logo-height'/>
                        </div>
                    </div>
                </div>
                <div className="down-box">
                    <div className="box-contents">
                        <span>For iOS</span>
                        <p>iOS 15.6+</p>
                        <button>Download App</button>
                        <img src={qrcode} alt="" />
                    </div>
                    <div className="box-logo">
                        <div className="cmp-logo">
                            <AiFillAndroid className='logo-height'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Download
