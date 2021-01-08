
function FilterBar({ filterTablets, handleRemoveTablet, handleClear }) {
  return (
    <div className={"filter-bar container " + (filterTablets.length > 0 ? 'show' : null)}>
      <div className="tablets-wrapper">
        {
          filterTablets.map((tablet, index) => (
            <div className="tablet" key={tablet}>
              <p className="tablet__text">{tablet}</p>
              <button className="removeTabletBtn" onClick={() => handleRemoveTablet(index)}></button>
            </div>
          ))
        }
      </div>
      <button className="clearBtn" onClick={handleClear}>Clear</button>
    </div>
  );
}

export default FilterBar;
