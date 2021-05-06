<template>

    <main>
        <div class="om-mig-txt">
            <div>
                <div class="h1">
                    <h1>Hvem er jeg?</h1>
                </div>
                <div class="h1">
                    <p>Du kan se mit <strong>video CV</strong> eller <strong>dowenloade</strong> mit CV som PDF for at lærer mig bedre at kende</p>
                </div>
            </div>
            <div class="cv-dowenload-box">
                <div class="cv-box">    
                    <img v-if="dark == false || dark == null" src="../assets/cv.png" width="100%" height="auto">
                    <img v-else src="../assets/cv dark-version.png" width="100%" height="auto">
                </div>
                    <div class="btn-box">
                       <a href="/files/Behdin Bagheri CV.pdf" target="_blank"><button class="btn">Download CV</button></a>
                    </div>
            </div>
        </div>
        <div class="iframe-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/VMEltioCtNk" title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </main>

</template>

<script>
export default {
    props: ['dark']
}
</script>


<style lang="scss" scoped>
@import '../css/style.scss';

main{
    padding-top: 200px;
    padding-bottom: 110px;
    margin: 0 8% 0 12%;
    display: flex;
    justify-content: space-between;
    p{
        width: 30vw;
    }
    .om-mig-txt{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
}
.iframe-container{
    iframe{
        width: 40vw;
        height: 50vh;
    }
}
.cv-dowenload-box{
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    .cv-box{
        width: 100px;
    }
}

@media only screen and (max-width: 1120px){
    main{
        flex-direction: column;
        p{
        width: 65vw;
    }
    }
    .iframe-container{
    iframe{
        width: 80vw;
        height: 50vh;
    }
     
}
.btn-box{
    padding: 0;
    display: flex;
    justify-content: flex-end;
}
.cv-dowenload-box{
    flex-direction: row;
    justify-content: space-between !important;
    .cv-box{
        width: 100px;
    }
}
.om-mig-txt{
        height: 300px;
        margin-bottom: 50px;
    }
        .btn-box{
        justify-content: flex-end !important;
    }
}

@media only screen and (max-width: 780px){
    iframe{
        width: 80vw;
        height: 40vh !important;
    }
    .cv-box{
        width: 20vw !important;
    }
}

@media only screen and (max-width: 500px){
    iframe{
        width: 80vw;
        height: 50vh !important;
    }
    .cv-box{
        width: 30vw !important;
    }
    .om-mig-txt{
        height: 250px  !important;
    }
}

@media only screen and (max-width: 420px){
    iframe{
        width: 80vw;
        height: 50vh !important;
    }
    .cv-dowenload-box{
        margin: 25px 0 !important;
    }
    .cv-box{
        width: 35vw !important;
    }
    .om-mig-txt{
        height: 225x    px  !important;
    }
}

</style>