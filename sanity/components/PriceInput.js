import React from 'react'
import PatchEvent, {set, unset} from 'part:@sanity/form-builder/patch-event'
import { func } from 'prop-types'

function createPatchFrom(value) {
    return PatchEvent.from(value === '' ? unset() : set(Number(value)))
}

const formatMoney = Intl.NumberFormat('es-MX', {style: 'currency', currency: 'MXN'}).format;


export default function PriceInput ({type, value, onChange, inputComponent}) {
    return (
        <div>
            <h5>{type.title} - {value ? formatMoney(value/ 100) : ''}</h5>
            <p>{type.description}</p>
            <input
                type={type.name}
                value={value}
                onChange={e => onChange(createPatchFrom(e.target.value))}
                ref={inputComponent}
            />
        </div>
    )
}

PriceInput.focus = function () {
    this._inputElement.focus()
}