import Courses from '../../components/courses/Courses'
import './Hero2.css'

const Hero2 = () => {
  return (
    <div className='hero2'>
      <div className="hero2-center">
        <p className='text-sm'>How it Works</p>
        <p className='text-mi'> Unlocking Learning wieth</p>
        <span className='text-blue'>Four Easy Steps</span>
      </div>
      <div className="hero2-bottom">
            <Courses/>
            <Courses/>
            <Courses/>
      </div>
    </div>
  )
}

export default Hero2
