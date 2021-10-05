import { ChangeEvent, useEffect, useState } from 'react'

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



export const useOnScreen = (options: {}) => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState<any>(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting)
      console.log(visible, 'observer');

    }, options)
    if (ref) {
      observer.observe(ref)
    }
    return () => {
      if (ref) {
        observer.unobserve(ref)
      }
    }
  }, [ref, options])
  return [setRef, visible]
}