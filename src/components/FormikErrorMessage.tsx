import React from 'react'

const FormikErrorMessage: React.FC<{ errors: any}> = ({ errors }) => {
  return (
    <div className="text-destructive mt-1 text-sm font-['Ovo'] font-semibold">
      {errors}
    </div>
  )
}

export default FormikErrorMessage