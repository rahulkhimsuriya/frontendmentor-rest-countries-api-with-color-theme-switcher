<template>
  <section>
    <template v-if="loading">
      <h3>Loading ...</h3>
    </template>
    <template v-else>
      <country-card
        v-for="country in countrys"
        :key="country.id"
        :country="country"
      />
    </template>
  </section>
</template>

<script>
import { mapActions } from 'vuex'
import CountryCard from '@/components/CountryCard.vue'

export default {
  name: 'Home',

  components: {
    CountryCard
  },

  data() {
    return {
      countrys: {},
      loading: false
    }
  },

  async mounted() {
    this.loading = true
    await this.$store.dispatch('fetchAllCountrys')
    this.countrys = this.$store.state.countrys
    this.loading = false
  },

  methods: {
    ...mapActions(['fetchAllCountrys'])
  }
}
</script>

<style scoped>
section {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
  margin-top: 3rem;
}

section > * {
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 20%;
}

h3 {
  text-align: center;
  margin: 0 auto;
}

@media screen and (max-width: 900px) {
  section > * {
    flex-basis: 45%;
  }
}

@media screen and (max-width: 640px) {
  section > * {
    flex-basis: 75%;
    margin: 0 auto;
  }
}
</style>
