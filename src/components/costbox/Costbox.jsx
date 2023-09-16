import './Costbox.css'
import { LuTimer } from 'react-icons/lu'

const Costbox = () => {
    return (
        <div className='costbox'>
            <div className='cost-logo'>
                < LuTimer className='timer' />
            </div>
            <div className='cost-text'>
                <p style={{fontSize:'25px', fontWeight:'500', color:'black', marginBottom:'0'}}>Cost Savings</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique repellendus incidunt tempore, unde corporis placeat quos! Commodi non vero voluptates, voluptatum nam sequi possimus officiis totam iure, consequatur, maiores praesentium. Autem, assumenda deserunt.</p>
            </div>
        </div>
    )
}

export default Costbox
