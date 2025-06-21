import './style.css'
import { createApp } from './main'

const { app,router } = createApp()

// app.mount('#app')
router.isReady().then(() => {
  app.mount('#app')
})
