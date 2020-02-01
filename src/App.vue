<template>
  <div id="app">
    <div>
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
@import "./styles/_variables.scss";

body, html, #app {
  padding: 0;
  margin: 0;
  height: 100vh;
  width: 100vw;
  background: $yellow;
  overflow: hidden;

  font-size: 20px;

}


#app {
  background-image: linear-gradient($orange-dark 50%, $orange-light);
  display: inline-block;
  padding: 0;
  margin: auto;
  height: calc(100% - 20px);
  width: calc(100% - 20px);
  border: solid 10px $yellow; 


  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

}

.header, h1, h2 {
  font-size: 2.5rem;
  line-height: 1em;
  
  color: $yellow;
  text-transform: uppercase;
  font-weight: 900;

}

.sub-copy, p {
  font-size: 1.25rem;
  line-height: 1em;

  color: $yellow;
  text-transform: uppercase;
  font-weight: 900;

}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
