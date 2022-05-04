import "../styles/randomContent.css";
import { Link } from "react-router-dom";

const RandomContent = (props) => {
    return(
        <div className="mainDiv">

            <section className="container">

                <Link className="square1" to="/"> <h4>Our Blog</h4></Link>

                <Link className="square2" to="/"> <h4>Expert Advice</h4></Link>

                <Link className="square3" to="/"> <h4>Most Popular Listings</h4></Link>

                <Link className="square4" to="/"> <h4>Leave No Trace</h4></Link>

                <Link className="square5" to="/"> <h4>5 Camping Tips</h4></Link>

                <Link className="square6" to="/"> <h4>Contact Us</h4></Link>

            </section>

        </div>
    );
}

export default RandomContent;

// eslint-disable-next-line
{/* <a className="square1" href="../pages/Blog.js" title="blog"> <h4>Our Blog</h4> </a>
                
<a className="square2" href="../pages/ExpertAdvice.js"> <h4>Expert Advice</h4> </a>

<a className="square3" href="../pages/Listing.js"> <h4>Most Popular Listings</h4> </a>

<a className="square4" href="../pages/LeaveNoTrace.js"> <h4>Leave No Trace</h4> </a>

<a className="square5" href="../pages/CampingTips.js"> <h4>5 Camping Tips</h4> </a>

<a className="square6" href="../pages/Team.js"> <h4>Contact Us</h4> </a> */}