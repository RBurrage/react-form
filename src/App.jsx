import { useState, useEffect } from "react";
import Form from "./components/Form";

function App() {

  const [formDataSchema, setFormDataSchema] = useState(null);

  // useEffect(() => {
  //   fetch('/form.json')
  //     .then(res => res.json())
  //     .then(res => setFormDataSchema(res))
  // }, [])

  const formSchema = {
    id: 1234,
    //title: '',
    //config: {},
    fields: [
      {
        id: 4809328,
        className: 'grid grid-cols-1 md:grid-cols-2 gap-6 mb-6',
        grid: [
          {
            id: 1,
            component: 'TextInput',
            className: '',
            header: {
              label: {
                htmlFor: 'firstName',
                text: "First Name",
                className: "inline-block text-sm font-medium text-gray-700 mb-1",
                requiredIndicator: { className: "text-red-500", icon: " *" }
              }
            },
            body: {
              element: {
                attr: {
                  id: "firstName",
                  type: "text",
                  name: "firstName",
                  placeholder: "John",
                  minLength: 3,
                  required: true,
                  className: "w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                },
                validate: {
                  msg: 'Please enter a valid first name.',
                  className: 'text-red-500 ml-1'
                }
              }
            }
          },
          {
            id: 2,
            component: 'TextInput',
            className: '',
            header: {
              label: {
                htmlFor: 'lastName',
                text: "Last Name",
                className: "inline-block text-sm font-medium text-gray-700 mb-1",
                requiredIndicator: { className: "text-red-500", icon: " *" }
              }
            },
            body: {
              element: {
                attr: {
                  id: "lastName",
                  type: "text",
                  name: "lastName",
                  placeholder: "Doe",
                  minLength: 3,
                  required: true,
                  className: "w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                },
                validate: {
                  msg: 'Please enter a valid last name.',
                  className: 'text-red-500 ml-1'
                }
              }
            }
          },
        ]
      },
      {
        id: 903842,
        className: 'grid grid-cols-1 md:grid-cols-2 gap-6 mb-6',
        grid:
          [
            {
              id: 3,
              component: 'TextInput',
              className: '',
              header: {
                label: {
                  htmlFor: 'email',
                  text: "Email",
                  className: "inline-block text-sm font-medium text-gray-700 mb-1",
                  requiredIndicator: { className: "text-red-500", icon: " *" }
                }
              },
              body: {
                element: {
                  attr: {
                    id: "email",
                    type: "email",
                    name: "email",
                    placeholder: "johndoe@email.com",
                    pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}",
                    minLength: 3,
                    required: true,
                    className: "w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  },
                  validate: {
                    msg: 'Please enter a valid email.',
                    className: 'text-red-500 ml-1'
                  }
                }
              }
            },
            {
              id: 4,
              component: 'TextInput',
              className: '',
              header: {
                label: {
                  htmlFor: 'phone',
                  text: "Phone Number",
                  className: "inline-block text-sm font-medium text-gray-700 mb-1",
                  requiredIndicator: { className: "text-red-500", icon: " *" }
                }
              },
              body: {
                element: {
                  attr: {
                    id: "phone",
                    type: "tel",
                    name: "phone",
                    minLength: 13,
                    required: true,
                    placeholder: "(123)334-3333",
                    className: "w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  },
                  validate: {
                    msg: 'Please enter a valid phone number.',
                    className: 'text-red-500 ml-1'
                  }
                }
              }
            },
          ]
      },
      {
        id: 9,
        component: 'Select',
        className: 'mb-6',
        header: {
          label: {
            htmlFor: 'gender',
            text: "Gender",
            className: "inline-block text-sm font-medium text-gray-700 mb-1",
            requiredIndicator: { className: "text-red-500", icon: " *" }
          }
        },
        body: {
          element: {
            attr: {
              id: "gender",
              name: "gender",
              required: true,
              className: "w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            },
            options: [
              {
                id: 98420,
                value: "",
                text: "Select Gender"
              },
              {
                id: 98421,
                value: "male",
                text: "Male"
              },
              {
                id: 98423,
                value: "female",
                text: "Female"
              }
            ]
          }
        }
      },
      {
        id: 5,
        component: 'Button',
        body: {
          element: {
            text: "Submit Application",
            attr: {
              type: "submit",
              className: "px-6 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-lg transition-all duration-200 transform hover:scale-105"
            }
          }
        }
      }
    ]

  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-600 mb-2">Join Our Team </h1>
          <p className="text-gray-600">We're excited you're considering a career with us. Please fill out this form to apply.</p>
          <div className="mt-4 flex justify-center">
            <div className="w-24 h-1 bg-blue-500 rounded-full"></div>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6 md:p-8">

          {/* Buttons as children -- more than 1? */}
          {/* <Form onChange={setFormData} >
            <div className="flex justify-between">
              <button type="submit" className="px-6 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-lg transition-all duration-200 transform hover:scale-105">Submit</button>
              <button type="submit" className="px-6 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-lg transition-all duration-200 transform hover:scale-105">Next</button>
            </div> 
          </Form>*/}

          <Form schema={formSchema}></Form>

        </div>
      </div>
    </div>
  )
}

export default App;
