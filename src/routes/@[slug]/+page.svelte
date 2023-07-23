<script lang="ts">
    import { applyAction, enhance } from "$app/forms";
    import { pb } from "$lib/pocketbase/db.js";
    import { error } from "@sveltejs/kit";
    import type { PageData } from "./$types.js";
    import Tiptap from "$lib/component/Tiptap.svelte";
    import { browser } from "$app/environment";

    export let data: PageData;
    let value = "";

    $: console.log("value 2:", value);
    
    // if (!$currUser) throw error(401, "Unauthorized");
    // if ($currUser.username !== data.username) throw error(401, "Unauthorized");
    let lang = "en-US";
    if (browser) lang = window.navigator.language;

    const MINUTE_MILLISECONDS = 1000 * 60;
    const HOUR_MILLISECONDS = MINUTE_MILLISECONDS * 60;
    const DAY_MILLISECONDS = HOUR_MILLISECONDS * 24;

    function toRelativeTime(date: string): string {
        const rtf = new Intl.RelativeTimeFormat(lang, { numeric: "auto" });

        const creation = new Date(date).getTime();
        const now = new Date().getTime();

        let daysDifference = Math.round((creation - now) / DAY_MILLISECONDS);
        let unit = "day";
        if (!daysDifference) {
            daysDifference = Math.round((creation - now) / HOUR_MILLISECONDS);
            unit = "hour";
        }
        if (!daysDifference) {
            daysDifference = Math.round((creation - now) / MINUTE_MILLISECONDS);
            unit = "minute";
        }
        return rtf.format(daysDifference, unit);
    }

    function toAutoLocalDate(date: string): string {
        return Intl.DateTimeFormat(lang, {
            timeStyle: "medium",
            dateStyle: "medium",
        }).format(new Date(date));
    }
</script>

<div
    class="flex flex-col mt-5 mx-4 shadow-md border border-gray-700/80 rounded-md"
>
    <div class="flex flex-col join border-t-gray-100 border-gray-950">
        <Tiptap bind:value />
    </div>
    <form
        method="POST"
        class="flex flex-col"
        use:enhance={() =>
            async ({ result }) => {
                if (!pb.authStore.isValid) throw error(401, "Unauthorized");
                value = "";
                await applyAction(result);
            }}
    >
        <input type="hidden" name="content" bind:value required />
        <div class="join">
            <input
                type="file"
                multiple
                name="attachments"
                class="file-input join-item w-full rounded-t-none"
            />
            <button class="btn join-item rounded-t-none">Send</button>
        </div>
    </form>
</div>

<div class="divider px-4" />

<div class="flex flex-col px-4">
    {#each data.posts as post}
        <div
            class="card card-compact bg-base-100/10 outline outline-1 outline-neutral rounded-md w-full shadow-xl mb-5"
        >
            <div class="card-body">
                <h2 class="card-title">
                    <div class="stat p-0">
                        <a
                            class="link link-accent"
                            href="/@{post.expand.poster.username}"
                        >
                            @{post.expand.poster.username}
                        </a>
                        <div
                            class="stat-desc"
                            title={toAutoLocalDate(post.updated)}
                        >
                            {toRelativeTime(post.updated)}
                        </div>
                    </div>
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
