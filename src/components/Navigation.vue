<template>
  <div class="navbar" >
    <div class="logo">
      <router-link to="/">
        <img v-if="dark == false || dark == null"  class="logo-img" src="../assets/final-logo-light.png" width="90px" height="90px"/>
        <img v-else class="logo-img" src="../assets/Behdin Bagheri logo (PNG).png" width="90px" height="90px"/>
      </router-link>
    </div>
    <div class="justify">
      <div class="navbar-links">
        <router-link to="/MIN-CONCEPT">Mit Koncept</router-link>
        <router-link to="/VIDEO">Video</router-link>
        <router-link to="/ART-WORKS">Art Works</router-link>
        <router-link to="/OM-MIG">Om Mig</router-link>
      </div>
    </div>
    <div class="navbar-others">
        <label class="switch">
        <input v-on:click="changeTitle" type="checkbox" v-model="dMode" />
        <span class="slider round"></span>
      </label>
      <div class="nav-icons">
        <div class="line"></div>
          <a v-if="dark == false || dark == null" href="https://www.instagram.com/behdin_b/" target="_blank"><img class="icon" src="../assets/icons/instagram(nav).svg" width="23px" height="23px"></a>
          <a v-else href="https://www.instagram.com/behdin_b/" target="_blank"><img  class="icon" src="../assets/icons/instagram-nav-dark-version.svg" width="23px" height="23px"></a>

          <a v-if="dark == false || dark == null" href="https://www.facebook.com/behdin.bagheri/" target="_blank"><img  class="icon facebook" src="../assets/icons/facebook(nav).svg" width="23px" height="23px"></a>
          <a v-else href="https://www.facebook.com/behdin.bagheri/" target="_blank"><img class="icon facebook" src="../assets/icons/facebook-nav-dark-version.svg" width="23px" height="23px"></a>
        <div class="line"></div>
      </div>
      <img v-if="dark == false || dark == null" class="icon" src="../assets/icons/world.svg" width="23px" height="23px">
      <img v-else class="icon" src="../assets/icons/world-nav-dark-version.svg" width="23px" height="23px">
      <div class="toggel-btn">
      <img v-if="dark == false || dark == null" class="icon toggle-menu" src="../assets/toggel-menu.svg" width="23px" height="23px">
      <img v-else class="icon toggle-menu" src="../assets/toggel-menu dark-version.svg" width="23px" height="23px">
    </div>
    </div>
  </div>
</template>

<script>

// dark mode
export default {
  component: {
    
  },
  props: {
      title: {
        type: Boolean,
        required: false
      },
      dark: {}
    },
  data() {
    return {
      dMode: this.$props.dark
    }
  },
  methods: {
    
        changeTitle() {
          console.log("test")
          this.$emit('changeTitle', this.dMode = !this.dMode );
       
    
      },
    },

  // menu mobile version
   mounted() {
        const burger = document.querySelector('.toggel-btn');
        const nav = document.querySelector('.justify');

        console.log(burger)
        burger.addEventListener('click', () => {
          nav.classList.toggle('show');
          if (nav.matches('.show')) {
            nav.classList.remove("end")
             nav.style.setProperty("display", "flex", "important");
          }
          else {
             nav.classList.add("end")
             setTimeout(() => {
              nav.style
              .setProperty("display", "none", "important");
             }, 1000);
          }
        });

        const navLinks = document.querySelectorAll(".justify a");
        const logo = document.querySelector(".logo");
        navLinks.forEach(n => {
          n.addEventListener("click", () => {
            nav.classList.toggle("show");
              if (nav.classList.toggle("show")) {
              nav.classList.toggle("show");
              nav.style.setProperty("display", "none", "important");
            }
          })
        });
          logo.addEventListener("click", () => {
            nav.classList.toggle("show");
              if (nav.classList.toggle("show")) {
              nav.classList.toggle("show");
              nav.style.setProperty("display", "none", "important");
            }
          });
   }
  
}
 

</script>

<style scoped lang="scss">
@import url('https://use.fontawesome.com/releases/v5.8.1/css/all.css');
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo{
      margin-left: 5%;
  }
  .navbar-links {
    display: flex;
    margin-left: 115px;
    a {
      font-family: Arial, Helvetica, sans-serif;
      padding: 0 3vw;
      font-size: 14px;
      text-decoration: none;
      color: #000;
      letter-spacing: 0.5px;
    }
  }
  .toggel-btn{
    display: none;
  }

  a:hover{
    color: #D9C4A9 !important;
  }
  
  .navbar-others{
      margin-right: 5%;
      display: flex;
      align-items: center;
      label{
          margin-right: 15px;
      }
      .nav-icons{
        display: flex;
      }
      .icon{
          margin-left: 15px;
      }
      .toggle-menu{
        margin-right: 0;
        cursor: pointer;
      }
      .facebook{
          margin: 0 15px;
      }
      .line{
          content: "";
          height: 20px;
          width: 1px;
          background: #5A081E;
      }
  }
}



.icon:hover{
opacity: 0.5;
}
.icon:visited{
opacity: 0.5;
}
.icon:active{
opacity: 0.5;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #24353F;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #D9C4A9;
}

input:focus + .slider {
  box-shadow: 0 0 1px #D9C4A9;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}


@media only screen and (max-width: 1120px){
  #nav{
    .line{
      height: 18px;
    }
    .navbar-links{
      margin-left: 0;
    }
    .nav-icons{
        display: none;
      }
    .icon{
      width: 20px;
    }
    a{
      font-size: 12px;
    }
  }
}

@media only screen and (max-width: 780px){
  .justify{
    width: 100%;
    height: 450px;
    top: 130px;
    position: absolute;
    display: none !important;
    justify-content: center;
    padding: 80px 0 0 0;
    background: #24353F !important;
    animation-name: toggleMenu;
    animation-duration: 1s;
  }


  .show{
    animation-name: toggleMenu;
    animation-duration: 1s;
  }
  .end{
    animation-name: toggleMenuEnd;
    animation-duration: 1s;
  }

  @keyframes toggleMenu {
  from {opacity: 0; height: 50px;}
  to {opacity: 1; height: 450px;}
  }
    @keyframes toggleMenuEnd {
  from {opacity: 1; height: 450px;}
  to {opacity: 0; height: 50px; }
  }

  .navbar-links{
    flex-direction: column;
    text-align: center;
    
    a{
      padding-bottom: 80px !important;
      color: #EAEAEA !important; 
      font-size: 16px !important;
    }
  }
  
  .toggel-btn{
    display: flex !important;
  }
  .icon{
    margin: 0 15px;
  }
}

@media only screen and (max-width: 525px){
  .logo-img{
    width: 75px;
    height: 75px;
  }
}

@media only screen and (max-width: 378px){
  .switch{
    display: none;
  }
}
</style>