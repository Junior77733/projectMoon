import { useState, useMemo } from 'react';
import servantNames from '../servant-names.json';

export default function SearchBar({ onSelectServant }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServants = useMemo(() => {
    if (!searchTerm) {
      return [];
    }
    return servantNames.filter(servant =>
      servant.name.toLowerCase().includes(searchTerm.toLowerCase())
    ).slice(0, 10);
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSelect = (servantId) => {
    setSearchTerm('');
    onSelectServant(servantId);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {searchTerm && (
        <ul className="search-results">
          {filteredServants.length > 0 ? (
            filteredServants.map(servant => (
              <li key={servant.id} onClick={() => handleSelect(servant.id)}>
                {servant.name}
              </li>
            ))
          ) : (
            <li className="no-results">No servants found</li>
          )}
        </ul>
      )}
    </div>
  );
}
