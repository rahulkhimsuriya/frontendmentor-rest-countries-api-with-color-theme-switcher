<template>
  <div>
    <template v-if="loading">
      <h3 class="loading">Loading ...</h3>
    </template>

    <template v-else>
      <section class="section__filter">
        <div class="section__filter--input">
          <span class="section__filter--input-icon">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </span>
          <input
            type="text"
            v-model="search"
            placeholder="Search for a country..."
          />
        </div>

        <div
          class="section__filter--dropdown"
          :style="isOpen ? { 'box-shadow': 'var(--shadow-lg)' } : ''"
        >
          <div
            class="section__filter--dropdown-selected-item"
            @click="isOpen = !isOpen"
          >
            <span>{{
              selectedRegion ? selectedRegion : 'Filter by Region'
            }}</span>
            <span class="section__filter--dropdown-icon">
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </span>
          </div>

          <ul class="section__filter--dropdown-list" v-if="isOpen">
            <li
              v-for="region in dropdownItems"
              :key="region"
              @click="selectDropdownItem(region)"
            >
              {{ region }}
            </li>
          </ul>
        </div>
      </section>

      <section class="section__country">
        <country-card
          v-for="country in filteredCountry"
          :key="country.id"
          :country="country"
        />

        <h3 class="no-result" v-if="!filteredCountry.length">
          No Result found.
        </h3>
      </section>
    </template>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import CountryCard from '@/components/CountryCard.vue'

export default {
  name: 'Home',

  components: {
    CountryCard
  },

  data() {
    return {
      loading: false,
      search: '',
      selectedRegion: '',
      isOpen: false,
      dropdownItems: ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
    }
  },

  async mounted() {
    this.loading = true
    await this.$store.dispatch('fetchAllCountries')
    this.loading = false
  },

  computed: {
    ...mapState(['countries']),

    filteredCountry() {
      if (!this.countries) return ''

      return this.countries.filter(country => {
        if (this.selectedRegion) {
          return (
            country.region.toLowerCase() == this.selectedRegion.toLowerCase() &&
            country.name.toLowerCase().includes(this.search.toLowerCase())
          )
        }

        return country.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },

  methods: {
    ...mapActions(['fetchAllcountries']),

    selectDropdownItem(region) {
      this.selectedRegion = region
      this.isOpen = false
    }
  }
}
</script>

<style scoped>
section {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 4rem;
  margin-top: 2.5rem;
}

.section__filter {
  justify-content: space-between;
  align-items: center;
}

.section__country > * {
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 20%;
}

.no-result {
  color: var(--text-color);
  font-weight: 300;
}

/* Search Input */

.section__filter--input {
  position: relative;
  display: flex;
  display: flex;
  align-items: center;
  justify-content: center;
}

.section__filter--input > input {
  border: none;
  border-radius: 0.5rem;
  background: var(--bg-primary);
  color: var(--input-text);
  font-size: 0.9rem;
  padding: 1rem 1rem 1rem 3rem;
  box-shadow: var(--shadow);
  transition: all 0.3s ease-in-out;
}

.section__filter--input > input:focus {
  box-shadow: var(--shadow-lg);
  outline: none;
}

.section__filter--input-icon {
  display: flex;
  position: absolute;
  left: 1rem;
}

.section__filter--input-icon > svg {
  color: var(--input-text);
  height: 1rem;
  width: 1rem;
}

/* Dropdown */

.section__filter--dropdown {
  position: relative;
  background-color: var(--bg-primary);
  border-radius: 0.5rem;
  color: var(--text-color);
  padding: 1rem;
  min-width: 10rem;
  box-shadow: var(--shadow);
  cursor: pointer;
}

.section__filter--dropdown-icon {
  margin-left: 1rem;
}

.section__filter--dropdown-icon > svg {
  color: inherit;
  height: 0.8rem;
  width: 0.8rem;
}

.section__filter--dropdown-selected-item {
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.section__filter--dropdown-list {
  list-style-type: none;
  position: absolute;
  border-radius: 0.5rem;
  background-color: var(--bg-primary);
  width: 100%;
  min-width: 10rem;
  left: 0;
  top: 4rem;
  padding: 0.5rem 0rem;
  box-shadow: var(--shadow-lg);
}

.section__filter--dropdown-list > li {
  padding: 0.5rem 1rem;
}

.section__filter--dropdown-list > li:hover {
  opacity: 0.75;
}

@media screen and (max-width: 1080px) {
  section {
    gap: 2.75rem;
  }

  .section__country > * {
    flex-basis: 45%;
  }
}

@media screen and (max-width: 640px) {
  section {
    gap: 2rem;
  }

  .section__country > * {
    flex-basis: 75%;
    margin: 0 auto;
  }

  .section__filter {
    flex-direction: column;
  }

  .section__filter--input,
  .section__filter--dropdown {
    width: 90%;
  }

  .section__filter--input > input {
    width: 100%;
  }
}
</style>
