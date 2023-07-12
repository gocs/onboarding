import { redirect, type Actions } from "@sveltejs/kit";

export const actions: Actions = {
    default: async ({ locals, request, params }) => {
        const data = Object.fromEntries(await request.formData())

        // try {
        //     await locals.pb.collection('users').authWithPassword(data.email, data.password)
        // } catch (e) {
        //     console.error("register:", e);
        //     throw e
        // }

        throw redirect(303, '/@' + params.slug)
    }
}