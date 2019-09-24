<template>
  <div class="contacts">
    {{ contacts }}
  </div>
</template>

<script>
export default {
  name: 'contacts',
  data () {
    return {
      contacts: []
    }
  },
  async beforeRouteEnter (to, from, next) {
    const response = await fetch('http://jsonplaceholder.typicode.com/posts'
    )
    const contacts = await response.json()
    next(vm => {
      vm.contacts = contacts
    })
  }
}
</script>

<style>
</style>