import { currUser, pb } from "$lib/pocketbase/db.js";

pb.authStore.loadFromCookie(document.cookie)
pb.authStore.onChange(() => {
    currUser.set(pb.authStore.model)
    document.cookie = pb.authStore.exportToCookie({ httpOnly: false })
})
