import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(res => res.json())
    .then(data => setListings(data))
  }, [])

  function handleDeleteListing(deletedListing) {
    const updatedListing = listings.filter((listing) => listing.id !== deletedListing.id) //remember I want every listing that is NOT (!==) the one being deleted.
    setListings(updatedListing)
  }

  // function handleSearch(e) {
  //   setSearch(e.target.value)
  // } -----Don't use this here

  const listingsToDisplay = listings
  .filter(
    (listing) => listing.description.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="app">
      <Header 
      // onSearch = {handleSearch}
      onSearch = {setSearch}/> 
      <ListingsContainer 
      listings = {listingsToDisplay}
      onDeleteListing={handleDeleteListing}/>
    </div>
  );
}

export default App;
