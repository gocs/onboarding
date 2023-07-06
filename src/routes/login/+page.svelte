<script lang="ts">
    import { applyAction, enhance } from "$app/forms";
    import { pb } from "$lib/pocketbase/db.js";
</script>

<form
    method="POST"
    class="card"
    use:enhance={() =>
        async ({ result }) => {
            pb.authStore.loadFromCookie(document.cookie);
            await applyAction(result);
        }}
>
    <h1 class="text-2xl mb-8">Log in</h1>
    <div class="form-control gap-2 mb-4">
        <input
            type="email"
            name="email"
            class="input input-bordered"
            placeholder="Email"
        />
        <input
            type="password"
            name="password"
            class="input input-bordered"
            placeholder="Password"
        />
        <button class="btn btn-primary">Log in</button>
    </div>
</form>
