<template>
<div class="VIDEO">
    <div id="video-dark-version-image" class="bg-img img">
      <h1 data-aos="fade-right" data-aos-duration="3000">Video Produktion</h1>
    </div>

    <div class="container gray  first-mode">
            <div class="txt h1 h2">
              <h3>Har du bruge for sprøde og kvalitets videoer til at tiltrække en større del af din målgruppe?</h3>
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
                    <img data-aos="fade-up"  data-aos-duration="1000" src="../assets/premiere after effect_.png" width="100%" height="auto">
                </div>
            </div>
    </div>
    <div class="my-video-box">
        <div class="video-titel h1">
            <h1>Music videos</h1>
            <b> Musikvideoerne er lavet med royaltyfri videoklip og er uofficielle </b>
            <b> Videoerne er lavet af mig og med programerne, premiere pro og After Effect </b>
        </div>
        <div class="youtube-music-videos">
            <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/yEhTWs-mrEU" title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Ps81hC2TR_E" title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    </div>
    <div class="my-video-box first-mode gray">
        <div class="video-titel h1">
            <h1>Kortfilm projekt</h1>
            <b> NO WAY OUT </b>
            <b> Genren på kotfilmen er thriller </b>
        </div>
        <div class="kortfilm-container">
            <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/TghjVKOoKD0" title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
        h1{
            text-align: center;
            padding: 310px 0 0 0 !important;
            margin-bottom: 30px !important;
        }
    }
    .gray{
        background: #EAEAEA;
    }
    .container{
        padding: 110px 12% 110px 15%;
        
        h1{
            padding: 0 !important;
            text-align: left;
            margin-bottom: 30px;
        }
      .concept-txt-two{
        margin-top: 30px;
      }
      .img-box{
        width: 30vw;
      }
      
      
      .h1{
          width: 500px;
          line-height: 51px;
      }
    }
    .my-video-box{
        padding: 110px 12% 50px 12%;
        .video-titel{
        display: flex;
        flex-direction: column;
        justify-content: center;
            h1{
                text-align: center;
            }
            b{
            text-align: center;
            color: #000;
            margin-top: 25px;
            font-family: Arial, Helvetica, sans-serif;
            }
        }
        
        .youtube-music-videos{
        display: flex;
        justify-content: space-between;
        padding-top: 50px;
        flex-wrap: wrap;
            iframe{
                width: 35vw;
            }
        }
        .kortfilm-container{
            padding: 50px;
            display: flex;
            justify-content: center;
            iframe{
                width: 50vw;
                height: 30vw;
            }
        }
    }
    
@media only screen and (max-width: 1200px){
    .youtube-music-videos{
        flex-direction: column;
        align-items: center;
    }
     iframe{
            padding-bottom: 50px;
            width: 45vw !important;
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
        iframe{
            width: 55vw !important;
        }
}

@media only screen and (max-width: 780px){
    .gyldne-trekant{
        margin-top: 50px !important;
        width: 50vw !important;
    }
    
    .img-box{
            justify-content: flex-end !important;
            width: 100% !important;
        }
    .txt{
        width: 70vw !important;
    }
    h1{
        margin-bottom: 30px !important;
    }
        iframe{
            width: 65vw !important;
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
        iframe{
            width: 75vw !important;
        }
    b{
        font-size: 14px !important;
    }
}

@media only screen and (max-width: 500px){
    .bg-img{
      background-position: left !important;
       h1{
          padding-top: 50vw !important;
        }
    }
    .container{
        padding-left: 10% !important; 
    }
    b{
        font-size: 13px !important;
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
        iframe{
            width: 76vw !important;
            height: 40vh !important;
        }
}



</style>