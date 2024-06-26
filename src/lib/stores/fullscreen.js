import { writable } from "svelte/store";

export const fullscreen = writable(false);
export const fullScreenContent = writable([]);
export const fullScreenType = writable('');

