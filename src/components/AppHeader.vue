<template>
<header class='app-header'>
    <nav class="main-navigation">
        <ul class='header-ul'>
            <li class="header-li">
            <RouterLink class="link-color"
            v-for="route in routes"
            :key="route.name"
            :to="{ name: route.name || route.meta.defaultName }"
            exact
            >
            {{ route.meta.displayName}}
            </RouterLink>
            </li>
        </ul>
    </nav>
    <div class="name-style">
        <h1>SHAY MICHELLE</h1>
        <h5>PORTFOLIO</h5>
        </div>
</header>

</template>

<script>
import routes from '@/routes'

export default {
  name: 'AppHeader',
  data() {
      return {
          routes
      }
  },
}

</script>

<style>
.app-header {
    height: 543px;
    background-color:#3252E5;
}

.header-ul {
    text-align: right;
    list-style-type: none;
    color: white;
    text-decoration: none;

}
.name-style {
    text-align: center;
    padding: 150px 0;
    color: white;
}

a:link {
    text-decoration: none;
    color: white;
}

.link-color {
    color: white;
}

.router-link-exact-active {
    color:#37E9B8;
}

.main-navigation {
    padding-top: 30px;
    padding-right: 30px;
    word-spacing: 20px;
}
</style>
