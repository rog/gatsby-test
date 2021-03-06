/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import SEO from '../components/SEO'
import PizzaOrder from '../components/PizzaOrder'

import formatMoney from '../utils/formatMoney'
import calculateOrderTotal from '../utils/calculateOrderTotal'
import calculatePizzaPrice from '../utils/calculatePizzaPrice'
import useForm from '../utils/useForm'
import usePizza from '../utils/usePizza'

import OrderStyles from '../styles/OrderStyles'
import MenuItemStyles from '../styles/MenuItemStyles'

export default function OrderPage({ data }) {
  const pizzas = data.pizzas.nodes

  const { values, updateValue } = useForm({
    name: '',
    email: '',
    mappleSyrup: '',
  })
  const {
    order,
    addToOrder,
    removeFromOrder,
    submitOrder,
    error,
    loading,
    message,
  } = usePizza({
    pizzas,
    values,
  })
  if (message) {
    return <p>Go Eat!</p>
  }
  return (
    <>
      <SEO title="Order Page" />
      <OrderStyles onSubmit={submitOrder}>
        <fieldset disabled={loading}>
          <legend>Your Info</legend>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={updateValue}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={updateValue}
          />
          <input
            type="text"
            name="mappleSyrup"
            id="mappleSyrup"
            value={values.mappleSyrup}
            onChange={updateValue}
            className="mappleSyrup"
          />
        </fieldset>
        <fieldset className="menu" disabled={loading}>
          <legend>Menu</legend>
          {pizzas.map((pizza) => (
            <MenuItemStyles key={pizza.id}>
              <Img
                width="50px"
                height="50px"
                fluid={pizza.image.asset.fluid}
                alt={pizza.name}
              />
              <div>
                <h2>{pizza.name}</h2>
              </div>
              <div>
                {['S', 'M', 'L'].map((size) => (
                  <button
                    type="button"
                    key={size}
                    onClick={() =>
                      addToOrder({
                        id: pizza.id,
                        size,
                      })
                    }
                  >
                    {size}:{formatMoney(calculatePizzaPrice(pizza.price, size))}
                  </button>
                ))}
              </div>
            </MenuItemStyles>
          ))}
        </fieldset>
        <fieldset className="order" disabled={loading}>
          <legend>Order</legend>
          <PizzaOrder
            order={order}
            removeFromOrder={removeFromOrder}
            pizzas={pizzas}
          />
        </fieldset>
        <fieldset disabled={loading}>
          <h3>
            Your Total is {formatMoney(calculateOrderTotal(order, pizzas))}
          </h3>
          <div>{error ? <p>Error: {error} </p> : ''}</div>
          <button type="submit" disabled={loading}>
            {loading ? 'Placing Order' : 'Order'}
          </button>
        </fieldset>
      </OrderStyles>
    </>
  )
}

export const query = graphql`
  query {
    pizzas: allSanityPizza {
      nodes {
        id
        name
        price
        image {
          asset {
            fluid(maxWidth: 100) {
              ...GatsbySanityImageFluid
            }
          }
        }
        slug {
          current
        }
      }
    }
  }
`
