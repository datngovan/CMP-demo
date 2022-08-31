<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import CommandPalette from "command-palette-vue3";
import "command-palette-vue3/dist/style.css";
import router from "../router";
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
const show = ref({
  show: false,
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
  saveTheme();
};
const plusOne = () => {
  return count.value++;
};
const minusOne = () => {
  return count.value--;
};
const saveTheme = () => {
  if (themeMode.value.dark === true) {
    window.sessionStorage.setItem("darkMode", "true");
  } else {
    window.sessionStorage.setItem("darkMode", "false");
  }
};
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
          commandName: "Go to Documentation",
          commandKey: "Control+Y",
          commandAction: () => {
            document.getElementById("documentation-link")?.click();
          },
        },
        {
          commandName: "Go to Demo",
          commandKey: "Control+U",
          commandAction: () => {
            router.push("/demo");
          },
        },
      ],
    },
  ];
});

onMounted(() => {
  if (window.sessionStorage.getItem("darkMode") === "false") {
    themeMode.value.dark = false;
    themeMode.value.light = true;
    document.getElementById("body")?.classList.add("lightMode");
    document.getElementById("body")?.classList.remove("darkMode");
  }
});
</script>
<template>
  <div
    style="
      height: 100vh;
      display: flex;
      flex-direction: column;
      text-align: left;
    "
  >
    <div style="display: inline-block">
      <header class="header">
        <div style="text-align: left">
          <a href="/" style="display: inline-block; text-decoration: bold;color: #42b883; font-size: 40px; font-family: 'Courier New', Courier, monospace;">
            F4Team
          </a>
        </div>
        <div style="display: flex; text-align: right; margin-left: auto;">
          <p>
            <router-link class="link" to="/demo">Demo</router-link>
            <a
              href="https://www.npmjs.com/package/command-palette-vue3"
              id="documentation-link"
              target="_blank"
              rel="noopener noreferrer"
              class="link"
              >Documentation</a
            >
          </p>
          <ul class="list">
            <li>
              <a
                href="https://github.com/nntai/vue-command-palette"
                class="icon"
                target="_blank"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#42b883"
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  /></svg></a>
            </li>
            <li>
              <a
                href="https://github.com/nntai/vue-command-palette"
                class="icon"
                target="_blank"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#42b883"
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  /></svg></a>
            </li>
          </ul>
        </div>
      </header>
    </div>
    <div v-bind:class="themeMode.light ? 'lightMode' : ''">
      <CommandPalette
        class="cmp"
        :themeMode="themeMode"
        :customerGroups="customerGroups"
        :isDisplayByGroup="isDisplayByGroup"
      />
    </div>
    <main>
      <section class="main-section">
        <main class="sologan" style="display: flex">
          <h3>
            <span>Make Your Web Application Faster Using </span> <br />
            <span style="text-decoration: underline"> Command Palette</span>
          </h3>
        </main>
        <aside>
          <div class="gwraper">
            <figure>
              <img
                src="../pics/default.png"
                alt="demo"
              />
            </figure>
            <figcaption><span>Figure 1: Default searching</span></figcaption>
            <figure>
              <img
                src="../pics/default-none-group.png"
                alt="demo"
              />
            </figure>
            <figcaption><span>Figure 2: Default searching with no nested group</span></figcaption>
            <figure>
              <img
                src="../pics/whitetheme.png"
                alt="demo"
              />
            </figure>
            <figcaption><span>Figure 3: White theme with the function included in package</span></figcaption>
            <figure>
              <img
                src="../pics/fuzzysearch.png"
                alt="demo"
              />
            </figure>
            <figcaption><span>Figure 4: Fuzzy search</span></figcaption>
            <figure>
              <img
                src="../pics/applied-to-holistics.png"
                alt="demo"
              />
            </figure>
            <figcaption><span>Figure 5: Applied to Holistics Application</span></figcaption>
          </div>
        </aside>
      </section>
    </main>
    <footer>
      Make By&nbsp;<span class="highlight">Team F4</span>&nbsp;and<span
        class="highlight"
        >Holistics</span
      >
    </footer>
  </div>
</template>
<style scoped>
.main-section {
  display: flex;
  align-items: center;
  flex: 1;
  gap: 10px;
}
.sologan {
  font-size: 3rem;
  font-weight: 300;
  color: #42b883;
  line-height: 1.5;
  margin: 0;
  padding: 0;
  border: none;
}
img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 1px 2px #0000000d;
}
aside {
  flex: 1;
  padding-top: 50px;
  display: block;
}
.gwraper {
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: 50vh;
  padding: 0 10px;
  scroll-snap-type: block mandatory;
  overscroll-behavior: contain;
}
figure {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  scroll-snap-align: start;
}
figcaption {
  text-align: center;
}

/*Holistics Theme*/
/*App.vue Style*/
* {
  box-sizing: border-box;
}

body {
  margin: 0px;
}
</style>
