import { useEffect, useState } from 'react'
import ModalEvents from '../events/ModalEvents'

export function useModal() {
  const [title, setTitle] = useState<string>()

  useEffect(() => {
    ModalEvents.on('title', setTitle)
    return () => {
      ModalEvents.off('title', setTitle)
    }
  }, [])

  return { title }
}
