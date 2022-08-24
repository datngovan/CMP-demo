<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue';
import CommandPalette from 'command-palette-vue3';
import "command-palette-vue3/dist/style.css";
import {ref, computed} from "vue";
// Optional can disable display by group by adding return false to the isDisplayByGroup
  const isDisplayByGroup = computed(() => {
  return true;
  });
  // Optional delete if donot want to using default light and dark theme
  const themeMode = ref({
    dark: true,
    light: false
  });
  /*
  Optional delete if donot want to using changeTheme function can assign theme directly
  by adding class="light" or class="dark" to <CommandPalette>
  */
  const changeTheme=()=>{
    themeMode.value.dark=!themeMode.value.dark;
    themeMode.value.light=!themeMode.value.light;
  };
  const customerGroups = computed(() => {
  return [
    {groupName:"Default",
    commands:[
      {commandName:"Switch Light/Dark Theme", 
      commandKey:"Control+m", 
      commandAction:() => {changeTheme();}},
      {commandName:"Test Command", 
      commandKey:"Control+Shift+m", 
      commandAction:() => {alert("Test Command excecute.")}},
      ]},
  ];
});
</script>

<template>
  <div>
    <CommandPalette :themeMode="themeMode" :customerGroups="customerGroups" :isDisplayByGroup="isDisplayByGroup"/>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
