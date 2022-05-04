import "../styles/featuredParks.css";
import { Link } from "react-router-dom";


export const FeaturedParks = (props) => {
  return (
    <div>
      <h2 className="pageHeader centerContent">Featured Parks</h2>
      <div className="imageGrid">
        <ul className="centerContent">

          <Link to="/"><h4 className="imageContainer yosemite">Yosemite</h4></Link>

          <Link to="/"><h4 className="imageContainer zion ">Zion</h4></Link>

          <Link to="/"><h4 className="imageContainer grandcanyon">Grand Canyon</h4></Link>

          <Link to="/"><h4 className="imageContainer greatsmoky">Great Smoky Mountains</h4></Link>

          <Link to="/"><h4 className="imageContainer northcascades">North Cascades</h4></Link>

          <Link to="/"><h4 className="imageContainer rockymountains">Rocky Mountains</h4></Link>

        </ul>
      </div>
    </div>
  );
};

export default FeaturedParks;

// eslint-disable-next-line

{/* <ul className="centerContent">

  <li className="imageContainer yosemite">
    <Link to="/"><h4 className="parkNameheader">Yosemite</h4></Link>
  </li>

  <li className="imageContainer zion">
    <Link to="/"><h4 className="parkNameheader">Zion</h4></Link>
  </li>

  <li className="imageContainer grandcanyon">
    <Link to="/"><h4 className="parkNameheader">Grand Canyon</h4></Link>
  </li>

  <li className="imageContainer greatsmoky">
    <Link to="/"><h4 className="parkNameheader">Great Smoky Mountains</h4></Link>
  </li>

  <li className="imageContainer northcascades">
    <Link to="/"><h4 className="parkNameheader">North Cascades</h4></Link>
  </li>

  <li className="imageContainer rockymountains">
    <Link to="/"><h4 className="parkNameheader">Rocky Mountains</h4></Link>
  </li>
  
</ul> */}