<template>
<div class="VIDEO">
    <div class="bg-img img">
      <h1>Video Produktion</h1>
    </div>

    <div class="container">
            <div class="txt h1 h2">
              <h3>Har du bruge for sprøde og kvalitets videoer til at <br> tiltrække en større del af din målgruppe?</h3>
              <h1>Fra optagelser til færdig produktion</h1>
              <p>Har du lyst til at få større opmærksomhed omkring dit brand eller produkter, 
                 så skal du stærkt overveje video content ind i dinne strategier.
              </p>
              <p class="concept-txt-two">Jeg kan sørge for det hele. Fra scenarie, til optagelser 
                  og helt frem til <strong>færdig produktion</strong>, tilpasset de forskellige <strong>platforme</strong>. <br> <br> 

                Man siger at <strong>et billede siger mere end 1000 ord</strong>, så tænk over hvilken magi der 
                ligger i <strong>video content</strong> og hvad det kan medføre for dig og din virksomhed

              </p>
               
            </div>
            <div class="img-box">
                <div class="gyldne-trekant">
                    <img src="../assets/premiere after effect_.png" width="100%" height="auto">
                </div>
            </div>
    </div>
</div>

</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
@import '../css/style.scss';

    .img{
    background-image: url('../assets/video bg.jpg') !important;
    }
    h1{
        text-align: center;
        padding: 310px 0 0 0 !important;
        margin-bottom: 30px !important;
    }

    .container{
        margin: 0 0 0 15%;
        padding-top: 110px;
        h1{
            padding: 0 !important;
            text-align: left;
            margin-bottom: 30px;
        }
      .concept-txt-two{
        margin-top: 30px;
      }
      .img-box{
        width: 35%;
        margin: 0 12% 110px 0;
      }
      
      
      .h1{
          width: 500px;
      }
    }

@media only screen and (max-width: 1120px){
    .container {
        flex-direction: column;
        .img-box{
            display: flex;
            justify-content: flex-end;
        }
    }
}

@media only screen and (max-width: 940px){ 
    .img{
    background-image: url('../assets/video bg(small).jpg') !important;
    }
    .bg-img{
        h1{
          padding-top: 30vw !important;
        }
    }
}

@media only screen and (max-width: 780px){
    .gyldne-trekant{
        margin-top: 50px !important;
        width: 50vw !important;
    }
    
    .img-box{
            justify-content: flex-start !important;
            width: 100% !important;
        }
    .txt{
        width: 70vw !important;
    }
    h1{
        margin-bottom: 30px !important;
    }
}

@media only screen and (max-width: 666px){
    .bg-img{
        h1{
          padding-top: 40vw !important;
        }
    }
    .gyldne-trekant{
        width: 70vw !important;
    }
}

@media only screen and (max-width: 500px){
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
    .gyldne-trekant{
        width: 84vw !important;
    }
    .txt{
        width: 85vw !important;
    }
    .container{
        margin-left: 7%;
    }
}



</style>