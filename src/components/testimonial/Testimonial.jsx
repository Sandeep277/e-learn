import './Testimonial.css'
import { AiTwotoneStar } from 'react-icons/ai'
const Testimonial = () => {
    return (
        <div className='single-testimonial'>
            <div className="user-ratings">
                <AiTwotoneStar className='reviews' />
                <AiTwotoneStar className='reviews' />
                <AiTwotoneStar className='reviews' />
                <AiTwotoneStar className='reviews' />
                <AiTwotoneStar className='reviews' />
                <p>5.0</p>
            </div>
            <div className="messages-text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi impedit saepe minus facilis aspernatur ducimus voluptates quidem recusandae, harum officia corrupti nesciunt dolorum voluptatum veritatis tempora consequuntur? Quasi officiis illo culpa. Sapiente, recusandae?</p>
            </div>
            <div className="about-the-user">
                <img src="https://images.unsplash.com/photo-1545696968-1a5245650b36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1132&q=80" alt="" />
                <div className="user-name">
                    <p>Henry, Arthur</p>
                    <p>Food Express</p>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
