import React from 'react'

export default function Button({ body }) {
    return (
        <button {...body.element.attr}>{body.element.text}</button>
    )
}
