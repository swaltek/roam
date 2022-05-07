// import apiCalls from "../api/apiCalls";

function SavedSites(props){
  console.log(props)
  return (
    <div className="saved sites">
      <h2> SavedSites</h2>
      <div>
        <div className="card-columns col-sm-4">
          <div className="card" style={{"width" :" 200px"}}>
            <div className="card-body">
            <h4 className="card-title">Site 1</h4>
            <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  )
  }

  export default SavedSites;