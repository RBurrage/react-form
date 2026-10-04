import React, { useEffect, useRef, useState } from 'react'

export default function TextInput({ className, header, body, footer, id, rerender }) {
    const inputRef = useRef(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (rerender) validate();
    }, [rerender]);

    function validate() {
        if (!body.element.attr.required) return false;

        if (inputRef.current.checkValidity()) setError(null)
        else setError(body.element.validate.msg)
    }

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
                onChange={validate}
                ref={inputRef}
                onInvalid={(e) => {
                    if (body.element.customValidity) e.target.setCustomValidity(body.element.customValidity.msg)
                }}
                onInput={(e) => {
                    e.target.setCustomValidity("")
                }} />

            {footer?.note &&
                <div className={footer.note.className}>{footer.note.text}</div>
            }
            {error && (<div className={body.element.validate.className}>{error}</div>
            )}
        </div>
    )
}
