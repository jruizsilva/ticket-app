import { useContext, useEffect } from 'react'
import { UiContext } from '../context/UiContext'

export const useShowMenu = show => {
  const { showMenu, hideMenu } = useContext(UiContext)

  useEffect(() => {
    if (show) {
      showMenu()
    } else {
      hideMenu()
    }
  }, [show, hideMenu, showMenu])
}
