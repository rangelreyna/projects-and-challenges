import FilterBar from './FilterBar';
import Listing from './Listing';

function Page({ filterTablets, filteredListings, handleAddTablet, handleRemoveTablet, handleClear }) {
  
  const sortListings = (listings) => {
    // sort by putting new listings on top & then featured listings on top 
    return listings.sort(a => a.isNew ? -1 : 1).sort(a => a.isFeatured ? -1 : 1);
  };
  
  return (
    <div className="page">
      <header className="page__header"></header>
      <section className="page__body">
        <FilterBar filterTablets={filterTablets} handleRemoveTablet={handleRemoveTablet} handleClear={handleClear}/>
        {(
          sortListings(filteredListings).map(listing => <Listing key={listing.id} listing={listing} handleAddTablet={handleAddTablet} />)
        )}
      </section>
    </div>
  );
}

export default Page;