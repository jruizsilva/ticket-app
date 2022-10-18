import RouterPage from './pages/RouterPage'
import { BrowserRouter } from 'react-router-dom'
import { UiProvider } from './context/UiContext'
import { SocketProvider } from './context/SocketContext'

function TicketApp() {
  return (
    <UiProvider>
      <BrowserRouter>
        <SocketProvider>
          <RouterPage />
        </SocketProvider>
      </BrowserRouter>
    </UiProvider>
  )
}

export default TicketApp
