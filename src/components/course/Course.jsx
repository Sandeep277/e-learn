import './Course.css'
import { AiFillStar } from 'react-icons/ai'
import { PiNewspaperLight } from 'react-icons/pi'
import { PiTimerLight } from 'react-icons/pi'
import { BsPeople } from 'react-icons/bs'

const Course = () => {
  return (
    <div className='courses-grid'>
      <div className="courses-image">
        <img src="https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1076&q=80" alt="" />
        <button>Finance</button>
      </div>
      <div className="about-courses">
        <PiNewspaperLight className='course-icons'/>
        <p>05 Lessons</p>
        <PiTimerLight className='course-icons'/>
        <p>7h 30m</p>
        <BsPeople className='course-icons'/>
        <p>1300</p>
      </div>
      <div className="course-title">
        <p>Finance for Non-Financial Managers Basic Introduction</p>
      </div>
      <div className="ratings">
        <AiFillStar className='reviews'/>
        <AiFillStar className='reviews'/>
        <AiFillStar className='reviews'/>
        <AiFillStar className='reviews'/>
        <p>(07)</p>
      </div>
      <hr />
      <div className='course-author'>
        <img src="https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" alt="" />
        <p className='author-name'>Allan Wisozk</p>
        <p style={{margin:'0px'}}>$27.00</p>
      </div>
    </div>
  )
}

export default Course
