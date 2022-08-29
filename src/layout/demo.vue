<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from "./components/HelloWorld.vue";
import CommandPalette from "command-palette-vue3";
import "command-palette-vue3/dist/style.css";
import { ref, computed, onMounted } from "vue";
defineProps<{ msg: string }>();
const count = ref(0);
// Optional can disable display by group by adding return false to the isDisplayByGroup
const isDisplayByGroup = computed(() => {
  return true;
});
// Optional delete if donot want to using default light and dark theme
const themeMode = ref({
  dark: true,
  light: false,
});
/*
      Optional delete if donot want to using changeTheme function can assign theme directly
      by adding class="light" or class="dark" to <CommandPalette>
      */
const changeTheme = () => {
  themeMode.value.dark = !themeMode.value.dark;
  themeMode.value.light = !themeMode.value.light;
  if (themeMode.value.dark === true) {
    document.getElementById("body")?.classList.add("darkMode");
    document.getElementById("body")?.classList.remove("lightMode");
  } else {
    document.getElementById("body")?.classList.add("lightMode");
    document.getElementById("body")?.classList.remove("darkMode");
  }
};
const plusOne = () => {
  return count.value++;
};
const minusOne = () => {
  return count.value--;
};
const groupDisplayed = () => {};
const customerGroups = computed(() => {
  return [
    {
      groupName: "Default",
      commands: [
        {
          commandName: "Switch Light/Dark Theme",
          commandKey: "Control+m",
          commandAction: () => {
            changeTheme();
          },
        },
        {
          commandName: "Count Plus 1",
          commandKey: "Control+Shift+c",
          commandAction: () => {
            plusOne();
          },
        },
        {
          commandName: "Count Minus 1",
          commandKey: "Control+Shift+v",
          commandAction: () => {
            minusOne();
          },
        },
        {
          commandName: "Enable/Disable Display By Group",
          commandKey: "Control+d",
          commandAction: () => {
            groupDisplayed();
          },
        },
      ],
    },
  ];
});
onMounted(() => {
  console.log(window.sessionStorage.getItem("darkMode"));
  if (window.sessionStorage.getItem("darkMode") === "false") {
    themeMode.value.dark = false;
    themeMode.value.light = true;
    document.getElementById("body")?.classList.add("lightMode");
    document.getElementById("body")?.classList.remove("darkMode");
  }
  console.log(themeMode.value);
});
</script>

<template>
    <header class="header">
    <a href="/">
      <img alt="logo" />
    </a>
    <p>
      <router-link class="link" style="margin-left: 700px" to="/documentation"
        >Document</router-link
      >
      <router-link class="link" to="/demo">Demo</router-link>
    </p>
  </header>
  <main>
    <div v-bind:class="themeMode.light ? 'lightMode' : ''">
      <h1 style="margin-bottom: 200px">
        Activate the Command Palette using Ctrl + K
      </h1>
      <CommandPalette
        class="cmp"
        :themeMode="themeMode"
        :customerGroups="customerGroups"
        :isDisplayByGroup="isDisplayByGroup"
      />
    </div>
    <section class="demo-section">
      <div class="demo-text">
        <h3>Control application state</h3>
        <p class="p-text">You can increase the <b>Count</b> by <b>One</b><br /></p>
        <p class="p-text">Using the button on the bottom right.<br /></p>
        <p class="p-text">
          We also have the the Command Palette function and keyboard shortcut.
        </p>
      </div>
      <div class="demo-result">
        <div class="count">{{ count }}</div>
        <div>
          <button @click="count++">Plus One</button>
          <button @click="count--">Minus One</button>
        </div>
        <p class="descr p-text">
          Try Press <kbd class="keyboard">Ctrl</kbd>
          <kbd class="keyboard">K</kbd>
        </p>
      </div>
    </section>
    <section class="demo-section">
      <div class="demo-text">
        <h3>Enable Conditional actions</h3>
        <p class="p-text">You toggle the 1st <b>button</b> to <b>Switch Theme</b>,<br /></p>
        <p class="p-text">
          and the 2nd <b>button</b> to enable/disable <b>Group Search</b><br />
        </p>
        <p class="p-text">
          We also have the the Command Palette function and keyboard shortcut.
        </p>
      </div>
      <div class="demo-result">
        <label for="group-search">
          <input
            type="checkbox"
            name="group-search"
            id=""
            class="hidden-box"
            @click="
              {
                changeTheme();
              }
            "
          />
          <strong>Result Display in Groups</strong>
        </label>
        <p class="descr p-text">
          Try Press <kbd class="keyboard">Ctrl</kbd>
          <kbd class="keyboard">D</kbd>
        </p>
      </div>
    </section>
    <section class="demo-section">
      <div class="demo-text">
        <h3>Change Theme</h3>
        <p class="p-text">You toggle the 1st <b>button</b> to <b>Switch Theme</b>.<br /></p>
        <p class="p-text">
          We also have the the Command Palette function and keyboard shortcut.
        </p>
      </div>
      <div class="demo-result">
        <div>Current Theme is: </div>
        <div class="count" v-if="themeMode.dark===true">Dark</div>
        <div class="count" v-else>Light</div>
        <div>
          <label class="switch">
            <input type="checkbox" v-on:click="{changeTheme();}"/>
            <span class="slider round"></span>
          </label>
        </div>
        <p class="descr p-text">
          Try Press <kbd class="keyboard">Ctrl</kbd>
          <kbd class="keyboard">M</kbd>
        </p>
      </div>
    </section>
  </main>
  <footer>
    Make By&nbsp;<span class="highlight">Team F4</span>&nbsp;and<span
      class="highlight"
      >Holistics</span
    >
  </footer>
</template>

<style scoped>
.cmp {
  text-align: left;
}
.demo-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  margin-bottom: 20px;
}
.dem-text {
  text-align: left !important;
}
.demo-result {
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
.count {
  padding: 50px;
  font-size: 6rem;
  color: #42b883;
}
.keyboard {
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

.descr {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0;
  size: 16px !important;
}
.demo-text {
  padding-bottom: 30px;
  font-weight: 700;
  font-size: 24px;
}
.p-text {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: 500;
  font-size: 20px;
}
.hidden-box {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  word-wrap: normal !important;
  border: 0 !important;
}
</style>
