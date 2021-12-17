import React, { useEffect, useState } from 'react'
import { getColorCodes } from '../../api'
import { ColorStyle, Facet, ImageStyle, selectedFacet } from '../../types'
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs'
import FacetBlock from '../FacetBlock/FacetBlock'


interface Props {
  facets: Facet[];
}

export const Filters: React.FC<Props> = ({ facets }) => {
  const [ colorCodes, setColorCodes ] = useState([]);
  const [ selectedFilters, setSelectedFilters ] = useState<selectedFacet[]>([]);

  useEffect(() => {
    getColorCodes().then(loadedColors => {
      setColorCodes(loadedColors);
    })
  }, [])

  const onFilterSelect = (styleOrName: string | ColorStyle | ImageStyle) => {
    if (typeof styleOrName === 'string') {
      setSelectedFilters([ ...selectedFilters, { type: 'material', value: styleOrName } ])
    }
    setSelectedFilters([ ...selectedFilters, { type: 'color', value: styleOrName } ])
  }

  return (
    <div>
      <div className="Filters">
        <div className="Filters__section">filters</div>
        <Breadcrumbs selectedFilters={selectedFilters}/>
      </div>
      {facets.map(facet => <FacetBlock onFilterSelect={onFilterSelect} key={facet.name} colorCodes={colorCodes} facet={facet}/>)}
    </div>
  )
}

export default Filters
