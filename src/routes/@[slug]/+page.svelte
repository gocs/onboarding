<script lang="ts">
    import { applyAction, enhance } from "$app/forms";
    import { pb } from "$lib/pocketbase/db.js";
    import { error } from "@sveltejs/kit";
    import type { PageData } from "./$types.js";

    export let data: PageData;
    // if (!$currUser) throw error(401, "Unauthorized");
    // if ($currUser.username !== data.username) throw error(401, "Unauthorized");
</script>

<form
    method="POST"
    class="flex flex-col mt-5 mx-4 shadow-xl"
    use:enhance={() =>
        async ({ result }) => {
            if (!pb.authStore.isValid) throw error(401, "Unauthorized");
            await applyAction(result);
        }}
>
    <div class="flex join">
        <textarea
            name="content"
            class="textarea textarea-bordered w-full rounded-b-none border-b-0"
            placeholder="share your thoughts.."
        />
    </div>
    <div class="flex flex-col">
        <div class="join">
            <input
                type="file"
                multiple
                name="attacments"
                class="file-input file-input-bordered join-item w-full rounded-t-none"
            />
            <button class="btn btn-bordered join-item rounded-t-none"
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
