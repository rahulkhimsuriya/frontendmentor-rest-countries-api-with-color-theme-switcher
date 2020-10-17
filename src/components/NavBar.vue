<template>
  <nav class="container navbar">
    <router-link class="navbar__brand" to="/">Where in the world?</router-link>

    <button class="navbar__button" @click="toggle">
      <span
        ><svg
          class="navbar__button--icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </span>
      <span>Dark Mode</span>
    </button>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',

  methods: {
    toggle() {
      document.body.classList.toggle('dark')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
}

.navbar a {
  font-weight: bold;
  color: var(--text-color);
  text-decoration: none;
}

.navbar__brand {
  font-size: 1.2rem;
}

.navbar__button {
  display: flex;
  align-items: center;
  border: 0;
  background-color: transparent;
  color: var(--text-color);
  cursor: pointer;
}

.navbar__brand:hover,
.navbar__button:hover {
  opacity: 0.75;
}

.navbar__button:focus {
  outline: none;
}

.navbar__button--icon {
  height: 1rem;
  width: 1rem;
  margin-right: 0.5rem;
}
</style>
