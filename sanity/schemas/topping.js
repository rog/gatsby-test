import { FaPepperHot as icon } from 'react-icons/fa'

export default {
    name: 'topping',
    title: 'Toppings',
    type: 'document',
    icon,
    preview: {
        select: {
            name: 'name',
            vegetarian: 'vegetarian'
        },
        prepare: ({name, vegetarian}) => ({
            title: `${name} ${vegetarian ? '🥬' : '🍖'}`
        })
    },
    fields: [
        {
            name: 'name',
            title: 'Name of the topping',
            type: 'string',
            description: 'Whats the name of the topping?'
        },
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
            name: 'vegetarian',
            title: 'Vegetarian',
            type: 'boolean',
            description: 'veggie?',
            options: {
                layout: 'checkbox'
            }
        },
    ]
}