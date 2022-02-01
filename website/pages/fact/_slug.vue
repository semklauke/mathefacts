<template>
    <b-container fluid="lg" class="fact_container" tag="article">
        <h1 class="fact_title">{{ fact.title }}</h1>
        <iframe 
            :src="fact.episode.embed" 
            height="232"
            frameBorder="0" allowfullscreen="" class="spotify_frame" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" >        
        </iframe>
        <!-- content from markdown -->
        <nuxt-content :document="fact" />
        <div class="github_button">
            <a :href="ghublink" class="gitbutton pill">
                <span class="icon medium">
                    <svg viewBox="0 0 16 16">
                      <path fill="#828282" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                </span>
              Edit on GitHub!
            </a>
        </div>
    </b-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    async asyncData({ $content, params }) {
        const fact = await $content('facts', params.slug).fetch()
        const ghublink = "https://github.com/semklauke/mathefacts/blob/main/website/content/facts/" + fact.slug + ".md"
        return {
            fact,
            ghublink       
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
    margin-top: 10px;
    position: left;
    left:  -6px;
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
    font-size: 2.0em;
}

.nuxt-content {
    padding-bottom: 45px;
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
.fact_title {
    font-size: 3em;
}
.github_button {
    padding-bottom: 30px;
}
/* github button */
/*
 * Modified css from main.css to allow for medium sized vector icons
*/
.icon.medium > svg {
display: inline-block;
width: 24px;
height: 24px;
vertical-align: middle; }
.icon.medium > svg path {
fill: #828282 }

/*
* A modified css for a git style button.
* Original css from: https://github.com/necolas/css3-github-buttons
*/
 
.gitbutton {
position: relative;
overflow: visible;
display: inline-block;
padding: 0.5em 1em;
border: 1px solid #d4d4d4;
margin: 0;
text-decoration: none;
text-align: center;
text-shadow: 1px 1px 0 #fff;
/*
* I removed the original CSS defining the font type, as it did not play nicely with
* the CSS defining my link size.
*/
/*font:11px/normal sans-serif; */
color: #333;
white-space: nowrap;
cursor: pointer;
outline: none;
background-color: #ececec;
background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#f4f4f4), to(#ececec));
background-image: -moz-linear-gradient(#f4f4f4, #ececec);
background-image: -ms-linear-gradient(#f4f4f4, #ececec);
background-image: -o-linear-gradient(#f4f4f4, #ececec);
background-image: linear-gradient(#f4f4f4, #ececec);
-moz-background-clip: padding; /* for Firefox 3.6 */
background-clip: padding-box;
border-radius: 0.2em;
/* IE hacks */
zoom: 1;
*display: inline;
}
.gitbutton:hover,
.gitbutton:focus,
.gitbutton:active,
.gitbutton.active {
border-color: #3072b3;
border-bottom-color: #2a65a0;
text-decoration: none;
text-shadow: -1px -1px 0 rgba(0,0,0,0.3);
color: #fff;
background-color: #3c8dde;
background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#599bdc), to(#3072b3));
background-image: -moz-linear-gradient(#599bdc, #3072b3);
background-image: -o-linear-gradient(#599bdc, #3072b3);
background-image: linear-gradient(#599bdc, #3072b3);
}
.gitbutton:active,
.gitbutton.active {
border-color: #2a65a0;
border-bottom-color: #3884cd;
background-color: #3072b3;
background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#3072b3), to(#599bdc));
background-image: -moz-linear-gradient(#3072b3, #599bdc);
background-image: -ms-linear-gradient(#3072b3, #599bdc);
background-image: -o-linear-gradient(#3072b3, #599bdc);
background-image: linear-gradient(#3072b3, #599bdc);
}
/* overrides extra padding on gitbutton elements in Firefox */
.gitbutton::-moz-focus-inner {
padding: 0;
border: 0;
}
 
.gitbutton.pill {
    border-radius: 5px;
}
</style>