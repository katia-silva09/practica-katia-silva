import { useState } from "react"

export const useToggle = (initialValues: boolean = false ) => {
  const [values, setValue] = useState (initialValues);

  const toggleValue = ()=>{

    setValue (!values)
  }
  return {
    values, toggleValue
  }
}