import { useState, useEffect } from 'react';
import apiCalls from '../../api/apiCalls';
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
                <Link className='button-4' to={`/listing/${listing.id}/edit`}>Edit</Link>
            </div>
        )})
        
    }

    return (
      <div className="container exploreHeader">
        <h1>My Properties</h1>
        { props.user && renderOwnerListings()}
    </div>
)
}
export default MySites;