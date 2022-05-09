
import { useEffect, useState } from 'react';
import apiCalls from "../../api/apiCalls";
import React from "react";
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function SavedSites(props){
 

  const [listings, setListings] = useState([])
  useEffect(()=>{
      if(props.user){
         loadListings() 
      }
  },[props.user])

  const loadListings = async ()=>{
      let listingsArray = [];
      for (let i=0; i<props.user.favorite_listings.length; i++){
          let response = await apiCalls.getListingById(props.user.favorite_listings[i])
          if (response){
              listingsArray.push(response)
          }
      }
      setListings(listingsArray)
  }

  const renderListings = ()=>{
    return listings.map((listing)=>{
        return(
        <div key={`ownlist-${listing.id}`} className="box neutral2 padding text-center ">
            <h4 className="heavyText genericSecondaryHeader">
              <Link to={`/listing/${listing.id}`}>
              {listing.title}</Link></h4>
            <h4>{`${listing.description}`}</h4>
            <h4>{`$${listing.price}`}</h4>
            <h4>{`Rating:${listing.rating}`}</h4>
        </div>
    )})
}
  return (
    <div className="container">
      <h2> SavedSites</h2>
       { props.user && renderListings()}
    </div>
  )
  }

  export default SavedSites;