<template>
  <div id="app">
    <header>
      <NavBar />
    </header>
    <main class="container">
      <router-view />
    </main>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'App',

  components: {
    NavBar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,600;0,800;1,300&display=swap');

* {
  margin: 0%;
  padding: 0%;
  box-sizing: border-box;
}

:root {
  --text-color: hsl(200, 15%, 8%); /* Very Dark Blue (Light Mode Text)*/
  --input-text: hsl(0, 0%, 52%); /* (Light Mode Input) */
  --bg-color: hsl(0, 0%, 98%); /* Very Light Gray (Light Mode Background) */
  --bg-primary: hsl(
    0,
    0%,
    100%
  ); /* White (Dark Mode Text & Light Mode Elements) */
  --shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

body {
  background-color: var(--bg-color);
  transition: background-color 0.5s ease-in-out;
}

body.dark {
  --text-color: hsl(0, 0%, 100%); /* Very Dark Blue (Light Mode Text)*/
  --input-text: hsl(0, 0%, 52%); /* (Light Mode Input) */
  --bg-color: hsl(207, 26%, 17%); /* Very Dark Blue (Dark Mode Background) */
  --bg-primary: hsl(209, 23%, 22%); /* Dark Blue (Dark Mode Elements) */
}

#app {
  font-family: 'Nunito Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  font-weight: 300;
}

.container {
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
}

header {
  background-color: var(--bg-primary);
  box-shadow: var(--shadow);
}
</style>
