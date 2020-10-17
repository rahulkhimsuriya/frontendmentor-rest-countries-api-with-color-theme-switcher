<template>
  <div class="card">
    <div class="card__image">
      <img :src="country.flag" :alt="country.name" />
    </div>
    <div class="card__body">
      <h3 class="card__body--header">{{ country.name }}</h3>
      <ul class="card__body--list">
        <li>
          <strong>Population:</strong><span>{{ country.population }}</span>
        </li>
        <li>
          <strong>Region:</strong><span>{{ country.region }}</span>
        </li>
        <li>
          <strong>Capital:</strong><span>{{ country.capital }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CountryCard',

  props: {
    country: {
      required: true,
      type: Object
    }
  }
}
</script>

<style scoped>
.card {
  background-color: var(--bg-primary);
  border-radius: 10px;
  color: var(--text-color);
  max-width: 250px;
  overflow: hidden;
  box-shadow: var(--shadow);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.card:hover {
  box-shadow: var(--shadow-lg);
}

.card__image {
  overflow: hidden;
  height: 10rem;
}

.card__image img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.card__body {
  padding: 1rem;
}

.card__body--header {
  font-size: 1.05rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card__body--list {
  list-style: none;
  padding-top: 1rem;
}

.card__body--list > li {
  font-size: 0.9rem;
  font-weight: 300;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card__body--list > li:not(:last-child) {
  font-size: 0.85rem;
  font-weight: 300;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 0.2rem;
}

.card__body--list > li > span {
  margin-left: 5px;
  opacity: 0.75;
}
</style>
