<template>
  <div class="Min-concept">


    <div class="bg-img img">
      <h1>Den <b>Gyldne</b> Trekant</h1>
    </div>
    <div class="titel h1 h2">
      <div>
        <h3>Et helt nyt concept som kan udføre mirakler</h3>
      </div>
      <div>
        <h1>Øg virksomhedens drift <br> med de 3 afgørende punkter! </h1>
      </div>
    </div>
    <div class="container h1 h2">
      <div class="txt">
        <p>Den stærkeste form for <strong>visuelt content</strong> er uden tvivl videoer, da det fanger 
          større opmærksomhed end de andre former for content. <strong>90%</strong> af informationerne der 
          sendes til hjernen er visuelle og kan gennemskues <strong>60.000 gange</strong> hurtigere end tekst. 
          Søgemaskiner som <strong>Google</strong> elsker video indhold og derfor vil de også påvirke din hjemmesides 
          <strong>SEO</strong> positivt. Derudover vil videoer også skabe en direkte og <strong>personlig forbindelse</strong> mellem 
          virksomheden og kunderne. 
        </p>
      </div>
      <div>
        <img src="../../../icons/Video.svg" width="200px" height="auto">
      </div>
    </div>

    <div class="line"></div>

    <div class="container h1 h2">
      <div class="txt">
        <p>De <strong>sociale medier</strong> er fyldt med <strong>potentielle kunder</strong> for din virksomhed og produkter. 
          Man kan sige at de sociale medier er kundernes <strong>første destination</strong>, hvor de bruger meget af 
          deres hverdags tid på. At vælge de rigtig <strong>strategier</strong> på de sociale medier er meget vigtigt, 
          for at kunne tiltrække de potentielle kunder til at blandt andet <strong>besøge din website</strong> og fortage 
          køb af dine produkter eller services. At producere <strong>de rigtige content</strong> og til den rette målgruppe 
          er blandt de vigtige felter inden for den professionelle <strong>SoMe verdenen</strong>.
        </p>
      </div>
      <div>
        <img src="../../../icons/SoMe.svg" width="200px" height="auto">
      </div>
    </div>

    <div class="line"></div>

      <div class="container h1 h2">
      <div class="txt">
        <p>Den <strong>endelige destination</strong> for kunderne skal helst ende i din <strong>website</strong>, hvor der er mulighed for 
          køb af produkter eller services fra brugerne. En veldesignet og <strong>velstruktureret website</strong> er nødvendigt 
          for at kunne få gode resultater. Udover design og struktur af websitet, skal der være en god <strong>brugeroplevelse</strong> 
          over hjemmesiden. En god brugeroplevelse <strong>(UX)</strong> kan skabes blandt andet ved <strong>optimering</strong> 
          af hjemmesiden og med <strong>overskuelig indhold</strong> og mange andre ting som skal være med.
        </p>
      </div>
      <div>
        <img src="../../../icons/website.svg" width="200px" height="auto">
      </div>
    </div>

    <div class="gylden-trekant-img">
        <img src="../assets/concept 2.png" width="100%" height="auto">
    </div>


    
  </div>
</template>

<style lang="scss" scoped>
@import '../css/style.scss';

  .img{
    background-image: url('../assets/concept bg.jpg');
    h1{
      margin-left: 0;
      text-align: center;
      font-size: 55px;
      padding: 20vw 0 0 0 !important;
      b{
        color: #CC9F00;
        font-weight: bold;
      }
    }
  }

  .titel{
    margin: 0 0 0 12%;
    padding-top: 100px;
    h1{
      line-height: 50px;
      margin: 0 0 100px 0;
    }
  }

  .container{
    margin: 0 15% 0 12%;
    .txt{
      display: flex;
      align-items: center;
      p{
        width: 550px;
      }
    }
  }

  .line{
    content: "";
    background: #24353F;
    height: 1px;
    width: 76%;
    margin: 40px auto;
  }

  .gylden-trekant-img{
    margin: 100px 0;
  }


  @media only screen and (max-width: 1120px){
    .container{
      margin-top: 50px;
      flex-direction: column;
      .txt{
        margin-bottom: 50px;
        p{
          width: 100%;
        }
      }
    }
  }

  @media only screen and (max-width: 940px){
    .img{
    background-image: url('../assets/concept bg(small-version).jpg') !important;
    }
    .bg-img{
        h1{
          padding-top: 30vw !important;
        }
    }
}

@media only screen and (max-width: 666px){
  .img{
    background-image: url('../assets/concept bg(extrasmall-version).jpg') !important;
    }
    .bg-img{
        h1{
          padding-top: 40vw !important;
        }
    }
}

@media only screen and (max-width: 500px){
  .img{
    background-image: url('../assets/concept bg(xxs).jpg') !important;
    }
    .bg-img{
      background-position: left !important;
       h1{
          padding-top: 50vw !important;
        }
    }
}

@media only screen and (max-width: 420px){
    .bg-img{
        h1{
            padding-top: 60vw !important;
        }
    }
    .gylden-trekant-img{
      width: 553px;
    }
}

@media only screen and (max-width: 378px){
  .titel{
    width: 86%;
    margin: 0 0 0 5%;
  }
  .container{
    margin: 0 0 0 5%;
    width: 90%;
  }
  .line{
    width: 90%;
  }
  
}

</style>