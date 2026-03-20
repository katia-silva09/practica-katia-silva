import { useToggle } from "./hooks/useToggle"

export const StatusToggle = () => {
  const {values: isOnline, toggleValue} = useToggle(false)



  return (

    <button onClick={toggleValue}
      className={`text-white px-4 py-2 rounded ${isOnline ? "bg-green-500" : "bg-red-500"}`}>
      {isOnline ? "En linea" : "Desconocido"}
    </button>
  )
}
