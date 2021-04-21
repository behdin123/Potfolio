<template>

    <main>
        <div class="iframe-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/VMEltioCtNk" title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </main>

</template>

<script>
export default {
    
}
</script>


<style lang="scss" scoped>


.iframe-container{
    display: flex;
    justify-content: center;
    iframe{
        width: 70vw;
        height: 50vh;
    }
}

</style>