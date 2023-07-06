import { PUBLIC_POCKETBASE_URL } from "$env/static/public"
import PocketBase from "pocketbase"
import { writable } from "svelte/store"

export const pb = new PocketBase(PUBLIC_POCKETBASE_URL)
export const currUser = writable(pb.authStore.model)
