import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import apiCalls from "../api/apiCalls";
import ReservationForm from "../components/ReservationForm";

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
      console.log(response)
      setListing(response)
    } 
  }

  return (
    <div>
      <h1>{listing && listing.title}</h1>
      <img src="#" alt="" />
      <ul>
        <li>{listing && listing.price}/night</li>
        <li>Address: </li>
        <li>Amenities</li>
        <li>{listing && listing.description}</li>
        <li>Map:</li>
        <li>Calendar:</li>
        <li>{listing && listing.rating.avg}</li>
      </ul>
      <ReservationForm listing={listing}/>
    </div>
  );
};

export default Listing;
