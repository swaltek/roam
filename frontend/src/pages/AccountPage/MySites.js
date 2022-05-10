import { useState, useEffect } from "react";
import apiCalls from "../../api/apiCalls";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function MySites(props) {
  const [ownListings, setOwnListings] = useState([]);

<<<<<<< HEAD
  useEffect(() => {
    if (props.user) {
      loadOwnListings();
=======
    const [ownListings, setOwnListings] = useState([])

    useEffect(()=>{
        if(props.user){
           loadOwnListings() 
        }
    },[props.user])

    const loadOwnListings = async ()=>{
        let listingsArray = [];
        for (let i=0; i<props.user.owned_listings.length; i++){
            let response = await apiCalls.getListingById(props.user.owned_listings[i])
            if (response){
                listingsArray.push(response)
            }
        }
        setOwnListings(listingsArray)
    }
    
    const renderOwnerListings = ()=>{
        return ownListings.map((listing)=>{
            return(
            <div key={`ownlist-${listing.id}`} className="box neutral2 padding text-center ">
                <h4 className="heavyText genericSecondaryHeader">{listing.title}</h4>
                <h4>{`$${listing.price}`}</h4>
                <Link className='button-4' to={`/listing/${listing.id}/edit`}>Edit</Link>
            </div>
        )})
        
>>>>>>> e0232fe800a40a2aada46981e03e9f110e3160f5
    }
  }, [props.user]);

<<<<<<< HEAD
  const loadOwnListings = async () => {
    let listingsArray = [];
    for (let i = 0; i < props.user.owned_listings.length; i++) {
      let response = await apiCalls.getListingById(
        props.user.owned_listings[i]
      );
      if (response) {
        listingsArray.push(response);
      }
    }
    setOwnListings(listingsArray);
  };

  const renderOwnerListings = () => {
    return ownListings.map((listing) => {
      return (
        <div
          key={`ownlist-${listing.id}`}
          className="box neutral2 padding text-center "
        >
          <h4 className="heavyText genericSecondaryHeader">{listing.title}</h4>
          <h4>{`$${listing.price}`}</h4>
          <Link to={`/listing/${listing.id}/edit`}>
            <Button>Edit</Button>
          </Link>
        </div>
      );
    });
  };

  return (
    <div className="container">
      <h1>Sites I've Listed</h1>
      {props.user && renderOwnerListings()}
=======
    return (
      <div className="container exploreHeader">
        <h1>My Properties</h1>
        { props.user && renderOwnerListings()}
>>>>>>> e0232fe800a40a2aada46981e03e9f110e3160f5
    </div>
  );
}
export default MySites;
