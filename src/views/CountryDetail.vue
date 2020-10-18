<template>
  <section class="section__contry-detail">
    <div>
      <router-link to="/" class="country-detail__back-button">
        <span class="country-detail__back-button--icon"
          ><svg
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            ></path></svg
        ></span>
        <span>Back</span>
      </router-link>
    </div>

    <div class="country-detail-card">
      <div class="country-detail-card__image">
        <img :src="country.flag" :alt="country.name" />
      </div>
      <div class="country-detail-card__body">
        <h3 class="country-detail-card__body--header">{{ country.name }}</h3>

        <div class="country-detail-card__body--list-container">
          <ul class="country-detail-card__body--list">
            <li>
              <strong>Native Name:</strong><span>{{ country.nativeName }}</span>
            </li>
            <li>
              <strong>Population:</strong>
              <span>{{ country.population | formateNumber }}</span>
            </li>
            <li>
              <strong>Region:</strong><span>{{ country.region }}</span>
            </li>
            <li>
              <strong>Sub Region:</strong><span>{{ country.subregion }}</span>
            </li>
            <li>
              <strong>Capital:</strong><span>{{ country.capital }}</span>
            </li>
          </ul>

          <ul class="country-detail-card__body--list">
            <li>
              <strong>Top Level Domain:</strong
              ><span>{{ country.topLevelDomain[0] }}</span>
            </li>
            <li>
              <strong>Currencies:</strong
              ><span>{{ country.currencies[0].name }}</span>
            </li>
            <li>
              <strong>Languages:</strong>
              <span v-for="language in country.languages" :key="language.name">
                {{ language.name }}
              </span>
            </li>
          </ul>
        </div>

        <div class="country-detail-card__footer">
          <h4 class="country-detail-card__footer--header">Border Countries:</h4>
          <div class="country-detail-card__footer--body">
            <router-link
              v-for="border in country.borders"
              :key="border"
              :to="border.toLowerCase()"
              class="country-detail-card__footer--border-button"
            >
              {{ border }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    country: {
      required: true,
      type: Object
    }
  },

  beforeRouteUpdate(to, from, next) {
    this.$store.dispatch('fetchCountry', to.params.code).then(data => {
      to.params.country = data
      next()
    })
  }
}
</script>

<style scoped>
.section__contry-detail {
  margin-top: 2rem;
}

/* Back Button */

.country-detail__back-button {
  display: inline-flex;
  align-items: center;
  background-color: var(--bg-primary);
  border-radius: 0.5rem;
  color: var(--text-color);
  padding: 0.5rem 1rem;
  text-decoration: none;
  box-shadow: var(--shadow);
  transition: all 0.3s ease-in-out;
}

.country-detail__back-button:hover {
  box-shadow: var(--shadow-lg);
}

.country-detail__back-button > span {
  display: flex;
}

.country-detail__back-button--icon {
  display: flex;
  margin-right: 0.5rem;
}

.country-detail__back-button--icon svg {
  height: 1rem;
  width: 1rem;
}

/* Country Detail Card */
.country-detail-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--text-color);
  margin-top: 2rem;
}

.country-detail-card > * {
  flex: 1;
}

.country-detail-card__image > img {
  object-fit: contain;
  object-position: center;
  width: 100%;
  max-height: 415px;
}

.country-detail-card__body {
  margin-left: 5rem;
}

.country-detail-card__body--header {
  font-size: 1.5rem;
}

.country-detail-card__body--list-container {
  display: flex;
  justify-content: space-between;
  padding-top: 2rem;
}

.country-detail-card__body--list {
  list-style-type: none;
}

.country-detail-card__body--list > li {
  font-size: 0.8rem;
  padding-bottom: 0.5rem;
}

.country-detail-card__body--list > li > span {
  font-weight: 300;
  margin-left: 0.5rem;
}

.country-detail-card__footer {
  display: flex;
  align-items: center;
  padding-top: 3rem;
}

.country-detail-card__footer--header {
  font-size: 0.8rem;
  margin-right: 1rem;
}

.country-detail-card__footer--body {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.country-detail-card__footer--border-button {
  background-color: var(--bg-primary);
  border-radius: 0.5rem;
  color: var(--text-color);
  padding: 0.5rem 1rem;
  text-decoration: none;
  box-shadow: var(--shadow);
  transition: all 0.3s ease-in-out;
}

.country-detail-card__footer--border-button:hover {
  box-shadow: var(--shadow-lg);
}

@media screen and (max-width: 1080px) {
  .country-detail-card {
    flex-direction: column;
  }

  .country-detail-card__body {
    padding: 2rem 0;
    margin-left: 0;
  }

  .country-detail-card__body--list-container {
    flex-direction: column;
  }

  .country-detail-card__body--list {
    padding-bottom: 1rem;
  }

  .country-detail-card__footer {
    flex-direction: column;
    align-items: flex-start;
    /* padding: 1rem 0 2rem 0; */
  }

  .country-detail-card__footer--header {
    margin: 0;
    padding-bottom: 0.8rem;
  }
}

@media screen and (max-width: 640px) {
  .country-detail-card__body {
    align-self: flex-start;
  }
}
</style>
