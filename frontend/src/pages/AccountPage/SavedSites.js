
import React from "react";

function SavedSites(props){
  return (
    <div className="container">
      <h2> SavedSites</h2>
      <div className="card-columns col-me-4">
        <React.Fragment>  
          {props.user.favorite_listings.length > 0 && Object.keys(props.user.favorite_listings).map((key, index) => (
              <div className="card" key={key} style={{"width" :" 200px"}}>
                <div className="card-body">
                  <h4 className="card-title">{props.user.first_name}</h4>
                  <p className="card-text">{props.user.favorite_listings[key]}</p>
                </div>
              </div>
            ))}
            </React.Fragment>
      </div>
    </div>
  
  )
  }

  export default SavedSites;