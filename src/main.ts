import { invoke } from "@tauri-apps/api/tauri";

let greetInputEl: HTMLInputElement | null;
let greetMsgEl: HTMLElement | null;
let searchBarEl: HTMLInputElement | null;

async function greet() {
  if (greetMsgEl && greetInputEl) {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    greetMsgEl.textContent = await invoke("greet", {
      name: greetInputEl.value,
    });
  }
}

async function search() {
    if (searchBarEl && greetMsgEl) {
        greetMsgEl.textContent = await invoke("greet", {
            name: searchBarEl.value,
          });
    }
}

window.addEventListener("DOMContentLoaded", () => {
  greetInputEl = document.querySelector("#greet-input");
  greetMsgEl = document.querySelector("#greet-msg");
  searchBarEl = document.querySelector("#search-bar")

  document
    .querySelector("#search-button")
    ?.addEventListener("click", () => search());
});
