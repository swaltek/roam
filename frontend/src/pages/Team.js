import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import "../styles/generic.css"

export const Team = () => {
  return (
    <div className="genericCenterContent heavyText">
      <h1 className="genericMainHeader"> Meet the team!</h1>
      <div className='genericContainer'>
        <img className='imgsize centerBlockElement padding' src={require('../static/headshots/Phillip.webp')}></img>
        <h2 className="heavyText" >Phillip Hall</h2>
        <a className="genericIconSize" href="https://www.linkedin.com/in/philliphall131/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin}>LinkedIn</FontAwesomeIcon></a>
      </div>
      
      <img  className='imgsize centerBlockElement padding' src={require('../static/headshots/suruchi.jpg')}></img>
      <h2 className="heavyText" >Suruchi Khand</h2>
      <a className="genericIconSize" href="https://www.linkedin.com/in/suruchi-k-2387b7232/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin}>LinkedIn</FontAwesomeIcon></a>

      <img  className='imgsize centerBlockElement padding' src={require('../static/headshots/court.jpeg')}></img>
      <h2 className="heavyText">Courtney Smith</h2>
      <a className="genericIconSize" href="https://www.linkedin.com/in/courtneycodes/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin}>LinkedIn</FontAwesomeIcon></a>

      <img  className='imgsize centerBlockElement padding' src={require('../static/headshots/Lyman2.webp')}></img>
      <h2 className="heavyText">Lyman Perrine</h2>
      <a className="genericIconSize" href="https://www.linkedin.com/in/lymanperrine/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin}>LinkedIn</FontAwesomeIcon></a>

      <img  className='imgsize centerBlockElement padding' src={require('../static/headshots/marcin.png')}></img>
      <h2 className="heavyText">Marcin Swaltek</h2>
      <a className="genericIconSize" href="https://www.linkedin.com/in/marcin-s-1799a81b8/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin}>LinkedIn</FontAwesomeIcon></a>
    </div>
  );
};

export default Team;
