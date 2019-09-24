// <template>
// <nav>
//  <RouterLink
//             v-for="route in links"
//             :key="route.name"
//             :to="{ name: route.name || route.meta.defaultName }"
//             exact
//           >
//             {{ route.meta.displayName }}
//           </RouterLink>
// </nav
// </template>

// <script>
// import routes from '@/routes'
// export default {
//   name: 'AppHeader',
//   data () {
//     return {
//       routes
//     }
//   },
//   computed: {
//     links () {
//       return this.routes.filter(route => route.meta.displayName)
//     }
//   }
// }
// </script>

// <style>

// </style>
