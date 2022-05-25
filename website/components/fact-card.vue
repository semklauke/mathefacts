<template>
    <div class="fact">
    <NuxtLink :to="{ name: 'fact-slug', params: { slug: fact.slug } }">
        <b-card
            :title="fact.title"
            :img-src="fact.img" 
            img-alt="Image"
            img-top
            tag="article"
            class="mb-2 fact_card"
        >
            <div class="fact_number">
                #{{ fact.episode.nr }}
            </div>
            <b-card-text class="fact_desc">
                {{ fact.desc }}
            </b-card-text>
            <div class="fact_tags">
                <b-badge v-for="tag of fact.tags" :key="tag" class="fact_tag">{{ tag }}</b-badge>
            </div>
        </b-card>
        
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { Episode, Fact } from 'types'

export default Vue.extend({
  name: 'FactCard',

  props: {
    fact: {
      type: Object,
      required: true
    } as PropOptions<Fact>
  },

  data () {
    return {
    }
  },

  computed: {
  }
})
</script>

<style>
.card-title {
    z-index: 5;
}
.fact {
    height: 100%;
}

.fact_card {
    /* width: calc(100% - 50px); */
    max-width: 1200px;
    margin: 5px;
    /*background-color: rgba(250, 250, 250, 1.0);*/
    border-radius: 7px;
    padding-top: 5px;
    padding-right: 15px;
    padding-left: 15px;
    color: rgb(20, 20, 20);
    font-size: 1.2em;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
    
}
.fact:hover .fact_card,
.fact:active .fact_card {
    border-color: #64AFD2;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px, rgba(100, 175, 210, 0.2) 0px 7px 29px 0px;
    

}
.fact_tags {
    text-align: right;
    z-index: 5;
}

.fact_tag {
    margin-left: 5px;
}

.fact_desc {
    z-index: 5;
}

.fact_number {
    font-size: 5.1em;
    color: #64AFD2;
    opacity: 0.16;
    position: absolute;

    left: 0;
    bottom: -36px;
    right: 0;
    z-index: 2;
}
</style>