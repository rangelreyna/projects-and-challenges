
function InfoBox({ listing }) {
  return (
    <div className="listing__info-box">
      <div className="listing__header">
        <h4 className="listing__company">{listing.company}</h4>
        {listing.isNew ? <div className="listing__tag new">New!</div> : null}
        {listing.isFeatured ? <div className="listing__tag featured">Featured</div> : null}
      </div>
      <a href="#" className="listing__title">{listing.title}</a>
      <div className="listing__details">
        <p className="listing__detail">{listing.postTime}</p>
        <div className="dot"></div>
        <p className="listing__detail">{listing.type}</p>
        <div className="dot"></div>
        <p className="listing__detail">{listing.location}</p>
      </div>
    </div>
  );
}
  
export default InfoBox;