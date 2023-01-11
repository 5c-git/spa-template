import { ROUTES } from '../../../public/urlapp.js'

declare global {
  interface Window {
    routes5: typeof ROUTES
  }
}

export {}