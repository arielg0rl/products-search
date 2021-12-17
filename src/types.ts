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
  backgroundColor: string,
  border?: string,
}

export interface ImageStyle {
  backgroundImage: string,
  backgroundSize: string,
}

export interface selectedFacet {
  type: 'color' | 'material' | 'price',
  value: string | ColorStyle | ImageStyle,
}
