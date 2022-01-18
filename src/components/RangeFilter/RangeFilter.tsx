import React, { useState } from "react";
import InputRange from "react-input-range";
import defaultClassNames from "../../default-class-names";
import { Facet, priceValues, Value } from "../../types";

interface Props {
  facet: Facet;
  value: Value;
  onPriceSelect: (v: priceValues) => void;
}

export const RangeFilter: React.FC<Props> = ({ facet, value, onPriceSelect }) => {
  const { name, type, values } = facet;
  const [rangeValue, setRangeValue] = useState({ min: 150, max: 400 });
  return (
    <>
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
                  setRangeValue({ min: value.min, max: value.max })
              }}
            />
          </section>
          <button
            type="button"
            className="facet__go-button"
            onClick={() => onPriceSelect(rangeValue)}
          >
            go
          </button>
        </div>}
    </>
  )
}