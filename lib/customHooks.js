import { useState } from 'react'

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue)

  const handleChange = (e) => setValue(e.target.value)
  const reset = () => setValue(initialValue)

  return {
    value,
    onChange: handleChange,
    reset
  }
}

export { useFormInput }
