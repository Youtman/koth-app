<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">
      <!-- <img class="logo" src="@/assets/koth-logo.png" alt="logo"> -->
      </router-link>
      <div class="navbar-nav mr-auto">
        <!-- <li class="nav-item">
          <router-link to="/tutorials" class="nav-link">Tutorials</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">Add</router-link>
        </li> -->
        <li class="nav-item">
          <router-link to="/group" class="nav-link">Group</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/team" class="nav-link">Team</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/match" class="nav-link">Match</router-link>
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <h2>KOTHBIRO TOURNAMENT</h2>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "Crud"
};
</script>

<style lang="css" scoped>
.container h2 {
  text-align: center;
  margin: 25px auto;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
}

.logo{
  width: 20px;
}
</style>