import "../styles/featuredParks.css";
import { Link } from "react-router-dom";


export const FeaturedParks = (props) => {
  return (
    <div>
      <h2 className="pageHeader centerContent">Featured Parks</h2>
      <div className="imageGrid">
        <ul className="centerContent">

          <Link
            to="/listing/search"
            state={{
              center: [ -119.538330, 37.865101]
            }}
          ><h4 className="imageContainer yosemite">Yosemite</h4></Link>

          <Link
            to="/listing/search"
            state={{
              center: [ -113.028770, 37.297817]
            }}
          ><h4 className="imageContainer zion ">Zion</h4></Link>

          <Link
            to="/listing/search"
            state={{
              center: [ -112.125198, 36.056595]
            }}
          ><h4 className="imageContainer grandcanyon">Grand Canyon</h4></Link>

          <Link
            to="/listing/search"
            state={{
              center: [ -83.489548, 35.611763]
            }}
          ><h4 className="imageContainer greatsmoky">Great Smoky Mountains</h4></Link>

          <Link
            to="/listing/search"
            state={{
              center: [ -121.2985, 48.7718]
            }}
          ><h4 className="imageContainer northcascades">North Cascades</h4></Link>

          <Link
            to="/listing/search"
            state={{
              center: [ -105.358887, 39.113014]
            }}
          ><h4 className="imageContainer rockymountains">Rocky Mountains</h4></Link>

        </ul>
      </div>
    </div>
  );
};

export default FeaturedParks;
