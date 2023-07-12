import { pb } from '$lib/pocketbase/db.js';
import { error } from '@sveltejs/kit';
import type { ListResult, Record } from 'pocketbase';

export interface Post extends Record {
    id: string
    content: string
    poster: string
    attachments: string[]
}

export const load = async ({ params }) => {
    if (pb.authStore.model?.username != params.slug) {
        throw error(401, "Unauthorized");
    }

    const user: Record = await pb.collection('users').getFirstListItem(`username="${params.slug}"`)
    const posts: ListResult<Post> = await pb.collection('post').getList<Post>(1, 50, {
        filter: `poster="${user.id}"`
    })

    return { posts: posts.items, user: user }
}