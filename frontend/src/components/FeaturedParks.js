import "../styles/featuredParks.css";
import { Link } from "react-router-dom";


export const FeaturedParks = (props) => {
  return (
    <div>
      <h2 className="pageHeader centerContent">Featured Parks</h2>
      <div className="imageGrid">
        <ul className="centerContent">

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

        </ul>
      </div>
    </div>
  );
};

export default FeaturedParks;

// eslint-disable-next-line
{/* <li className="imageContainer yosemite">
  <a href="../pages/SearchResults.js" title="Yosemite"><h4>Yosemite</h4></a>
</li>

<li className="imageContainer zion">
  <a href="../pages/SearchResults.js" title="Zion"><h4>Zion</h4></a>
</li>

<li className="imageContainer grandcanyon">
  <a href="../pages/SearchResults.js" title="Grand Canyon"><h4>Grand Canyon</h4></a>
</li>

<li className="imageContainer greatsmoky">
  <a href="../pages/SearchResults.js" title="Great Smoky Mountains"><h4>Great Smoky Mountains</h4></a>
</li>

<li className="imageContainer northcascades">
  <a href="../pages/SearchResults.js" title="North Cascades"><h4>North Cascades</h4></a>
</li>

<li className="imageContainer rockymountains">
  <a href="../pages/SearchResults.js" title="Rocky Mountains"><h4>Rocky Mountains</h4></a>
</li> */}