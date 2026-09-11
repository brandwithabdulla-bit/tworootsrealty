'use client';

import { useState } from 'react';
import styles from './ProjectSearch.module.css';

export default function ProjectSearch({ onFilterChange, initialFilters = {} }) {
  const [filters, setFilters] = useState({
    search: '',
    type: '',
    bedrooms: '',
    price: '',
    handover: '',
    developer: '',
    status: '',
    ...initialFilters
  });

  const [activeChips, setActiveChips] = useState(
    Object.entries(initialFilters).filter(([_, v]) => v).map(([k, v]) => ({ key: k, label: v }))
  );

  const handleFilterChange = (key, value, label) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    
    if (value) {
      // Add or update chip
      const existingChipIndex = activeChips.findIndex(c => c.key === key);
      const newChips = [...activeChips];
      if (existingChipIndex >= 0) {
        newChips[existingChipIndex] = { key, label };
      } else {
        newChips.push({ key, label });
      }
      setActiveChips(newChips);
    } else {
      // Remove chip
      setActiveChips(activeChips.filter(c => c.key !== key));
    }
    
    if (onFilterChange) onFilterChange(newFilters);
  };

  const removeChip = (key) => {
    handleFilterChange(key, '', '');
  };

  const clearAll = () => {
    const clearedFilters = {
      search: '', type: '', bedrooms: '', price: '', handover: '', developer: '', status: ''
    };
    setFilters(clearedFilters);
    setActiveChips([]);
    if (onFilterChange) onFilterChange(clearedFilters);
  };

  const propertyTypes = ['Apartments', 'Villas', 'Townhouses', 'Penthouses', 'Commercial'];
  const bedrooms = ['Studio', '1', '2', '3', '4', '5+'];
  const handovers = ['2024', '2025', '2026', '2027', '2028+'];

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchBar}>
        <div className={styles.searchInputWrapper}>
          <svg className={styles.searchIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input 
            type="text" 
            placeholder="Search location, community or project" 
            className={styles.searchInput}
            value={filters.search}
            onChange={(e) => handleFilterChange('search', e.target.value, e.target.value)}
          />
        </div>
      </div>

      <div className={styles.filterRow}>
        <select 
          className={styles.filterSelect} 
          value={filters.type}
          onChange={(e) => handleFilterChange('type', e.target.value, e.target.options[e.target.selectedIndex].text)}
        >
          <option value="">Property Type</option>
          {propertyTypes.map(t => <option key={t} value={t.toLowerCase()}>{t}</option>)}
        </select>

        <select 
          className={styles.filterSelect}
          value={filters.bedrooms}
          onChange={(e) => handleFilterChange('bedrooms', e.target.value, e.target.options[e.target.selectedIndex].text !== 'Bedrooms' ? e.target.options[e.target.selectedIndex].text + ' Beds' : '')}
        >
          <option value="">Bedrooms</option>
          {bedrooms.map(b => <option key={b} value={b}>{b}</option>)}
        </select>

        <select 
          className={styles.filterSelect}
          value={filters.price}
          onChange={(e) => handleFilterChange('price', e.target.value, e.target.options[e.target.selectedIndex].text)}
        >
          <option value="">Price Range</option>
          <option value="under-1m">Under AED 1M</option>
          <option value="1m-3m">AED 1M - 3M</option>
          <option value="3m-5m">AED 3M - 5M</option>
          <option value="over-5m">Over AED 5M</option>
        </select>

        <select 
          className={styles.filterSelect}
          value={filters.handover}
          onChange={(e) => handleFilterChange('handover', e.target.value, e.target.options[e.target.selectedIndex].text)}
        >
          <option value="">Handover</option>
          {handovers.map(h => <option key={h} value={h}>{h}</option>)}
        </select>

        <select 
          className={styles.filterSelect}
          value={filters.status}
          onChange={(e) => handleFilterChange('status', e.target.value, e.target.options[e.target.selectedIndex].text)}
        >
          <option value="">Status</option>
          <option value="off-plan">Off-Plan</option>
          <option value="ready">Ready</option>
        </select>
        
        <button className={styles.searchBtn}>SEARCH</button>
      </div>

      {activeChips.length > 0 && (
        <div className={styles.activeFilters}>
          {activeChips.map(chip => chip.key !== 'search' && (
            <span key={chip.key} className={styles.chip}>
              {chip.label}
              <button onClick={() => removeChip(chip.key)} className={styles.removeChip}>×</button>
            </span>
          ))}
          <button onClick={clearAll} className={styles.clearBtn}>Clear All</button>
        </div>
      )}
    </div>
  );
}
