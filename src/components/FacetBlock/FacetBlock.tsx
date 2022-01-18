import React, { useState } from 'react'
import { Facet, ColorStyle, ImageStyle, Color, selectedFacet, priceValues } from '../../types'
import classNames from 'classnames'
import { FilterTypes } from '../FilterTypes/FilterTypes';

interface Props {
  facet: Facet;
  onMaterialSelect: (material: string) => void;
  onColorSelect: (color: ColorStyle | ImageStyle) => void;
  selectedFilters: selectedFacet[];
  onPriceSelect: (v: priceValues) => void;
  colorCodes: Color[];
}

export const FacetBlock: React.FC<Props> = ({
  onPriceSelect,
  selectedFilters,
  onColorSelect,
  onMaterialSelect,
  facet,
  colorCodes,
}) => {
  const limitedItems = facet.values.slice(0, 6);

  const [itemsToRender, setItemsToRender] = useState(limitedItems);
  const [showMoreFilters, setShowMoreFilters] = useState(true);
  const [showAllFilters, setShowAllFilters] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleOpenButton = (): void => {
    setHidden(false);
    setShowMoreFilters(true);
  }

  const handleCloseButton = (): void => {
    setShowAllFilters(false);
    setHidden(true);
    setShowMoreFilters(false);
    setItemsToRender(limitedItems);
    setIsExpanded(false);
  }

  const handleMoreButton = (): void => {
    if (showMoreFilters) {
      setShowAllFilters(true);
      setShowMoreFilters(false);
      setItemsToRender(facet.values);
      setIsExpanded(true);
    }
    if (showAllFilters) {
      setItemsToRender(limitedItems);
      setIsExpanded(false);
      setShowMoreFilters(true);
      setShowAllFilters(false);
    }
  }

  return (
    <div className="facet">
      <div className="facet__wrapper" key={facet.name}>
        <label className="facet__head">
          <div className="facet__name">{facet.name}</div>
          {hidden ? (
            <button
              className="facet__button facet__button-open"
              onClick={handleOpenButton}
            >
            </button>
          ) : (
            <button
              className="facet__button facet__button-close"
              onClick={handleCloseButton}
            >
            </button>
          )}
        </label>

        {!hidden && (
          <div className="facet__options">
            {itemsToRender.map(value => {
              return (
                <div key={value.value}>
                  <FilterTypes
                    facet={facet}
                    value={value}
                    selectedFilters={selectedFilters}
                    onMaterialSelect={onMaterialSelect}
                    onColorSelect={onColorSelect}
                    onPriceSelect={onPriceSelect}
                    colorCodes={colorCodes}
                  />
                </div>
              )
            })}
            <div
              className="facet__more-button"
              onClick={handleMoreButton}
            >
              <div className={classNames("facet__more-button-word",
                { "facet__more-button-word--plus": isExpanded === false }
              )}>
                {isExpanded ? "Less" : "More"}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default FacetBlock

