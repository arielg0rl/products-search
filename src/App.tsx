import React, { useState, useEffect } from 'react';
import './App.scss';
import './components/FacetBlock/FacetBlock.scss';
import './components/ProductList/ProductsList.scss';
import './components/Filters/Filters.scss';
import './components/Breadcrumbs/Breadcrumbs.scss';

import Filters from './components/Filters/Filters';
import ProductsList from './components/ProductList/ProductsList';
import { getData } from './api';

function App() {
  const [ items, setItems ] = useState([]);
  const [ facets, setFacets ] = useState([]);

  useEffect(() => {
    getData().then(loadedItems => {
      setItems(loadedItems.items);
      setFacets(loadedItems.facets);
    });
  }, [])

  return (
    <div className="App">
      <h1 className="App__heading">Search results</h1>
      <Filters facets={facets}/>
      <ProductsList items={items}/>
    </div>
  );
}

export default App;
