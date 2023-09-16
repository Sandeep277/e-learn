import './Hero.css'
import phone1 from '../assets/phone1.png'
import phone2 from '../assets/phone2.png'
import phone3 from '../assets/phone3.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-top">
                <div className="hero-left">
                    <div className="circle-text">round</div>
                </div>
                <div className='hero-mid'>
                    <h3>The Best Online Learing App</h3>
                    <p><span className="larg1">Your Ultimate online <a href="#">Learning</a> Solution!</span></p>
                </div>
                <div className="hero-right">
                    <div className="circle-text">fjfk</div>
                </div>
            </div>
            <div className="hero-bottom">
                <div className="mobile-left">
                    <img src={phone1} alt="" />
                </div>
                <div className="mobile-mid">
                    <img src={phone2} alt="" />
                </div>
                <div className="mobile-right">
                <img src={phone3} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Hero
