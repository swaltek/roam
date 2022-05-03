import "../styles/randomContent.css"

const RandomContent = (props) => {
    return(
        <div>
            <section>
                <a className="photo1" href="../pages/Blog.js" title="blog"><h4>Blog</h4></a>
                <a className="photo2" href="../pages/Events.js" title="events"><h4>Events</h4></a>
                <a className="photo3" href="../pages/Listing.js" title="events"><h4>Most Popular Listings</h4></a>
                <a className="photo4"><h4>Leave No Trace</h4></a>
                <a className="photo5" href="../pages/CampingTips.js" title="events"><h4>5 Camping Tips</h4></a>
                <a className="photo6" href="../pages/Charities.js" title="events"><h4>Charities</h4></a>
            </section>
        </div>
    );
}

export default RandomContent;
