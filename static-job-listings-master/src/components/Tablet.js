
function Tablet({ tabletText, handleAddTablet }) {
  return (
    <div className="tablet" onClick={() => handleAddTablet(tabletText)} >
      <p className="tablet__text">{tabletText}</p>
    </div>
  );
}
  
export default Tablet;
