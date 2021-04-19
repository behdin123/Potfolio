<template>
  <div class="navbar">
    <div class="logo">
      <router-link to="/">
        <img src="../../../billeder/final-logo.png" width="90px" height="90px"/>
      </router-link>
    </div>
    <div class="navbar-links">
      <router-link to="/MIN CONCEPT">MIN KONCEPT</router-link>
      <router-link to="/VIDEO">VIDEO</router-link>
      <router-link to="/ART WORKS">ART WORKS</router-link>
      <router-link to="/OM MIG">OM MIG</router-link>
    </div>
    <div class="navbar-others">
      <label class="switch">
        <input type="checkbox" />
        <span class="slider round"></span>
      </label>
      <div class="nav-icons">
        <div class="line"></div>
          <img class="icon" src="../../../icons/instagram(nav).svg" width="23px" height="23px">
          <img class="facebook" src="../../../icons/facebook(nav).svg" width="23px" height="23px">
        <div class="line"></div>
      </div>
      <img class="icon" src="../../../icons/world.svg" width="23px" height="23px">
      <div class="toggel-btn">
      <img class="icon toggle-menu" src="../assets/toggel-menu.svg" width="23px" height="23px">
    </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo{
      margin-left: 5%;
  }
  .navbar-links {
    display: flex;
    margin-left: 95px;
    a {
      font-family: Arial, Helvetica, sans-serif;
      padding: 0 3vw;
      font-size: 14px;
      text-decoration: none;
      color: #000;
    }
  }
  .toggel-btn{
    display: none;
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
  .navbar-links{
    display: none !important;
  }
  .toggel-btn{
    display: flex !important;
  }
  .icon{
    margin: 0 15px;
  }
}

@media only screen and (max-width: 378px){
  .switch{
    display: none;
  }
}
</style>