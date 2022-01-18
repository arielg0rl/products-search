import classNames from "classnames";
import React from "react";
import { Color, ColorStyle, Facet, ImageStyle, selectedFacet, Value } from "../../types";

interface Props {
  facet: Facet;
  value: Value;
  selectedFilters: selectedFacet[];
  onColorSelect: (color: ColorStyle | ImageStyle) => void;
  colorCodes: Color[];
}

export const ColorFilter: React.FC<Props> = ({ facet, value, selectedFilters, onColorSelect, colorCodes }) => {
  const getColor = (color: string): ColorStyle | ImageStyle => {
    const colorCode = colorCodes.find(colorCode => color === colorCode.name) as Color;

    if (color === "Multicolor") {
      return {
        id: color, backgroundImage: `url(${colorCode.code})`,
        backgroundSize: "cover"
      };
    }
    if (color === "White") {
      return {
        id: color, backgroundColor: colorCode.code,
        border: "1px solid grey"
      };
    }
    return { id: color, backgroundColor: colorCode.code };
  }

  return (
    <>
      {facet.type === "color" &&
        <div className="facet__option" key={value.value}>
          <label className="facet__option-wrapper">
            <button
              style={getColor(value.value)}
              className={classNames("facet__color",
                {
                  'facet__color--selected-color': selectedFilters.find(facet => {
                    return typeof facet.value !== 'string'
                      ? (facet.value).id === getColor(value.value).id
                      : null;
                  })
                }
              )}
              onClick={() => onColorSelect(getColor(value.value))}
            >
            </button>
            <div className="facet__value">{value.value}</div>
          </label>
          <div className="facet__count">({value.count})</div>
        </div>
      }
    </>
  )
}

