import { configure } from 'quasar/wrappers'

export default configure(() => {
  return {
    css: ['app.scss'],
    extras: ['material-icons'],
    build: {
      vueRouterMode: 'history'
    },
    devServer: {
      open: true
    },
    framework: {
      config: {
        brand: {
          primary: '#1a73e8',
          secondary: '#00bfa5',
          accent: '#673ab7',
          positive: '#2e7d32',
          negative: '#c62828',
          info: '#0288d1',
          warning: '#ed6c02'
        }
      },
      plugins: []
    }
  }
})
