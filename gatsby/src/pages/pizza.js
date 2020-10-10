import React from 'react'
import { graphql } from 'gatsby'

import PizzaList from '../components/PizzaList'

export default function PizzaPage ({data}) {
    return (<>
        <PizzaList pizzas={data.pizzas.nodes}/>
    </>);
}

export const query = graphql`
    query PizzaQuery {
        pizzas: allSanityPizza {
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