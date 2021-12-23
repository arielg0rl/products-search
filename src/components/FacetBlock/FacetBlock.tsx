import React, { useState } from 'react'
import { Facet, ColorStyle, ImageStyle, Color, selectedFacet } from '../../types'
import classNames from 'classnames'
import InputRange from 'react-input-range'
import defaultClassNames from '../../default-class-names.js';

interface Props {
  facet: Facet;
  colorCodes: Color[];
  onMaterialSelect: (material: string) => void;
  onColorSelect: (color: ColorStyle | ImageStyle) => void;
  selectedFilters: selectedFacet[];
}

export const FacetBlock: React.FC<Props> = ({ selectedFilters, onColorSelect, onMaterialSelect, colorCodes, facet }) => {
  const sixItems = facet.values.slice(0, 6);

  const [ itemsToRender, setItemsToRender ] = useState(sixItems);
  const [ show6Filters, setShow6Filters ] = useState(true);
  const [ showAllFilters, setShowAllFilters ] = useState(false);
  const [ hidden, setHidden ] = useState(false);
  const [ moreOrLess, setMoreOrLess ] = useState('More');
  const [ rangeValue, setRangeValue ] = useState({ min: 30, max: 80 });

  const handleOpenButton = (): void => {
    setHidden(false);
    setShow6Filters(true);
  }

  const handleCloseButton = (): void => {
    setShowAllFilters(false);
    setHidden(true);
    setShow6Filters(false);
    setItemsToRender(sixItems);
    setMoreOrLess('More');
  }

  const handleMoreButton = (): void => {
    if (show6Filters) {
      setShowAllFilters(true);
      setShow6Filters(false);
      setItemsToRender(facet.values);
      setMoreOrLess('Less');
    }
    if (showAllFilters) {
      setItemsToRender(sixItems);
      setMoreOrLess('More');
      setShow6Filters(true);
      setShowAllFilters(false);
    }
  }

  const getColor = (color: string): ColorStyle | ImageStyle => {
    const colorCode = colorCodes.find(colorCode => color === colorCode.name) as Color;

    if (color === "Multicolor") {
      return { id: color, backgroundImage: `url(${colorCode.code})`, backgroundSize: "cover"};
    }
    if (color === "White") {
      return { id: color, backgroundColor: colorCode.code, border: "1px solid grey"};
    }
    return { id: color, backgroundColor: colorCode.code};
  }

  return (
    <div className="facet">
      <div className="facet__wrapper" key={facet.name}>
        <label className="facet__head">
          <div className="facet__name">{facet.name}</div>
          {hidden ? (
            <button className="facet__button facet__button-open" onClick={handleOpenButton}></button>
          ) : (
          <button className="facet__button facet__button-close" onClick={handleCloseButton}>
          </button>
          )}
        </label>

        {!hidden && (
          <div className="facet__options">
            {itemsToRender.map(value => {
              return (
                <div key={value.value}>
                {facet.type === "text" &&
                  <div className="facet__option" key={value.value}>
                    <label className="facet__option-wrapper">
                      <button
                        className={classNames("facet__box", { 'facet__box--selected': selectedFilters.find(facet => facet.value === value.value)})}
                        onClick={() => {
                          onMaterialSelect(value.value);
                        }}
                      >
                      </button>
                      <div className="facet__value">{value.value}</div>
                    </label>
                    <div className="facet__count">({value.count})</div>
                  </div>
                }

                {facet.type === "color" &&
                  <div className="facet__option" key={value.value}>
                    <label className="facet__option-wrapper">
                      <button
                        style={getColor(value.value)}
                        className={classNames("facet__color", { 'facet__color--selected-color': selectedFilters.find(facet => {
                          return typeof facet.value !== 'string' ? (facet.value).id === getColor(value.value).id : null;
                        })})}
                        onClick={() => onColorSelect(getColor(value.value))}
                      >
                      </button>
                      <div className="facet__value">{value.value}</div>
                    </label>
                    <div className="facet__count">({value.count})</div>
                  </div>
                }

                {facet.type === "range" &&
                  <div className="facet__option" key={value.value}>
                    <section className="range-slider">
                      <InputRange
                        classNames={defaultClassNames}
                        formatLabel={value => `$${value}`}
                        minValue={+value.value.split('_')[0]}
                        maxValue={+value.value.split('_')[1]}
                        value={rangeValue}
                        onChange={value => {
                          return typeof value !== "number" &&
                          setRangeValue({ min: value.min, max: value.max })}}
                      />
                      </section>
                      <button
                        type="submit"
                        className="facet__go-button"
                      >
                        go
                      </button>
                  </div>}
                </div>
              )
            })}
            <div
              className="facet__more-button"
              onClick={handleMoreButton}
            >
              <div className={classNames("facet__more-button-word",
                { "facet__more-button-word--plus" : moreOrLess === 'More'}
              )}>
                {moreOrLess}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default FacetBlock

