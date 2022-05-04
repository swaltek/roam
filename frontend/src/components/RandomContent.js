import "../styles/randomContent.css"

const RandomContent = (props) => {
    return(
        <div className="mainDiv">

            <section className="container">

                <a className="square1" href="../pages/Blog.js" title="blog"> <h4>Our Blog</h4> </a>
                
                <a className="square2" href="../pages/ExpertAdvice.js"> <h4>Expert Advice</h4> </a>

                <a className="square3" href="../pages/Listing.js"> <h4>Most Popular Listings</h4> </a>

                <a className="square4" href="../pages/LeaveNoTrace.js"> <h4>Leave No Trace</h4> </a>

                <a className="square5" href="../pages/CampingTips.js"> <h4>5 Camping Tips</h4> </a>

                <a className="square6" href="../pages/Team.js"> <h4>Contact Us</h4> </a>

            </section>

        </div>
    );
}

export default RandomContent;
