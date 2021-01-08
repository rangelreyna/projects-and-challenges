import React, { useState, useEffect } from 'react';
import positionsData from './data/positions.json';
import tabletTypes from './data/tabletTypes.json';
import Page from './components/Page';
import './App.scss'; 

// objects used later for easier searching - {"Frontend": 0, "Backend": 1, ...}
const roleTypesObj = {}, levelTypesObj = {}, languageTypesObj = {}, toolTypesObj = {};
tabletTypes.roles.forEach((role, index) => roleTypesObj[role] = index);
tabletTypes.levels.forEach((level, index) => levelTypesObj[level] = index);
tabletTypes.languages.forEach((lang, index) => languageTypesObj[lang] = index);
tabletTypes.tools.forEach((tool, index) => toolTypesObj[tool] = index);

function App() {
  // filtering tablets 
  const [filterTablets, setFilterTablets] = useState([]);
  const [activeRole, setActiveRole] = useState("");
  const [activeLevel, setActiveLevel] = useState("");
  const [activeLanguages, setActiveLanguages] = useState([]);
  const [activeTools, setActiveTools] = useState([]);
  // listings 
  const [listings, setListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);
  //const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    //setIsLoading(true);
    const timer = setTimeout(() => {
      setListings(positionsData);
      setFilteredListings(positionsData);
      //setIsLoading(false);
    }, 1);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    filterTablets.length > 0 ? filterListings() : setFilteredListings(listings);
  }, [filterTablets]);

  const handleAddTablet = (newTablet) => {
    if (!filterTablets.includes(newTablet)) {
      // add new tablet to its respective active category 
      if (roleTypesObj[newTablet] !== undefined) {
        if (activeRole === "") setActiveRole(newTablet); 
        else return;
      } else if (levelTypesObj[newTablet] !== undefined) {
        if (activeLevel === "") setActiveLevel(newTablet); 
        else return;
      } else if (languageTypesObj[newTablet] !== undefined) {
        setActiveLanguages(prev => [...prev, newTablet]);
      } else if (toolTypesObj[newTablet] !== undefined) {
        setActiveTools(prev => [...prev, newTablet]);
      }

      setFilterTablets(prev => [...prev, newTablet]);
    }
  };

  const handleRemoveTablet = (target) => {
    const tabletAtIndex = filterTablets[target];

    // remove target tablet from its active category 
    if (roleTypesObj[tabletAtIndex] !== undefined) {
      setActiveRole("");
    } else if (levelTypesObj[tabletAtIndex] !== undefined) {
      setActiveLevel("");
    } else if (languageTypesObj[tabletAtIndex] !== undefined) {
      setActiveLanguages(prev => prev.filter(language => language !== tabletAtIndex));
    } else if (toolTypesObj[tabletAtIndex] !== undefined) {
      setActiveTools(prev => prev.filter(tool => tool !== tabletAtIndex));
    }
    
    setFilterTablets(prev => prev.filter(tablet => tablet !== tabletAtIndex));
  };

  const handleClear = () => {
    setActiveRole("");
    setActiveLevel("");
    setActiveLanguages([]);
    setActiveTools([]);
    setFilterTablets([]);
  };

  const filterListings = () => {
    const filtered = listings.filter(listing => {
      const roleReq = activeRole === "" || activeRole === listing.role;
      const levelReq = activeLevel === "" || activeLevel === listing.level;
      const languagesReq = activeLanguages === [] || activeLanguages.every(aLang => listing.languages.includes(aLang));
      const toolsReq = activeTools === [] || activeTools.every(aTool => listing.tools.includes(aTool));
      return roleReq && levelReq && languagesReq && toolsReq;
    });
    setFilteredListings(filtered);
  };

  return (
    <Page filterTablets={filterTablets} filteredListings={filteredListings} 
      handleAddTablet={handleAddTablet} handleRemoveTablet={handleRemoveTablet} handleClear={handleClear} />
  );
}

export default App;
