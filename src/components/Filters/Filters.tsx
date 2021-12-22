import React, { useEffect, useState } from 'react'
import { getColorCodes } from '../../api'
import { Color, ColorStyle, Facet, ImageStyle, selectedFacet } from '../../types'
import FacetBlock from '../FacetBlock/FacetBlock'


interface Props {
  facets: Facet[];
  selectedFilters: selectedFacet[],
  onMaterialSelect: (material: string) => void;
  onColorSelect: (color: ColorStyle | ImageStyle) => void;
}

export const Filters: React.FC<Props> = ({ selectedFilters, facets, onMaterialSelect, onColorSelect }) => {
  const [ colorCodes, setColorCodes ] = useState<Color[]>([]);

  useEffect(() => {
    getColorCodes().then(loadedColors => {
      setColorCodes(loadedColors);
    })
  }, [])

  return (
    <div>
      {facets.map(facet => <FacetBlock selectedFilters={selectedFilters} onColorSelect={onColorSelect} onMaterialSelect={onMaterialSelect} key={facet.name} colorCodes={colorCodes} facet={facet}/>)}
    </div>
  )
}

export default Filters
