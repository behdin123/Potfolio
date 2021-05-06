<template>

  <div id="app" :class="{'theme-dark': dark}">
    <div id="nav">
      <Navigation v-bind:dark="dark" v-on:changeTitle="switchm($event)" />
    </div>
    
    <router-view :dark="dark"/>

    <Footer/>
    
    
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import Footer from '@/components/Footer.vue';
import './js/lightbox-plus-jquery.min.js';

export default {
 
  name: 'App',
  components: {
    'Navigation' :Navigation,
    'Footer' :Footer,
   // 'Home' :Home,
    },
  
  data() {

    return {
       dark: false,
   
    }
  },
  //dark mode
  methods: {     
      switchm: function(updatedTitle){
        this.dark = updatedTitle;
      },
    
    
      dMode () {
        this.darkMode = !this.darkMode      
         console.log("dark ", this.darkMode)
      }
  },

  watch: {
    dark () {
    
      localStorage.setItem("dark",this.dark);
    }
  },
  created () {
    this.dark = JSON.parse(localStorage.getItem("dark"));
  }
   
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
    &.theme-dark{ 
      .img{
        h1{
          b{
            color: #CC9F00;
          }
        }
      }
        .line{
          background: #D9C4A9;
        }
      .navbar-links{
            a{
               color: #f0f0f0 !important;
            }
          }
      #image-dark-version-home{
        background-image: url('./assets/startpage dark mode.png');
      }
      #min-concept-darkversion-image{
         background-image: url('./assets/concept bg dark-version.jpg');
      }
      #video-dark-version-image{
        background-image: url('./assets/video bg dark-version.jpg') !important;
      }
      #Art-works-dark-version-image{
         background-image: url('./assets/art-work bg dark-version.png');
      }
     .btn{
      background: #D9C4A9;
      color: #24353F;
     }
      .btn:hover{
      background: transparent;
      border: solid 3px #D9C4A9;
      color: #D9C4A9;
     }
      background: #121212 !important;
      .bg-img{
        h1, h2, h3{
          color: #f0f0f0;
        }
     }
    .first-mode{
      background: #292929 !important;
    }
    .second-mode{
      background: #121212 !important;
    }
    h1{
      color: #D9C4A9;
    }
    h2, h3{
      color: #eaeaeadc;
    }
    p, b{
      color: #eaeaeac2;
    }

    .footer{
      background: #121a1f;
    }
    @media only screen and (max-width: 780px){
      #image-dark-version-home{
        background-image: url('./assets/startimg(small-version) dark-version.png') !important;
      }
      #min-concept-darkversion-image{
         background-image: url('./assets/concept bg(small-version) dark-version.jpg') !important;
      }
      #video-dark-version-image{
        background-image: url('./assets/video bg(small) dark-version.jpg') !important;
      }
       #Art-works-dark-version-image{
         background-image: url('./assets/art-work bg(small) dark-version.png') !important;
      }
      .justify{
        background: #292929 !important;
      }
    }
    @media only screen and (max-width: 500px){
      #min-concept-darkversion-image{
        background-image: url('./assets/concept bg(extrasmall-version) dark-version.jpg') !important;
      }
    }
    @media only screen and (max-width: 420px){
      #image-dark-version-home{
        background-image: url('./assets/startimg(extrasmall-version) dark-version.png') !important;
      }
        #Art-works-dark-version-image{
         background-image: url('./assets/art-work bg(ex-small) dark-version.png') !important;
      }
    }
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
