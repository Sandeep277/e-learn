import './Courses.css'

const Courses = () => {
    return (
        <div className='courses'>
            <div className="courses-left">
                <div className="courses-img">
                    <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />
                </div>
                <div className="courses-price">
                    <p style={{
                        fontWeight: 'bold',
                        fontSize: '20px',
                        marginBottom: '0px'
                    }}>Introducton of Figma</p>
                    <p style={{
                        margin: '0'
                    }}>Eleanor Jones</p>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginTop: '0px'

                    }}>
                        <p>$170.00</p>
                        <p className="tag">Best seller</p>
                    </div>
                </div>
            </div>
            <div className="courses-right">
                <div className="couser-logo">
                    <img src="https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1478&q=80" alt="" />
                </div>
                <div className="couser-about">
                    <h3>Discover Latest Cources</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet cupiditate quibusdam nulla temporibus amet quaerat blanditiis ducimus. Eligendi, nesciunt.</p>
                </div>
            </div>
        </div>
    )
}

export default Courses
