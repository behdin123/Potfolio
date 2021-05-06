<template>
    <footer>
        <div class="footer">
          <div>
            <h1>Lad os skabe resultater sammen!</h1>
            <div class="line"></div>
            <div class="kontakt">
                <h2>Kontakt mig</h2>
                <b>Skriv en mail eller send en SMS til mig</b>
            </div>
          </div>
          <div class="footer-info">
            <div class="mail">
              <b>behdin2010@gmail.com</b>
              <b>+45 53 52 52 39</b>
            </div>
            <div class="social-medier">
              <b>Find mig på det sociale medier:</b>
              <div class="footer-icon">
                <a href="https://www.linkedin.com/in/behdin-bagheri-21b893196/" target="_blank"><img id="first-icon" class="icon" src="../assets/icons/linkedin(footer).svg" width="23px" height="23px"></a>
                <a href="https://www.facebook.com/behdin.bagheri/" target="_blank"><img class="icon" src="../assets/icons/facebook-footer.svg" width="23px" height="23px"></a>
                <a href="https://www.instagram.com/behdin_b/" target="_blank"><img class="icon" src="../assets/icons/instagram-footer.svg" width="23px" height="auto"></a>
                <a href="https://www.youtube.com/channel/UCz2gJot02504RDa1tsBR1LA" target="_blank"><img class="icon" src="../assets/icons/youtube(footer).svg" width="30px" height="auto"></a>
              </div>
            </div>
          </div>
      </div>
    </footer>
</template>

<style lang="scss" scoped>
    

    .footer{
    background: #24353F;
    height: 350px;
    padding: 50px 12%;
    color: #D9C4A9;
    .line{
        content: "";
        background: #EAEAEA;
        height: 1px;
        width: 600px;
    }
    .kontakt{
      margin-top: 80px;
      h2{
        margin: 0 0 10px 0;
      }
      b{
        color: #EAEAEA;
        font-size: 13px;
      }
    }
    .footer-info{
      display: flex;
      margin-top: 50px;
      justify-content: space-between;
      .mail{
        display: flex;
        flex-direction: column;
        b{
          padding-bottom: 10px;
        }
      }
      .social-medier{
        display: flex;
        .footer-icon{
          display: flex;
          align-items: flex-end;
          height: 16px;
          margin-left: 20px;
          img{ padding: 0 8px;
          }
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
  }


  @media only screen and (max-width: 1120px){
    .footer{
      height: 450px !important;
      h1{
        font-size: 30px;
        margin-bottom: 15px !important;
      }
    }
    .line{
        width: 90% !important;
    }
    .footer-info{
      flex-direction: column;
      height: 120px;
    }
  }

  @media only screen and (max-width: 660px){
    .footer{
      height: 550px !important;
     
       h1{
        font-size: 25px;
        margin-bottom: 15px !important;
      }
      h2{
        font-size: 20px;
      }
      b{
        font-size: 14px !important;
      }
    }
    .social-medier{
      flex-direction: column;
      justify-content: space-between;
      height: 60px;
      margin-top: 50px;
      .footer-icon{
        margin-left: 0 !important;
      }
      #first-icon{
        padding-left: 0;
      }
    }
    .footer-info{
      height: 200px !important;
      }
  }

  @media only screen and (max-width: 378px){
    .footer{
      padding: 50px 10% !important;
      width: 80vw;
    }
  }
</style>