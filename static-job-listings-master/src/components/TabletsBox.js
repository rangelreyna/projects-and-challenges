import Tablet from './Tablet';

function TabletsBox({ role, level, languages, tools, handleAddTablet }) {
  return (
    <div className="listing__tablets-box tablets-wrapper">
      <Tablet tabletText={role} handleAddTablet={handleAddTablet} />
      <Tablet tabletText={level} handleAddTablet={handleAddTablet} />
      {languages.length > 0 && languages.map(language =>
        <Tablet key={language} tabletText={language} handleAddTablet={handleAddTablet} />
      )}
      {tools.length > 0 && tools.map(tool =>
        <Tablet key={tool} tabletText={tool} handleAddTablet={handleAddTablet} />
      )}
    </div>
  );
}
  
export default TabletsBox;
