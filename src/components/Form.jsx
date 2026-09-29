import { useRef, useEffect } from 'react'
import TextInput from './TextInput';
import Button from './Button';

export default function Form(props) {
    const {
        onChange,
        children,
        formValue,
        schema,
        useUrlSearchParamsOnChange,
        useUrlSearchParamsOnSubmit } = props
    const formRef = useRef(null);

    const handleSubmit = (e => {
        e.preventDefault()
        const formData = extractFormData()

        if (useUrlSearchParamsOnSubmit) addSearchParamsToURL(formData.urlSearchParams)

        console.log('handleSubmit', formRef.current, formData)
    })

    const handleChange = (e => {
        const formData = extractFormData()

        if (onChange) onChange(formData)

        if (useUrlSearchParamsOnChange) addSearchParamsToURL(formData.urlSearchParams)
        // console.log('handleChange', formRef.current, formData)
    })

    const extractFormData = () => {
        const objectData = Object.fromEntries(new FormData(formRef.current))
        const urlSearchParams = new URLSearchParams(objectData).toString()

        return { objectData, urlSearchParams }
    }

    const addSearchParamsToURL = (urlParams) => {
        window.history.pushState(null, '', `?${urlParams}`)
    }

    const addDataToForm = (paramsObject) => {
        const formElem = document.querySelectorAll('[name]')
        formElem.forEach(elem => {
            if (paramsObject[elem.name]) elem.value = paramsObject[elem.name]
        })
    }

    useEffect(() => {
        if (useUrlSearchParamsOnChange || useUrlSearchParamsOnSubmit) {
            const params = new URLSearchParams(window.location.search)
            const paramsObject = Object.fromEntries(params.entries())
            console.log('paramsObject', paramsObject);

            addDataToForm(paramsObject);
        }
        if (formValue) addDataToForm(formValue)
    }, [useUrlSearchParamsOnChange, useUrlSearchParamsOnSubmit, formValue])

    return (
        <form
            ref={formRef}
            onChange={handleChange}
            onSubmit={handleSubmit}>

            {schema.fields.map(field => {
                if (field.component === 'TextInput') return <TextInput key={field.id} {...field} />
                if (field.component === 'Button') return <Button key={field.id} {...field} />
            })}

            {/* {children} */}

        </form>
    )
}
