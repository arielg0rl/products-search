import React, { useState } from 'react'
import { Facet, ColorStyle, ImageStyle, Color, selectedFacet } from '../../types'
import classNames from 'classnames'

interface Props {
  facet: Facet;
  colorCodes: Color[];
  onFilterSelect: (styleOrName: string | ColorStyle | ImageStyle) => void;
}

export const FacetBlock: React.FC<Props> = ({ onFilterSelect, colorCodes, facet }) => {
  const sixItems = facet.values.slice(0, 6);

  const [ itemsToRender, setItemsToRender ] = useState(sixItems);
  const [ show6Filters, setShow6Filters ] = useState<boolean>(false);
  const [ showAllFilters, setShowAllFilters ] = useState<boolean>(false);
  const [ hidden, setHidden ] = useState<boolean>(true);
  const [ moreOrLess, setMoreOrLess ] = useState<string>('More');

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
    const colorCode = colorCodes.find(colorCode => color === colorCode.name) || null;

    if (color === "Multicolor") {
      return colorCode ? { backgroundImage: `url(${colorCode.code})`, backgroundSize: "cover"} : { backgroundColor: "white"}
    }
    if (color === "White") {
      return colorCode ? { backgroundColor: colorCode.code, border: "1px solid black"} : { backgroundColor: "white"}
    }
    return colorCode ? { backgroundColor: colorCode.code} : { backgroundColor: "white"}
  }

  return (
    <div className="facet">
      <div className="facet__wrapper" key={facet.name}>
        <div className="facet__head">
          <div className="facet__name">{facet.name}</div>
          {hidden ? (
            <div className="facet__button facet__button-open" onClick={handleOpenButton}></div>
          ) : (
          <div className="facet__button facet__button-close" onClick={handleCloseButton}>
          </div>
          )}
        </div>

        {!hidden && (
          <div className="facet__options">
            {itemsToRender.map(value => {
              return (
                <>
                {facet.type === "text" &&
                  <div className="facet__option" key={value.value}>
                    <div className="facet__option-wrapper">
                      <div
                        className={classNames("facet__box", {})}
                        onClick={() => onFilterSelect(value.value)}
                      >
                      </div>
                      <div className="facet__value">{value.value}</div>
                    </div>
                    <div className="facet__count">({value.count})</div>
                  </div>
                }

                {facet.type === "color" &&
                  <div className="facet__option" key={value.value}>
                    <div className="facet__option-wrapper">
                      <div
                        style={getColor(value.value)}
                        className="facet__color"
                        onClick={() => onFilterSelect(getColor(value.value))}
                      >
                      </div>
                      <div className="facet__value">{value.value}</div>
                    </div>
                    <div className="facet__count">({value.count})</div>
                  </div>
                }

                {facet.type === "range" &&
                  <div className="facet__option" key={value.value}>
                  <section className="range-slider">
                    <input
                      type="range"
                      value={0}
                      min={0}
                      max={100}
                      step={1}
                      onChange={handleMoreButton}
                    />
                    </section>
                    <button>go</button>
                </div>}
                </>
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
