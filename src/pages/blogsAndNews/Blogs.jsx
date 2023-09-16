import Blog from '../../components/blog/Blog'
import './Blogs.css'
const Blogs = () => {
  return (
    <div className='blogs'>
      <div className="featuredCoreses">
        <p style={{fontSize:'20px', fontWeight:'500'}}>Blog and News</p>
        <p style={{fontSize:'35px', fontWeight:'500'}}>Our Latest <span style={{color:'blue'}}>Blog & News</span></p>
      </div>
      <div className="blog-grid">
        <Blog/>
        <Blog/>
        <Blog/>
        <Blog/>
      </div>
    </div>
  )
}

export default Blogs
