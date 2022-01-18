import React from 'react'
import { Item } from '../../types'

interface Props {
  items: Item[];
}

export const ProductsList: React.FC<Props> = ({ items }) => {
  const getDiscount = (oldPrice: number, newPrice: number[]) => {
    const discount = 100 - (newPrice[0]/ (oldPrice / 100));
    return `${Math.round(discount)}% OFF`;
  }
  return (
    <div className="ProductsList">
      <div className="ProductsList-container">
        <div className="ProductsList-wrapper">
          {items.map(item => (
            <div key={item.product_url} className="ProductsList-card">
            <div className="ProductsList-card-wrapper">
              <a
                href={item.product_url}
                target="_blank"
                rel="noreferrer"
              >
                <img src={item.image_url} alt="product" className="ProductsList-card__image"/>
              </a>
              {item.compare_at && (
                <div>
                  <div className="ProductsList-card__image-discount">
                    <div
                      className="ProductsList-card__image-discount-number"
                    >
                      {getDiscount(item.compare_at, item.price)}
                    </div>
                    <div className="ProductsList-card__image-discount-after"></div>
                  </div>
                  <div className="ProductsList-card__image-sale"></div>
                </div>
              )}
            </div>
              <a
                href={item.product_url}
                target="_blank"
                rel="noreferrer"
                className="ProductsList-card__title">
                  {item.title}
              </a>
              <div className="ProductsList-card__price-info">
                <div className="ProductsList-card__old-price">{item.compare_at && `$ ${item.compare_at}`}</div>
                <div className="ProductsList-card__new-price">$ {item.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductsList
