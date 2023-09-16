import Costbox from '../../components/costbox/Costbox'
import './Hero3.css'

const Hero3 = () => {
  return (
    <div className='hero3'>
      <div className="hero3-top">
        <div className="hero3-left">
          <p style={{
            fontSize:'20px',
            fontWeight:'500',
          }}>Benefits of Online Learning App</p>
          <p style={{
            fontSize:'35px',
            fontWeight:'700',
            margin:'0'
          }}><span style={{color:'blue'}}>Exclusivce Benefites</span> <br /> of E-Learn App</p>
        </div>
        <div className="hero3-right">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio doloribus velit debitis, earum magni vel corporis repellat doloremque?</p>
        </div>
      </div>
      <div className="hero3-bottom">
        <Costbox/>
        <Costbox/>
        <Costbox/>
      </div>
    </div>
  )
}

export default Hero3
