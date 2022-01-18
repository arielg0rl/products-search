import React from 'react'
import { ColorStyle, ImageStyle, selectedFacet } from '../../types'

interface Props {
  selectedFilters: selectedFacet[],
  onMaterialSelect: (material: string) => void;
  onColorSelect: (color: ColorStyle | ImageStyle) => void;
  selectedPrice: string;
  onPriceDelete: () => void;
}

export const Breadcrumbs: React.FC<Props> = ({
  onPriceDelete,
  selectedPrice,
  onMaterialSelect,
  selectedFilters,
  onColorSelect,
}) => {
  return (
    <div className="Breadcrumbs">
      {selectedPrice.length > 0 && (
        <div className="Breadcrumbs__piece">
        <label className="Breadcrumbs__facet">
          <div className="Breadcrumbs__name">{selectedPrice}</div>
          <button
            className="Breadcrumbs__button"
            onClick={() => onPriceDelete()}
          >
          </button>
        </label>
        <div className="Breadcrumbs__slash">/</div>
      </div>
      )}
      {selectedFilters.map(filter => {
        return (
          <div
            className="Breadcrumbs__piece-wrapper"
            key={typeof filter.value !== 'string' ? filter.value.id : filter.value}
          >
            {filter.type === 'material' &&
            <div className="Breadcrumbs__piece">
              <label className="Breadcrumbs__facet">
                <div className="Breadcrumbs__name">{filter.value}</div>
                <button
                  className="Breadcrumbs__button"
                  onClick={() => onMaterialSelect(filter.value as string)}
                >
                </button>
              </label>
              <div className="Breadcrumbs__slash">/</div>
            </div>

            }
            {filter.type === 'color' &&
            <div className="Breadcrumbs__piece">
              <label className="Breadcrumbs__facet">
                <div
                  style={typeof filter.value !== 'string' ? filter.value : {}}
                  className="Breadcrumbs__color"
                >
                </div>
                <button
                  className="Breadcrumbs__button"
                  onClick={() => onColorSelect(filter.value as ColorStyle | ImageStyle)}
                >
                </button>
              </label>
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