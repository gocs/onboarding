import { redirect, type Actions } from "@sveltejs/kit";

export const actions: Actions = {
    default: async ({ locals, request, params }) => {
        const data = Object.fromEntries(await request.formData()) as {
            content: string
            attachments: any
            poster: string
        }
        if (!data.content) throw redirect(303, '/@' + params.slug)

        data["poster"] = locals.user!.id

        try {
            const record = await locals.pb.collection('post').create(data);
        } catch (e) {
            console.error("post:", e);
            throw e
        }

        throw redirect(303, '/@' + params.slug)
    }
}