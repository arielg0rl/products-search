import React from "react";
import { Color, ColorStyle, Facet, ImageStyle, priceValues, selectedFacet, Value } from "../../types";
import { ColorFilter } from "../ColorFilter/ColorFilter";
import { RangeFilter } from "../RangeFilter/RangeFilter";
import { TextFilter } from "../TextFilter/TextFilter";

interface Props {
  facet: Facet;
  value: Value;
  selectedFilters: selectedFacet[];
  onMaterialSelect: (material: string) => void;
  onColorSelect: (color: ColorStyle | ImageStyle) => void;
  onPriceSelect: (v: priceValues) => void;
  colorCodes: Color[];
}

export const FilterTypes: React.FC<Props> = ({
  facet,
  value,
  selectedFilters,
  onMaterialSelect,
  onColorSelect,
  onPriceSelect,
  colorCodes,
}) => {
  return (
    <div>
      {facet.type === 'text' && <TextFilter facet={facet} value={value} selectedFilters={selectedFilters} onMaterialSelect={onMaterialSelect} />}
      {facet.type === 'color' && <ColorFilter facet={facet} value={value} selectedFilters={selectedFilters} onColorSelect={onColorSelect} colorCodes={colorCodes} />}
      {facet.type === 'range' && <RangeFilter facet={facet} value={value} onPriceSelect={onPriceSelect} />}
    </div>
  )
}