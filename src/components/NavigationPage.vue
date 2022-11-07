<template>
  <div class="navigation">
    <div class="contain">
      <div class="row">
        <div class="col">
          <router-link class="nav-link" to="/" exact
            >Тестовое задание №1</router-link
          >
        </div>
        <div class="col">
          <router-link class="nav-link" to="/testtask2" exact
            >Тестовое задание №2</router-link
          >
        </div>
        <div class="col">
          <router-link class="nav-link" to="/testtask3" exact
            >Тестовое задание №3</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {},
};
</script>
<style>
/* a.nav-link {
  padding: 10px;
}
nav.navbar {
  padding: 0 0;
}
.navbar-brand {
  font-size: 1.6rems;
}
a.router-link-active,
li.router-link-active > a {
  background-color: #a8b4af;
} */
.col a {
  color: black;
  text-decoration: none;
}
.col a:hover {
  color: blue;
  text-decoration: none;
}
.navigation {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>