import { useRef, useEffect, useState } from 'react'
import TextInput from './TextInput';
import Button from './Button';
import Select from './Select';

export default function Form(props) {
    const {
        onChange,
        children,
        formValue,
        schema,
        useUrlSearchParamsOnChange,
        useUrlSearchParamsOnSubmit,
        browserValidation } = props
    const formRef = useRef(null);
    const [rerender, setRerender] = useState(0)

    const handleSubmit = (e => {
        e.preventDefault()

        if (formRef.current.checkValidity()) {

            const formData = extractFormData()

            if (useUrlSearchParamsOnSubmit) addSearchParamsToURL(formData.urlSearchParams)
            console.log('handleSubmit', formData)

        } else {
            setRerender(prev => prev + 1)
        }

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

    const renderComponents = (field) => {
        if (field.component === 'TextInput') return <TextInput key={field.id} rerender={rerender} {...field} />
        if (field.component === 'Button') return <Button key={field.id} {...field} />
        if (field.component === 'Select') return <Select key={field.id} {...field} />
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
            noValidate={!browserValidation}
            ref={formRef}
            onChange={handleChange}
            onSubmit={handleSubmit}>

            {schema.fields.map(field => {

                if (field.grid) {
                    return (
                        <div key={field.id} className={field.className}>
                            {field.grid.map(gridField => {
                                return renderComponents(gridField)
                            })}
                        </div>
                    )
                }
                return renderComponents(field)
            })}

            {/* {children} */}

        </form>
    )
}
