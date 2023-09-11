<script >
import ListPage from "./components/List/index.vue"
export default {
  components: {
    ListPage,
  },
  data() {
    return {}
  },

}
</script>

<template>
  <div class="container">
    <div class="header">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Home</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
    <v-divider></v-divider>
    <div class="main">
      <v-card height="800" width="100%">
        <template v-slot:title>
          List employees
        </template>
        <template v-slot:text>
         <ListPage></ListPage>
        </template>
      </v-card>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 900px;
  border: 2px solid black;

}
</style>
