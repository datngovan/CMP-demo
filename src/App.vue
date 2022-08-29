<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue';
import header from './components/Header.vue';
import CommandPalette from 'command-palette-vue3';
import "command-palette-vue3/dist/style.css";
import {ref, computed} from "vue";
import router from './router';
defineProps<{ msg: string; }>()
const count = ref(0)
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
    if(themeMode.value.dark===true){
      document.getElementById("body")?.classList.add("darkMode");
      document.getElementById("body")?.classList.remove("lightMode");
    }else{
      document.getElementById("body")?.classList.add("lightMode");
      document.getElementById("body")?.classList.remove("darkMode");
    }
    // if(themeMode.value.light === true){
    //   backgroundColor.value.backgroundWhite == true;
    // }else{
    //   backgroundColor.value.backgroundWhite == false;
    // }
  };
  const plusOne=()=>{
    return count.value++;
  };
    const minusOne=()=>{
    return count.value--;
  };
  const customerGroups = computed(() => {
  return [
    {groupName:"Default",
    commands:[
      {commandName:"Switch Light/Dark Theme", 
      commandKey:"Control+m", 
      commandAction:() => {changeTheme();}},
      {commandName:"Count Plus 1", 
      commandKey:"Control+Shift+c", 
      commandAction:() => {plusOne();}},
      {commandName:"Count Minus 1", 
      commandKey:"Control+Shift+v", 
      commandAction:() => {minusOne();}},
      {commandName:"Count Minus 1", 
      commandKey:"Control+I", 
      commandAction:() => {minusOne();}},
      ]},
  ];
});
</script>

<template id="test">
  <div>
    <header>
      <component :is="$route.meta.layout||'div'"></component>
    </header>
  </div>
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
.cmp{
  text-align: left;
}
.demo-section{
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}
.dem-text{
  text-align: left !important;
}
.demo-result{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    min-width: 300px;
    min-height: 150px;
    border: 1px solid #42b883;
    border-radius: 10px;
    padding-block: 30px;
    padding-inline: 50px;
}
.count{
  padding: 50px;
  font-size: 6rem;
  color:#42b883;
}
.keyboard{
  background-color: #f1f5f9;
    color: #1e293b;
    border: 1px solid #cbd5e1;
    border-radius: 5px;
    font-family: var(--scp-kbd-font-family, sans-serif);
    font-size: inherit;
    text-transform: capitalize;
    padding: 5px 8px;
    font-size: 12px;
}
button{
  display: inline-flex;
    align-items: center;
    gap: 10px;
    background-color: var(--brand-fg-color);
    color: #42b883;
    border: none;
    border-radius: 4px;
    box-shadow: 0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a;
    font-size: 1rem;
    font-family: inherit;
    text-decoration: none;
    cursor: pointer;
    padding: 10px 20px;
    outline-offset: 3px;
}
.descr{
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0;
    size: 16px !important;
}
.demo-text{
  padding-bottom: 30px;
}
</style>
