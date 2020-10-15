import Img from 'gatsby-image'
import React from 'react'
import MenuItemStyles from '../styles/MenuItemStyles'
import calculatePizzaPrice from '../utils/calculatePizzaPrice'
import formatMoney from '../utils/formatMoney'

export default function PizzaOrder({ order, pizzas, removeFromOrder }) {
  return (
    <>
      <p>You hace {order.length} items in your order!</p>
      {order.map((singleOrder, index) => {
        const pizza = pizzas.find((p) => p.id === singleOrder.id)
        return (
          <MenuItemStyles key={`${index}-${singleOrder.id}`}>
            <Img fluid={pizza.image.asset.fluid} />
            <h2>{pizza.name}</h2>
            <p>
              {formatMoney(calculatePizzaPrice(pizza.price, singleOrder.size))}
              <button
                type="button"
                className="remove"
                title={`Remove ${singleOrder.size} ${pizza.name} from order`}
                onClick={() => removeFromOrder(index)}
              >
                &times;
              </button>
            </p>
          </MenuItemStyles>
        )
      })}
    </>
  )
}
