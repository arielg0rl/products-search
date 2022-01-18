import React from "react";
import classNames from "classnames";
import { Facet, selectedFacet, Value } from "../../types";

interface Props {
  facet: Facet;
  value: Value;
  selectedFilters: selectedFacet[];
  onMaterialSelect: (material: string) => void;
}

export const TextFilter: React.FC<Props> = ({ facet, value, selectedFilters, onMaterialSelect }) => {
  return (
    <>
      {facet.type === "text" &&
        <div className="facet__option">
          <label className="facet__option-wrapper">
            <button
              className={classNames("facet__box",
                { 'facet__box--selected': selectedFilters.find((facet) => facet.value === value.value) })}
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
    </>
  )
}