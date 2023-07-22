<script lang="ts">
    import { applyAction, enhance } from "$app/forms";
    import { pb } from "$lib/pocketbase/db.js";
    import { error } from "@sveltejs/kit";
    import type { PageData } from "./$types.js";
    import Tiptap from "$lib/component/Tiptap.svelte";

    export let data: PageData;
    let value = "";
    // if (!$currUser) throw error(401, "Unauthorized");
    // if ($currUser.username !== data.username) throw error(401, "Unauthorized");
</script>

<form
    method="POST"
    class="flex flex-col mt-5 mx-4 shadow-md border border-gray-700/80 rounded-md"
    use:enhance={() =>
        async ({ result }) => {
            if (!pb.authStore.isValid) throw error(401, "Unauthorized");
            await applyAction(result);
        }}
>
    <div class="flex flex-col join border-t-gray-100 border-gray-950">
        <input type="hidden" name="content" bind:value required />
        <Tiptap bind:value />
    </div>
    <div class="flex flex-col">
        <div class="join">
            <input
                type="file"
                multiple
                name="attachments"
                class="file-input join-item w-full rounded-t-none"
            />
            <button class="btn join-item rounded-t-none"
                >Send</button
            >
        </div>
    </div>
</form>

<div class="divider px-4" />

<div class="flex flex-col px-4">
    {#each data.posts as post}
        <div
            class="card card-compact bg-base-100/10 outline outline-1 outline-neutral rounded-md w-full shadow-xl mb-5"
        >
            <div class="card-body">
                <h2 class="card-title">
                    <a class="link link-accent" href="/@{data.user.username}">
                        @{data.user.username}
                    </a>
                </h2>
                <p>{@html post.content}</p>
            </div>
            <div class="flex flex-col p-1 gap-1">
                {#each post.attachments as attachment}
                    <figure class="p-2">
                        <img
                            src={`http://127.0.0.1:8090/api/files/27vkheyfmc1ff3u/${post.id}/${attachment}`}
                            alt="img"
                            class="w-full rounded-md"
                        />
                    </figure>
                {/each}
            </div>
        </div>
    {/each}
</div>
