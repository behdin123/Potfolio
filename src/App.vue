<template>

  <div id="app">
    <div id="nav">
      <Navigation/>
    </div>
    
    <router-view/>

    <Footer/>
    
    
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import Footer from '@/components/Footer.vue'


export default {
  name: 'App',
  components: {
    'Navigation' :Navigation,
    'Footer' :Footer,
    },
  
  data() {
    return {
      
    }
  },
}
</script>

<style lang="scss">

body{
  margin: 0;
  background: #F4F4F4;
}

#app {
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  h1{
    font-weight: 700;
    margin: 0;
  }
  h2{
    font-weight: 600;
  }
  h3{
    font-weight: 700;
  }
  p{
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 500;
  }

  .bg-img{
    width: 100%;
    height: 100vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    
  }
}

#nav {
  padding: 15px 0 0 0;
  z-index: 2 !important;
  position: absolute;
  width: 100%;

  a {
    font-weight: bold;
  }
}


</style>
