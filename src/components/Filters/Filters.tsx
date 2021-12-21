import React, { useEffect, useState } from 'react'
import { getColorCodes } from '../../api'
import { Color, ColorStyle, Facet, ImageStyle, selectedFacet } from '../../types'
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs'
import FacetBlock from '../FacetBlock/FacetBlock'


interface Props {
  facets: Facet[];
}

export const Filters: React.FC<Props> = ({ facets }) => {
  const [ colorCodes, setColorCodes ] = useState<Color[]>([]);
  const [ selectedFilters, setSelectedFilters ] = useState<selectedFacet[]>([]);

  useEffect(() => {
    getColorCodes().then(loadedColors => {
      setColorCodes(loadedColors);
    })
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

  return (
    <div>
      <div className="Filters">
        <div className="Filters__section">filters</div>
        <Breadcrumbs onColorSelect={onColorSelect} onMaterialSelect={onMaterialSelect} selectedFilters={selectedFilters}/>
      </div>
      {facets.map(facet => <FacetBlock onColorSelect={onColorSelect} onMaterialSelect={onMaterialSelect} key={facet.name} colorCodes={colorCodes} facet={facet}/>)}
    </div>
  )
}

export default Filters
