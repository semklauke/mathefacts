<template>
<b-container fluid="lg" class="facts_group">
    <div id="search_input_div">
        <b-input-group>
            <b-form-input 
                v-model="query" type="search" 
                autocomplete="off" size="lg" 
                autofocus id="search_input"
                placeholder="Search..."
            >
            </b-form-input>
            <b-input-group-append id="search_append">
                <b-icon 
                    icon="search" id="search_icon" 
                    aria-hidden="true" 
                    :style="{visibility: query == '' ? 'visible' : 'hidden'}"
                >
                </b-icon>
            </b-input-group-append>
        </b-input-group>
    </div>
    <b-card-group columns >
    <fact-card v-for="fact of facts" :key="fact.slug" class="fact_col" :fact="fact"></fact-card>
    </b-card-group>
    <div id="f"></div>
</b-container>

</template>

<script lang="ts">
import Vue from 'vue'
import { BIcon, BIconSearch } from 'bootstrap-vue'
import {Fact, Episode} from 'types'

interface ContentFact extends Fact {
    path: string,
    extension: string,
}

interface CompData {
    facts: ContentFact[],
    query: string
}

export default Vue.extend({
    data() : CompData {
        return { facts: [], query: '' }
    },

    async asyncData({ $content, params }) : Promise<CompData> {
        const facts : ContentFact[] = await $content('facts')
            .only(['title', 'episode', 'slug', 'desc', 'tags', 'nr'])
            .sortBy('nr', 'desc')
            .fetch<ContentFact>() as ContentFact[];
        return { facts, query: '' };
    },
    watch: {
        async query(query) {
            this.facts = await this.$content('facts')
                .only(['title', 'episode', 'slug', 'desc', 'tags', 'nr'])
                .sortBy('nr', 'desc')
                .search(query)
                .fetch<ContentFact>() as ContentFact[];
        }
    },
    components: {
        BIcon,
        BIconSearch
    }
})
</script>

<style>
#f {
    height: 65px;
} 

.facts_col > a,
.facts_col > a:visited {
  text-decoration: none;
  color: inherit;
}

#search_append {
    font-size: 1.2em;
    color: rgba(0, 0, 0, 0.5);
    position: relative;
    left: -30px;
    top: 14px;
    z-index: 20;
}
#search_input_div {
    padding-left: 0px;
    padding-right: 0px;
    position: relative;
    left: 5px;
    padding-bottom: 7px;
    width: calc(100% + 18px);
    display:flex;
}
#search_input {
    border-radius: 4px;
}

@media only screen and (max-width: 571px) {
    #search_input_div {
        padding-right: 10px;
    }
}
</style>
