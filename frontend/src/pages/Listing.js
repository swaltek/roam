import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import apiCalls from "../api/apiCalls";
import ReservationForm from "../components/ReservationForm";
import "../styles/ListingPage.css";
import { Card, Button, Col } from 'react-bootstrap';
import Map from "../components/Map";
import CalendarPicker from "../components/CalendarPicker";

export const Listing = (props) => {
  const params = useParams()
  let listingId = params.listingId

  const [listing, setListing] = useState(null)

  useEffect(()=>{
    loadListing()
  },[listingId])

  const loadListing = async ()=>{
    let response = await apiCalls.getListingById(listingId)
    if (response){
      setListing(response)
    } 
  }

  return (
    <div className="listing-page">
    { listing ?
      <div className="listing-content">
        <Col>
          <Card style={{ width: '400px', height: '800px' }}>
              {
                (listing.location_lng && listing.location_lat)
                  ? <Map w="400px" h="200px" marker={[listing.location_lng, listing.location_lat]}/>
                  : <span> Location unavailable for this listing </span>
              }
              <Card.Body>
                <Card.Title>{listing.title}</Card.Title>
                <Card.Text>
                  {listing.description}
                </Card.Text>
              </Card.Body>  
              <Card.Body>
                {`$${listing.price}/night`}
              </Card.Body>
            </Card>
        </Col>
        <Col>
          <Card style={{ width: '400px', height: '800px' }}>
            <Card.Header>Check Availability and Reserve</Card.Header>
            <Card.Body>
              <ReservationForm listing={listing} />
            </Card.Body>  
          </Card>
        </Col>
          
      </div>
      :
      <div>
        <h1>Loading...</h1>
      </div>
    }
    </div>
  );
};

export default Listing;