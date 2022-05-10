import { useState, useEffect } from 'react';
import apiCalls from '../../api/apiCalls';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MySites(props){

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
                <Link to={`/listing/${listing.id}/edit`}><Button>Edit</Button></Link>
            </div>
        )})
        
    }

    return (
      <div className="container">
        <h1>Sites I've Listed</h1>
        <div className='row'>
        <Link to={`/listing/new`}><Button>Create New Listing</Button></Link>
        </div>
        <div>{ props.user && renderOwnerListings()}
        </div>
        
    </div>
)
}
export default MySites;