import { ChangeEvent,  useEffect, useState } from 'react'

export const useForm = (initialState: any, cb: Function = () => { }) => {
  const [fields, setFields] = useState(initialState)

  useEffect(() => {
    cb(fields)
  }, [fields])

  return [
    fields,
    function (ev: ChangeEvent<HTMLInputElement | undefined>): void {
      const field = ev.target.name
      const value = (ev.target.type === 'number') ? +ev.target.value : ev.target.value
      setFields((prevFields: any) => ({ ...prevFields, [field]: value }))
    },
    setFields
  ]
}