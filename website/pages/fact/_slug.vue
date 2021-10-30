<template>
    <b-container fluid="lg" class="fact_container" tag="article">
        <h1>{{ fact.title }}</h1>
        <iframe 
            :src="fact.episode.embed" 
            height="232"
            frameBorder="0" allowfullscreen="" class="spotify_frame" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">        
        </iframe>
        <!-- content from markdown -->
        <nuxt-content :document="fact" />
        
    </b-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    async asyncData({ $content, params }) {
        const fact = await $content('facts', params.slug).fetch()
        return {
            fact          
        }
    },
    methods: {
        formatDate(date: string) {
          return new Date(date).toLocaleDateString('en', { year: "numeric", month: 'long', day: 'numeric' })
        }
    }
})
</script>

<style>

.spotify_frame {
    width: 100%;
    margin-bottom: 20px;
    margin-top: 0px;
}
.nuxt-content {
    font-size: 1.3em;
    line-height: 1.3em;
}

.nuxt-content h2,
.nuxt-content h3,
.nuxt-content h4,
.nuxt-content h5,
.nuxt-content h6 {
    margin-bottom: 15px;
    margin-top: 20px;
}

.nuxt-content h1 {
    font-size: 2em;
}
.f_right {
    float:  right;
}
.f_left {
    float:  left;
    clear:  both;
}

.img_small {
    max-width: 250px;
}

.img_medium {
    max-width: 500px;
}

.img_full {
   width: 100%;
}

img.b {
    padding: 8px;
    background-color: rgb(238, 238, 238);
    border-radius: 3px;
    margin-bottom: 4px;
    margin-top: 4px;
}

.img_container {
    padding: 8px;
    background-color: rgb(238, 238, 238);
    border-radius: 3px;
    margin-bottom: 4px;
    margin-top: 4px;
    display: inline-block;
}
.img_container div {

}    

</style>