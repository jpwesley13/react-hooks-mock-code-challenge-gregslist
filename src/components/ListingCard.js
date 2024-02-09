import React, {useState} from "react";

function ListingCard( {listing, onDeleteListing} ) {

  const [fave, setFave] = useState(false)

  function handleFave() {
    return setFave(!fave)
  }

  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: "DELETE",
    })
    .then(res => res.json())
    .then(() => onDeleteListing(listing))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {fave ? (
          <button onClick={() => setFave(!fave)} className="emoji-button favorite active">★</button> //two functions for accomplishing the same result. Unsure which is "better."
        ) : (
          <button onClick={handleFave} className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button onClick={handleDeleteClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
