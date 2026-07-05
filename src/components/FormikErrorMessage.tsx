import React from 'react'

const FormikErrorMessage: React.FC<{ errors: any}> = ({ errors }) => {
  return (
    <div className="bg-secondary text-primary px-4 py-1 mt-2">
      {errors}
    </div>
  )
}

export default FormikErrorMessage