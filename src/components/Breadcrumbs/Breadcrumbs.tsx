import React from 'react'
import { ColorStyle, ImageStyle, selectedFacet } from '../../types'

interface Props {
  selectedFilters: selectedFacet[],
  onMaterialSelect: (material: string) => void;
  onColorSelect: (color: ColorStyle | ImageStyle) => void;
}

export const Breadcrumbs: React.FC<Props> = ({ onMaterialSelect, selectedFilters }) => {
  console.log(selectedFilters)
  return (
    <div className="Breadcrumbs">
      {selectedFilters.map(filter => {
        return (
          <div className="Breadcrumbs__piece-wrapper" key={typeof filter.value !== 'string' ? filter.value.id : filter.value}>
            {filter.type === 'material' &&
            <div className="Breadcrumbs__piece">
              <div className="Breadcrumbs__name">{filter.value}</div>
              <div
                className="Breadcrumbs__button"
                onClick={() => onMaterialSelect(filter.value as string)}
              >
              </div>
              <div className="Breadcrumbs__slash">/</div>
            </div>

            }
            {filter.type === 'color' &&
            <div className="Breadcrumbs__piece">
              <div
                style={typeof filter.value !== 'string' ? filter.value : {}}
                className="Breadcrumbs__color"
              >
              </div>
              <div
                className="Breadcrumbs__button"
                onClick={() => onMaterialSelect(filter.value as string)}
              >
              </div>
              <div className="Breadcrumbs__slash">/</div>
            </div>
            }
          </div>
        )
      })}
    </div>
  )
}

export default Breadcrumbs