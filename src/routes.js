import App from './App.vue'
import Settings from './Settings.vue'
import Create from './Create.vue'
const NotFound = {
  template: '<p>Page not found</p>'
}
const About = {
  template: '<p>about page</p>'
}

export default {
  '/': App,
  '/about': About,
  '/create': Create,
  '/settings': Settings
}
