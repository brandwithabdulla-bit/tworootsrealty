'use client';

import { useState } from 'react';
import SectionHeader from '@/components/SectionHeader';
import PropertyCard from '@/components/PropertyCard';
import { properties } from '@/data/properties';
import styles from './page.module.css';

export default function PropertiesListing() {
  const [filter, setFilter] = useState({
    purpose: '',
    type: '',
    location: '',
    developer: ''
  });

  // Basic filtering logic
  const filteredProperties = properties.filter(p => {
    if (filter.purpose && p.purpose !== filter.purpose) return false;
    if (filter.type && p.propertyType !== filter.type) return false;
    if (filter.location && p.location !== filter.location) return false;
    if (filter.developer && p.developer !== filter.developer) return false;
    return true;
  });

  const handleReset = () => {
    setFilter({ purpose: '', type: '', location: '', developer: '' });
  };

  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className="container">
          <SectionHeader 
            title="Explore Properties" 
            subtitle="Our Portfolio"
          />
        </div>
      </div>

      <div className="container">
        <div className={styles.layout}>
          {/* Sidebar Filters */}
          <aside className={styles.sidebar}>
            <div className={styles.filterBox}>
              <h3 className="secondary-font">Filter Search</h3>
              
              <div className={styles.filterGroup}>
                <label>Purpose</label>
                <select 
                  value={filter.purpose} 
                  onChange={(e) => setFilter({...filter, purpose: e.target.value})}
                >
                  <option value="">Any</option>
                  <option value="Buy">Buy</option>
                  <option value="Rent">Rent</option>
                </select>
              </div>

              <div className={styles.filterGroup}>
                <label>Property Type</label>
                <select 
                  value={filter.type} 
                  onChange={(e) => setFilter({...filter, type: e.target.value})}
                >
                  <option value="">Any</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Villa">Villa</option>
                  <option value="Townhouse">Townhouse</option>
                  <option value="Penthouse">Penthouse</option>
                </select>
              </div>

              <div className={styles.filterGroup}>
                <label>Location</label>
                <select 
                  value={filter.location} 
                  onChange={(e) => setFilter({...filter, location: e.target.value})}
                >
                  <option value="">Any</option>
                  <option value="Downtown Dubai">Downtown Dubai</option>
                  <option value="Palm Jebel Ali">Palm Jebel Ali</option>
                  <option value="Dubai Marina">Dubai Marina</option>
                  <option value="Dubai Hills Estate">Dubai Hills Estate</option>
                </select>
              </div>

              <button className={styles.resetBtn} onClick={handleReset}>
                Reset Filters
              </button>
            </div>
          </aside>

          {/* Results Area */}
          <div className={styles.results}>
            <div className={styles.resultsHeader}>
              <p>Showing <strong>{filteredProperties.length}</strong> properties</p>
            </div>

            {filteredProperties.length > 0 ? (
              <div className={styles.grid}>
                {filteredProperties.map(property => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <div className={styles.emptyState}>
                <h3 className="secondary-font">No properties match your current filters.</h3>
                <button onClick={handleReset}>Reset Filters</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
