import "../styles/CreateListing.css";
import ListingForm from "../components/ListingForm";

function CreateListing(props) {
    
    return (
        <div className="new-listing-page">
            <ListingForm is_boondock={false} new={true}/>
        </div>
    )
}

export default CreateListing;