import './DownloadApps.css'
import appstore from '../assets/appstore.png'
import playstore from '../assets/playstore.png'

const DownloadApps = () => {
  return (
    <div className='download-app'>
      <div className="download-text">
        <p>Unlock Your Learning Journey: Your Ultimate E-Learning Destination</p>
        <p><span>Download the App Now</span></p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae tempora corporis eius repellat, corrupti non doloremque molestiae expedita!</p>
      </div>
      <div className="download-store">
        <img src={appstore} alt="appStore" />
        <img src={playstore} alt="playstore" />
      </div>
    </div>
  )
}

export default DownloadApps
