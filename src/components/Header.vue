<script lang="ts">
</script>

<template>
    <header class="header">
    <a href="/">
        <img alt="logo"/>
    </a>
    <p>
      <router-link class="link" style="margin-left: 700px" to="/documentation">Document</router-link>
      <router-link class="link" to="/demo">Demo</router-link>
    </p>
  </header>
</template>
<style scoped>
  .link{
  border: #42b883 1px solid;
  padding: 10px 20px 10px 20px;
  margin: 10px;
  text-decoration: none;
}
</style>