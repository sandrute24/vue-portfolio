<template>
<div>
  <AppHeader />
  <RouterView />
  <Footer></Footer>
</div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import Footer from '@/components/Footer'


export default {
  name: 'App',
  components: {
    AppHeader,
    Footer,
  }
}
</script>

<style>
 body {
    background-color: #EEEFF3;
    font-family: 'Open Sans';
    margin: 0;
  }
  h1 {
    font-size: 36px;
    font-weight: 600;
    }
  
  h5 {
    font-size: 18px;
    font-weight: 600;
  }
  a {
    font-size: 16px;
    font-weight: 400;
  }
  /* @font-face {
    font-family: sans-serif;
    src: url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700');
  } */

</style>
