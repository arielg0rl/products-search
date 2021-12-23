import React, { useState, useEffect } from 'react';
import './App.scss';
import './components/FacetBlock/FacetBlock.scss';
import './components/ProductList/ProductsList.scss';
import './components/Filters/Filters.scss';
import './components/Breadcrumbs/Breadcrumbs.scss';
import 'react-input-range/lib/css/index.css';

import { getData } from './api';
import Filters from './components/Filters/Filters';
import ProductsList from './components/ProductList/ProductsList';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import { ColorStyle, ImageStyle, priceValues, selectedFacet } from './types';

function App() {
  const [ items, setItems ] = useState([]);
  const [ facets, setFacets ] = useState([]);
  const [ selectedFilters, setSelectedFilters ] = useState<selectedFacet[]>([]);
  const [ selectedPrice, setSelectedPrice ] = useState('');

  useEffect(() => {
    getData().then(loadedItems => {
      setItems(loadedItems.items);
      setFacets(loadedItems.facets);
    });
  }, [])

  const onMaterialSelect = (material: string) => {
    if (selectedFilters.find(filter => filter.value === material)) {
      setSelectedFilters([...selectedFilters].filter(filter => filter.value !== material));
    } else {
    setSelectedFilters([ ...selectedFilters, { type: 'material', value: material } ])
    }
  }

  const onColorSelect = (color: ColorStyle | ImageStyle) => {
    if (selectedFilters.find(filter => {
      if (typeof filter.value !== 'string') {
        return filter.value.id === color.id;
      }
    })) {
      setSelectedFilters([...selectedFilters].filter(filter => {
        if (typeof filter.value === 'string') {
          return filter;
        }
        if (typeof filter.value !== 'string') {
          return filter.value.id !== color.id;
        }
      }))
    } else {
       setSelectedFilters([ ...selectedFilters, { type: 'color', value: color } ]);
    }
  }

  const onPriceSelect = (rangeValue: priceValues) => {
    setSelectedPrice(`$${rangeValue.min} - $${rangeValue.max}`);
  }

  const onPriceDelete = () => {
    setSelectedPrice('');
  }

  return (
    <div className="App">
      <h1 className="App__heading">Search results</h1>
      <div className="Filters">
        <div className="Filters__section">filters</div>
        <div className="desktop-breadcrumbs">
          <Breadcrumbs onPriceDelete={onPriceDelete} selectedPrice={selectedPrice} onColorSelect={onColorSelect} onMaterialSelect={onMaterialSelect} selectedFilters={selectedFilters}/>
        </div>
      </div>
      <div className="App__main">
        <Filters onPriceSelect={onPriceSelect} selectedFilters={selectedFilters} onColorSelect={onColorSelect} onMaterialSelect={onMaterialSelect} facets={facets}/>
        {selectedFilters.length > 0 && <div className="mobile-breadcrumbs">
          <Breadcrumbs onPriceDelete={onPriceDelete} selectedPrice={selectedPrice} onColorSelect={onColorSelect} onMaterialSelect={onMaterialSelect} selectedFilters={selectedFilters}/>
        </div>}
        <ProductsList items={items}/>
      </div>
    </div>
  );
}

export default App;
