import { MdLocalPizza as icon } from 'react-icons/md'

import PriceInput from '../components/PriceInput'

export default {
    name: 'pizza',
    title: 'Pizzas',
    type: 'document',
    icon,
    preview: {
        select: {
            title: 'name',
            media: 'image',
            topping0: 'toppings.0.name',
            topping1: 'toppings.1.name',
            topping2: 'toppings.2.name',
            topping3: 'toppings.3.name',
        },
        prepare: ({title, media, ...toppings}) => {
            return {
                title,
                media,
                subtitle: Object.values(toppings).filter(Boolean).join(', ')
            }
        }
    },
    fields: [
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options : {
                source: 'name',
                maxLength: 100
            }
        },
        {
            name: 'name',
            title: 'Pizza Name',
            type: 'string',
            description: 'Name of the pizza'
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
            inputComponent: PriceInput,
            description: 'Price of the pizza in cents',
            validation: Rule => Rule.min(1000).max(50000)
        },
        {
            name: 'toppings',
            title: 'Toppings',
            type: 'array',
            of: [{
                type: 'reference',
                to: [{
                    type: 'topping'
                }]
            }]
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        }
    ]
}