import "../styles/featuredParks.css"

export const FeaturedParks = (props) => {
  return (
    <div>
      
      <h2 className="pageHeader centerContent">Featured Parks</h2>

      <div className="imageGrid">
        <ul className="centerContent">

          <li className="imageContainer yosemite">
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
          </li>
        </ul>
      </div>
      
    </div>
  );
};

export default FeaturedParks;