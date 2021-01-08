import React, { useState, useEffect } from 'react';
import InfoBox from './InfoBox';
import TabletsBox from './TabletsBox';

function Listing({ listing, handleAddTablet }) {
  const [logo, setLogo] = useState("");

  useEffect(() => {
    setLogo(process.env.PUBLIC_URL + listing.logo);
  }, []);

  return (
    <div className={"listing__card container " + (listing.isFeatured ? 'featured' : null)}>
      <img src={logo} alt={listing.company} className="listing__logo"/>
      <InfoBox listing={listing} />
      <TabletsBox role={listing.role} level={listing.level} languages={listing.languages} 
        tools={listing.tools} handleAddTablet={handleAddTablet} />
    </div>
  );
}

export default Listing;