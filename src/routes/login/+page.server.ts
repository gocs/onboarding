import { redirect, type Actions } from "@sveltejs/kit";

export const actions: Actions = {
    default: async ({ locals, request }) => {
        const data = Object.fromEntries(await request.formData()) as {
            email: string
            password: string
        }

        try {
            await locals.pb.collection('users').authWithPassword(data.email, data.password)
        } catch (e) {
            console.error("register:", e);
            throw e
        }

        throw redirect(303, '/')
    }
}