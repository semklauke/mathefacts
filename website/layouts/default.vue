<template>
  <div>
    <div id="main_nav_shadow_filter">
        <b-container fluid id="main_nav_shadow"></b-container>
    </div>
    <div id="main_nav_filter">
        <b-container fluid tag="nav" id="main_nav">
            <b-row id="main_nav_col">
                <b-col id="nav_logo">MATHEFACTS</b-col>
                <b-col id="nav_button_col" cols="2" v-b-toggle.sidebar>
                    <b-icon icon="justify"></b-icon>
                </b-col>
            </b-row>
        </b-container>
    </div>
    <Nuxt />
    <b-sidebar id="sidebar" title="Menu" right shadow>
        <div class="px-3 py-2">
            <ul><li>a</li><li>b</li></ul>
        </div>
    </b-sidebar>
  </div>
</template>

<style>
html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
        Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    height: 100%;
    
}
*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
}

body {
    height: 100%;
    margin: 0;
    background-color: rgba(250, 250, 250, 1.0);
}  

#main_nav {
    height: 50px;
    background-color: #64AFD2;
    box-shadow: 0px 3px 3px 0px;
    clip-path: polygon(0% 0%,100% 0%,88% 100%,15% 100%, 0% 45%);
    z-index: 10;
    position: relative;
    top: -60px;
    left: -20px;
}

#main_nav_shadow {
    height: 60px;
    clip-path: polygon(0% 0%,100% 0%,100% 0%,88.5% 100%,0% 100%);
    background-color: #5899B8;
    z-index: 1;
    
}

#main_nav_filter {
    filter: drop-shadow(-1px 2px 3px rgba(0,0,0,0.3));
}

#main_nav_shadow_filter {
    filter: drop-shadow(-1px 1px 3px rgba(0,0,0,0.25));
}


#nav_logo {
    font-size: 4em;
    font-weight: 500;
    font-family: 'Oswald';
    color: #fff;
    position: relative;
    top:  -25px;
}

#nav_button_col {
    color:  rgba(255, 255, 255, 0.7);
    font-size: 2em;
    font-weight: 100;
    position: relative;
    left: -5px
}

@media only screen and (max-width: 420px) {
    #main_nav {
        height: 40px;
        box-shadow: 0px 2px 3px 0px;
        z-index: 10;
        top: -50px;
    }

    #main_nav_shadow {
        height: 50px;
        z-index: 1;
    }

    #nav_logo {
        font-size: 3.2em;
        font-weight: 500;
        font-family: 'Oswald';
        color: #fff;
        position: relative;
        top:  -22px;
    }
}

@media only screen and (max-width: 320px) {
    #main_nav {
        height: 35px;
        box-shadow: 0px 2px 3px 0px;
        clip-path: polygon(0% 0%,100% 0%,92% 100%,15% 100%, 0% 45%);
        z-index: 10;
        top: -45px;
    }

    #main_nav_shadow {
        height: 45px;
        clip-path: polygon(0% 0%,100% 0%,100% 12%,90% 100%,0% 100%);
        z-index: 1;
    }

    #nav_logo {
        font-size: 2.8em;
        font-weight: 500;
        font-family: 'Oswald';
        color: #fff;
        position: relative;
        top:  -20px;
    }
}


</style>