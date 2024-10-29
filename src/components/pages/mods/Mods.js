import React, { useState, useEffect } from 'react';
import ModCard from "./ModCard";
import modsData from "./mods.json";


const Mods = () => {
  const [mods, setMods] = useState([]);
  const [filter, setFilter] = useState('Все');

  useEffect(() => {
    setMods(modsData);
  }, []);

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  const filteredMods = filter === 'Все'
    ? mods
    : mods.filter(mod => mod.category === filter);

  return (
    <div className='mods'>
      <div className="mods-header">
        <h1>Популярные моды</h1>
        <h2>Библиотека популярных модов с фильтрами</h2>
        <div className="filter-buttons">
          <button onClick={() => handleFilterChange('Все')}>Все</button>
          <button onClick={() => handleFilterChange('Технические')}>Технические</button>
          <button onClick={() => handleFilterChange('Магические')}>Магические</button>
          <button onClick={() => handleFilterChange('RPG')}>RPG</button>
          <button onClick={() => handleFilterChange('Декор')}>Декор</button>
        </div>
      </div>
      <div className="mods-grid">
        {filteredMods.map(mod => (
          <ModCard key={mod.id} mod={mod} />
        ))}
      </div>
    </div>
  );
};

export default Mods;