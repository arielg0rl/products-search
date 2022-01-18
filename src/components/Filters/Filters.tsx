import React, { useEffect, useState } from 'react'
import { getColorCodes } from '../../api'
import { Color, ColorStyle, Facet, ImageStyle, priceValues, selectedFacet } from '../../types'
import FacetBlock from '../FacetBlock/FacetBlock'


interface Props {
  facets: Facet[];
  selectedFilters: selectedFacet[],
  onMaterialSelect: (material: string) => void;
  onColorSelect: (color: ColorStyle | ImageStyle) => void;
  onPriceSelect: (v: priceValues) => void;
}

export const Filters: React.FC<Props> = ({
  selectedFilters,
  facets,
  onMaterialSelect,
  onColorSelect,
  onPriceSelect
}) => {

  const [colorCodes, setColorCodes] = useState<Color[]>([]);

  useEffect(() => {
    getColorCodes().then(loadedColors => {
      setColorCodes(loadedColors);
    })
  }, [])

  return (
    <div>
      {facets.map(facet =>
        <FacetBlock
          onPriceSelect={onPriceSelect}
          selectedFilters={selectedFilters}
          onColorSelect={onColorSelect}
          onMaterialSelect={onMaterialSelect}
          key={facet.name}
          facet={facet}
          colorCodes={colorCodes}
        />
      )}
    </div>
  )
}

export default Filters
