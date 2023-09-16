import './Blog.css'
import { PiNewspaperLight } from 'react-icons/pi'
import { BiCalendar } from 'react-icons/bi'

const Blog = () => {
    return (
        <div className='courses-grid'>
            <div className="courses-image">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
                <button>Finance</button>
            </div>
            <div className="about-courses">
                <div className='blog-dates'>
                    <PiNewspaperLight className='course-icons' />
                    <p>05 Lessons</p>
                </div>
                <div className='blog-dates'>
                    <BiCalendar className='course-icons' />
                    <p>27 july, 2022</p>
                </div>
            </div>
            <div className="course-title blogs-titles">
                <p>Finance for Non-Financial Managers Basic Introduction</p>
            </div>
        </div>
    )
}

export default Blog
