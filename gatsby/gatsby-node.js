import { promises } from 'fs'
import path from 'path'

async function turnPizzasIntoPages ({graphql, actions}) {
    const PizzaTemplate = path.resolve('./src/templates/Pizza.js')
    const { data } = await graphql(`
        query {
            pizzas: allSanityPizza {
                nodes {
                    slug {
                        current
                    }
                }
            }
        }
    `)
    data.pizzas.nodes.forEach(pizza => {
        actions.createPage({
            path: `pizza/${pizza.slug.current}`,
            component: PizzaTemplate,
            context: {
                rog: 'it\'s cool',
                slug: pizza.slug.current
            }
        })
    })
}

async function turnToppingsIntoPages ({graphql, actions}) {
    const ToppingTemplate = path.resolve('./src/pages/pizza.js')
    const { data } = await graphql(`
        query {
            toppings: allSanityTopping {
                nodes {
                    name
                    id
                }
            }
        }
    `)
    data.toppings.nodes.forEach((topping) => {
        actions.createPage({
            path: `topping/${topping.name}`,
            component: ToppingTemplate,
            context: {
                topping: topping.name,
                toppingRegex: `/${topping.name}/i`
            }
        })
    })
}

export async function createPages (params) {
    await Promise.all([
        turnPizzasIntoPages(params),
        turnToppingsIntoPages(params)
    ])
}
