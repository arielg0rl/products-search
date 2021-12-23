export interface Item {
  title: string,
  image_url: string,
  price: number[],
  compare_at: number,
  product_url: string,
}

export interface Facet {
  name: string,
  type: string,
  values: Value[]
}

export interface Value {
  value: string,
  count?: number,
}

export interface Color {
  name: string,
  code: string,
}

export interface ColorStyle {
  id: string,
  backgroundColor: string,
  border?: string,
}

export interface ImageStyle {
  id: string,
  backgroundImage: string,
  backgroundSize: string,
}

export interface selectedFacet {
  type: 'color' | 'material' | 'range',
  value: string | ColorStyle | ImageStyle,
}

export interface priceValues {
  min: number,
  max: number,
}
