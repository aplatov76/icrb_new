import { App } from '@/app/App'
import { ThemeProvider } from '@/app/providers/ThemeProvider'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { StoreProvider } from './app/providers/StoreProvider'

const container = document.getElementById('root') as Element
const root = createRoot(container)
root.render(
  <BrowserRouter>
    <StoreProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </StoreProvider>
  </BrowserRouter>
)
