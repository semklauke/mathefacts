<template>
<b-container fluid="lg" class="facts_group">
    <b-card-group columns >
    <fact-card v-for="fact of facts" :key="fact.slug" class="fact_col" :fact="fact"></fact-card>
    </b-card-group>
    <div id="f"></div>
</b-container>

</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    async asyncData({ $content, params }) {
        const facts = await $content('facts')
            .only(['title', 'episode', 'slug', 'desc', 'tags', 'nr'])
            .sortBy('nr', 'desc')
            .fetch();
        return { facts };
    }
})
</script>

<style>
#f {
    height: 65px;
} 

.facts_group a,
.facts_group a:visited {
  text-decoration: none;
  color: inherit;
}
</style>
