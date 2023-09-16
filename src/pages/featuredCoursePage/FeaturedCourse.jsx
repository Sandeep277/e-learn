import Course from '../../components/course/Course'
import './FeaturedCourse.css'

const FeaturedCourse = () => {
  return (
    <div className='featuredCourse'>
      <div className="featuredCoreses">
        <p style={{fontSize:'20px', fontWeight:'500'}}>8000+ Latest Courses</p>
        <p style={{fontSize:'35px', fontWeight:'500'}}>our <span style={{color:'blue'}}>Featured Coureses</span></p>
      </div>
      <div className="search-courses"></div>
      <div className="grid-courses">
 
        <Course/>
        <Course/>
        <Course/>
        <Course/>
        <Course/>
        <Course/>
        
      </div>
    </div>
  )
}

export default FeaturedCourse
