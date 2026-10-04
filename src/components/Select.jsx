import React from 'react'

export default function Select({ className, header, body, footer, id }) {

    return (
        <div key={id} className={className}>

            {header?.label &&
                <label
                    htmlFor={header.label.htmlFor}
                    className={header.label.className}>
                    {header.label.text}
                    <span className={header.label.requiredIndicator.className}>{header.label.requiredIndicator.icon}</span>
                </label>}

            <select {...body.element.attr}>
                {body.element.options.map(option => (
                    <option key={option.id} value={option.value}>{option.text}</option>
                ))}
            </select>

            {footer?.note &&
                <div className={footer.note.className}>{footer.note.text}</div>
            }
        </div>
    )
}
