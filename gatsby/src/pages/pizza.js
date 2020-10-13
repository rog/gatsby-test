import React from 'react'
import { graphql } from 'gatsby'

import PizzaList from '../components/PizzaList'
import ToppingsFilter from '../components/ToppingsFilter'
import SEO from '../components/SEO'

export default function PizzaPage ({ data, pageContext }) {
    return (<>
        <SEO title={pageContext.topping ? `Pizzas with ${pageContext.topping}` : `All Pizzas`} />
        <ToppingsFilter />
        <PizzaList pizzas={data.pizzas.nodes} />
    </>);
}

export const query = graphql`
    query PizzaQuery($topping: [String]) {
        pizzas: allSanityPizza(filter: {
            toppings: {
                elemMatch: {
                    name: {
                        in: $topping
                    }
                }
            }
        }) {
            nodes {
                id
                name
                price
                image {
                    asset {
                        fixed(width: 200, height: 200) {
                            ...GatsbySanityImageFixed
                        }
                        fluid(maxWidth: 400) {
                            ...GatsbySanityImageFluid
                        }
                    }
                }
                slug {
                    current
                }
                toppings {
                    id
                    name
                }
            }
        }
    }
`