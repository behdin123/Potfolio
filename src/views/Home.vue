<template>
  <div class="home">
    <div id="image-dark-version-home" class="bg-img img">
      <h1 data-aos="fade-right" data-aos-duration="3000">Digital Content</h1>
      <h2 data-aos="fade-right" data-aos-duration="3000">eller webudvikling</h2>
      <h3 data-aos="fade-right" data-aos-duration="3000">lad os skabe det sammen</h3>
      
    </div>
    <div class="container Multimediedesigner first-mode">
      <div class="webmock">
        <img data-aos="fade-right" data-aos-duration="1000" data-aos-offset="400" class="first-img" src="../../../billeder/webmock.png" width="100%" height="auto">
        <img data-aos="fade-up" data-aos-duration="1000" data-aos-offset="40" class="second-img" src="../assets/PSD 10 (Desktop, Laptop, and Tablet).png" width="100%" height="auto">
      </div>
      <div class="txt h1 h2 first-txt" > 
            <h3 data-aos="fade-up" data-aos-duration="1000" >Hvad betyder det helt præcist?</h3>
            <h1 data-aos="fade-up" data-aos-duration="1000" >Multimediedesigner</h1>
            <p  data-aos="fade-up" data-aos-duration="1000" >Som en Multimediedesigner er jeg i stand til at komme ind på 
              alle niveauer af digital design, heriblandt webløsninger
              <strong>digitale brugeroplevelser (UX)</strong>, indholdsproduktion til digitale medier <strong>(content creation),</strong>
              <strong>frontend webudvikling</strong> samt <strong>ideudvikling og projektmanagement.</strong> 
            </p>
          <div id="uix" class="container">
              <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="100" class="ui-ux ui">
                  <div v-if="dark == false || dark == null" ><img src="../assets/icons/monitor.svg" width="100px" height="auto"></div>
                  <div v-else><img src="../assets/icons/monitor-dark-version.svg" width="100px" height="auto"></div>
                  <div><h2>User Interface (UI)</h2></div>
                  <div class="ui-x-txt">
                      <p>Skærme, websider, og visuelle ellementer som knapper og 
                      ikoner, som skaber <strong>interaktion</strong> mellem bruger og et produkt eller 
                      service befinder sig under <strong>UI kategorien.</strong>
                      </p>
                  </div>
              </div>
              <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300" class="ui-ux ux">
                  <div v-if="dark == false || dark == null"><img src="../assets/icons/ux.svg" width="80px" height="auto"></div>
                  <div v-else><img src="../assets/icons/ux-dark-version.svg" width="80px" height="auto"></div>
                  <div><h2>User Experience (UX)</h2></div>
                  <div class="ui-x-txt">
                          <p>At opfylde <strong>brugerens behov</strong>, er det vigtigste inden for 
                          <strong>UX verdenen</strong>. Kort sagt er det nødvendigt at skabe <strong>positive oplevelser</strong> for brugerne 
                          der holder dem <strong>loyal</strong> over for et produkt eller virksomheden.
                          </p>
                  </div>
              </div>
          </div>
      </div>
    </div>

    <div class="container min-concept flex-direction second-mode">
            <div data-aos="fade-right" data-aos-duration="2000" data-aos-offset="300" class="txt h1 h2 txt-box">
              <div>
                  <h3>Hvordan kan jeg skabe opmærksomhed og resultat for dig og din virksomhed?</h3>
                  <h1>Den gyldne trekant!</h1>
                  <p>Hvor stor del af dine <strong>kunder</strong> bruger de <strong>sociale medier</strong> dagligt? <br>
                    Hvordan finder dine kunder frem til dit <strong>webside</strong>? <br>
                    Hvor vigtigt er <strong>video content</strong> for din målgruppe? <br>
                  </p>
                  <p class="txt-two">Jeg har gennem min personlig erfaring fundet frem til 
                    det jeg kalder <br> 
                    <strong>det gyldne trekant</strong>, som består af 3 afgørende 
                    punkter der kan <br> 
                    medbringe succes til enhver virksomhed. 
                  </p>
              </div>
              <div class="btn-box">
                  <router-link to="/MIN-CONCEPT"><button class="btn">Se mere</button></router-link>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-duration="2000" data-aos-offset="300" class="gyldne-trekant image"><img src="../../../billeder/gyldne-trekant-(fin).jpg" width="100%" height="auto"></div>
    </div>

<div class="contain first-mode">
    <div class="informations h1">
      <div  data-aos="fade-up" data-aos-duration="2000" data-aos-offset="300" class="info">
        <img v-if="dark == false || dark == null" src="../assets/procent.png" width="150px" height="auto">
        <img v-else src="../assets/procent dark-version.png" width="150px" height="auto">
        <p>Af den danske befolkning mellem 16-89 år <strong>bruger de sociale medier</strong></p>
      </div>
      <div data-aos="fade-up" data-aos-duration="2000" data-aos-offset="300" class="info">
        <img v-if="dark == false || dark == null" src="../assets/SoMe.png" width="150px" height="auto">
         <img v-else src="../assets/SoMe dark-version.png" width="150px" height="auto">
        <p><strong>SEO og de Sociale medier</strong> er de 2 vigtigste ellementer for at få flere besøgende på din webside</p>
      </div>
      <div data-aos="fade-up" data-aos-duration="2000" data-aos-offset="300" class="info">
        <img v-if="dark == false || dark == null" src="../assets/Video.png" width="150px" height="auto">
        <img v-else src="../assets/Video-dark-version.png" width="150px" height="auto">
        <p><strong>90%</strong> af alle informationerne der fanges af den menneskellige hjerne er i form af visuelle content</p>
      </div>
    </div>
    <div class="btn-box" id="facts-btn">
       <router-link to="/MIN-CONCEPT"><button class="btn">Se mere</button></router-link>
    </div>
</div>


<div class="container website flex-direction">
            <div data-aos="fade-right" data-aos-duration="2000" data-aos-offset="300" class=" txt h1 h2 txt-box website-txt">
              <div>
                  <h3>Bruge for et nyt webside? eller opdateringer på din nuværende?</h3>
                  <h1>Det kan jeg sørge for!</h1>
                  <p class="txt-two">Gennem min uddannelse har jeg arbejdet med <strong>web-design</strong> og <strong>webudvikling</strong>, 
                    hvor jeg er i stand til at <strong>designe</strong> og <strong>strukturer</strong> en webside præcis som du ønsker det. <br> <br>
                    Ved hjælp af de forskellige kodesprog kan jeg udover design og strukturer også implementer 
                    forskellige ellementer, der øger <strong>interaktionen</strong> mellem brugerne og websiden.
                  </p>
              </div>
              <div class="btn-box">
                  <router-link to="/MIN-CONCEPT"><button class="btn">Se mere</button></router-link>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-duration="2000" data-aos-offset="300" class="code-lang image"><img src="../../../billeder/code lang ilustration b.jpg" width="100%" height="auto"></div>
</div>

<div class=" om-mig first-mode">
  <div data-aos="fade-right" data-aos-duration="2000" data-aos-offset="300" class="bussines-card"><img src="../assets/Artworks/large/visitcard (artwork).png" width="100%" height="100%"></div>
  <div class="om-mig-txt h1 h2 first-mode">
    <h1 data-aos="fade-up" data-aos-duration="2000" data-aos-offset="300">Behdin Bagheri</h1>
    <p data-aos="fade-up" data-aos-duration="2000" data-aos-offset="300">Jeg har bået i Danmark siden 2009. Efter mit gymnasiale uddannelse, som var HHX, 
      valgte jeg at studere videre på Multimediedesigner uddannelsen.
       Inden for mit uddannelse, intresserer mig mest for at arbejde med 
       <strong>content creation</strong>, <strong>webdesign</strong> og <strong>webudvikling</strong>.
    </p>
    <p data-aos="fade-up" data-aos-duration="2000" data-aos-offset="300">Content creation giver liv og styrke til ethvert virksomhed. <strong>Relevant og nyt content</strong> er
      ligeså vigtigt for en virksomhed, som <strong>blod for mennesket</strong>. Blod skal altid være frisk og  køre rundt i kroppen på den rigtige
      måde for at mennesket kan være sund og rask, og det samme gælder for en virksomhed, som skal have nyt og frisk content de kan 
      <strong>markedsføre</strong> sig med. 
    </p>
  </div>
</div>




  </div>
</template>

<script>

export default {
  
  name: 'Home',
  components: {
    
  },
  props: ['dark']
    
  
}
</script>

<style lang="scss" scoped>

@import '../css/style.scss';



  .img{
    background-image: url('../assets/startimg.png');
    h1{
      padding: 17vw 0 0 12%;
      margin: 0;
      font-size: 55px;
      text-align: left;
    }
    h2{
      padding: 0 0 0 12%;
      font-size: 55px;
      color: #000;
    }
    h3{
      color: #000;
      font-size: 22px;
      padding: 5px  0 0 12%;
    }
  }

  .Multimediedesigner{
    position: relative;
    background: #EAEAEA;
    padding-top: 110px;

    .webmock{
      .first-img{
      width: 28vw;
      height: auto;
      margin: 0 0 100px 40%;
      }
      .second-img{
        display: none;
      }
    }
    .txt{
      margin-right: 14%;
      width: 550px;
      display: flex;
      flex-direction: column;
      align-content: flex-end;
    }
      .ui-x-txt{
        width: 200px;
      }
      
      .ui-ux{
        display: flex;
        flex-direction: column;
        img{
          margin-top: 85px;
        }
      }
    }
    
    .min-concept{
      margin: 0 0 0 15%;
      padding-top: 110px;
      h1{
        margin-bottom: 30px;
      }
      .gyldne-trekant{
        width: 32vw;
        margin: 0 12% 110px 0;
      }
      .btn{
        margin-top: 103px;
      }
    }
    .txt-two{
      width: 480px;
        margin: 30px 0 0 0;
    }

.contain {
  display: flex;
  flex-direction: column;
  background: #EAEAEA;
  align-items: center;
  .btn{
    margin-bottom: 80px;
  }
    .informations{
      display: flex;
      justify-content: center;
      .info{
        width: 200px;
        margin: 80px 100px;
        display: flex;
        align-items: center;
        flex-direction: column;
        text-align: center;
      }
    }
  }

  .website{
    padding: 110px 0;
    .btn{
      margin-top: 177px;
    }
    h1{
      margin-bottom: 30px;
    }
    .code-lang{
      width: 27.5vw;
      margin-right: 12.7%;
    }
  }
  .website-txt{
    margin-left: 15%;
  }
  .txt{
      width: 562px;
  }
  .om-mig{
    margin: 0 0 124px 0;
    height: 467px;
    display: flex;
   .om-mig-txt{
     background: #EAEAEA;
     padding: 100px 12% 100px 135px;
     h1{
       margin-bottom: 30px;
     }
   }
   .bussines-card{
    width: 213%;
    height: 100%;
  }
  }

@media only screen and (max-width: 1380px){
  .bg-img{
    h1{
      padding-top: 19vw;
      font-size: 45px;
    }
    h2{
      font-size: 45px;
    }
    h3{
      font-size: 20px;
    }
  }
  .info{
        margin: 80px 5vw !important;
      }
}

@media only screen and (max-width: 1200px){
  .bg-img{
     h1{
      padding-top: 22vw;
    }
  }
  
}

@media only screen and (max-width: 1120px){
  .bg-img{
    h1{
      padding: 25vw 0 0 8%;
      font-size: 35px
    }
    h2{
      padding-left: 8%;
      font-size: 35px
    }
    h3{
      padding-left: 8%;
      font-size: 18px
    }
  }
  .container{
    flex-direction: column-reverse;
  }
  .flex-direction{
    flex-direction: column !important;
  }
  .webmock{
    .first-img{
      display: none;
    }
    .second-img{
      display: flex !important;
      width: 73%;
      margin: 50px auto 110px auto;
    }
  }
  .ui-ux{
    img{
      margin-top: 40px !important;
    }
    p{
      width: 300px;
    }
  }
  #uix{
    flex-direction: row;
    justify-content: space-between;
  }
  
  .om-mig{
    margin-bottom: 310px;
      .om-mig-txt{
      padding: 100px 7% !important;
      width: 85%;
      h1{
        padding: 0 !important;
      }
    }
  }
    #facts-btn{
      align-items: center;
      justify-content: center;
    }
    .first-txt{
      margin-left: 15%;
    }
  
  .txt-box{
    display: flex;
    flex-direction: column;
  }
  .bussines-card{
    width: 100vw !important;
    height: 100%;
  }
  .gyldne-trekant{
    width: 50% !important;
  }
  .code-lang{
    margin: 20px 15% 100px 15% !important;
    width: 50% !important;
  }
}

@media only screen and (max-width: 1020px){
    h1{
      padding-left: 5% !important;
    }
    h2{
      padding-left: 5% !important;
    }
    h3{
      padding-left: 5% !important;
    }
  }


@media only screen and (max-width: 940px){
  .bg-img{
    h1{
      padding-top: 28vw;
      font-size: 30px;

    }
    h2{
      font-size: 30px;
      
    }
    h3{
      font-size: 16px;
      
    }
  }
  .image{
    margin: 20px 15% 100px 15% !important;
    width: 73% !important;
  }
    .om-mig{
      flex-direction: column;
    }
    .om-mig-txt{
      width: auto !important;
    }
}

@media only screen and (max-width: 780px){
  .img{
    background-image: url('../assets/startimg(small-version).png');
    }
  .bg-img{
    background-position: right !important;
    h1{
      padding-top: 26vw;    
    }
    h2{
      font-size: 30px;
    }
    h3{
      font-size: 16px;
    }
  }
  .ui-ux{
    p{
      width: 200px;
    }
  }
  #facts-btn{
    justify-content: center !important;
  }
  .image{
    margin: 20px auto 100px auto!important;
  }
  .flex-direction{
    margin: 0;
  }
  .txt{
    margin: 0 auto;
  }
  .informations{
    flex-direction: row;
    .info{
        margin: 80px 2vw !important;
        img{
          width: 120px;
        }
      }
  }
  
}

@media only screen and (max-width: 660px){
  .bg-img{
    h1{
      padding-top: 30vw;
    }
  }
  .container{
    justify-content: left;
    .ui{
      margin-right: 5%;
    }
  }
  .txt{
    width: 491px !important;
    margin: 0 12%;
  }
  .concept-txt-box{
    flex-direction: column !important;
  }
  .btn-box{
    justify-content: flex-end;
  }
  .informations{
    flex-direction: column;
    .info{
        margin: 20px auto !important;
        }
    }
}

@media only screen and (max-width: 500px){
    h1{
      padding: 35vw 0 0 8% !important;
    }
    h2{
      padding-left: 8% !important;
    }
    h3{
      padding-left: 8% !important;
    }
    #uix{
    flex-direction: column;
  }
  .webmock{
    .second-img{
      width: 90%;
    }
  }
  .txt{
    width: 366px !important;
  }
  .ui-ux{
    p{
      width: 350px;
    }
  }

  .txt-two{
    width: 370px;
  }
  
  }

@media only screen and (max-width: 420px){
  .img{
    background-image: url('../assets/startimg(extrasmall-version).png') !important;
    }
    .bg-img{
    height: 600px !important;
    h1{
      padding-top: 40vw !important;
    }
  }
  .txt{
    margin: 0 7%;
    width: 366px !important;
  }
  .ux{
    align-items: flex-start !important;
  }
  .image{
    margin: 20px 5% 50px 5% !important;
    width: 90% !important;
  }
}

@media only screen and (max-width: 378px){
    .bg-img{
    h1{
      padding: 46vw 0 0 5% !important;
    }
    h2{
      padding-left: 5% !important;
      font-size: 25px !important;
    }
    h3{
      padding-left: 5% !important;
    }
  }
  .ui-ux{
    p{
      width: 300px;
    }
  }
  .txt{
    width: 90vw !important;
  }
  .txt-two{
    width: 90vw;
  }
}
</style>
