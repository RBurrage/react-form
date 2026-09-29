import React from 'react'

export default function TextInput({ className, header, body, footer, id }) {

    return (
        <div key={id} className={className}>

            {header?.label &&
                <label
                    htmlFor={header.label.htmlFor}
                    className={header.label.className}>
                    {header.label.text}
                    <span className={header.label.requiredIndicator.className}>{header.label.requiredIndicator.icon}</span>
                </label>}

            <input {...body.element.attr}
                onInvalid={(e) => {
                    if (body.element.customValidity) e.target.setCustomValidity(body.element.customValidity.msg)
                }}
                onInput={(e) => {
                    e.target.setCustomValidity("")
                }} />

            {footer?.note &&
                <div className={footer.note.className}>{footer.note.text}</div>
            }
        </div>
    )
}
