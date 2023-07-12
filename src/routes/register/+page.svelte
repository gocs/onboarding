<script lang="ts">
    import { applyAction, enhance } from "$app/forms";
    import { pb } from "$lib/pocketbase/db.js";
</script>

<form
    method="POST"
    class="card py-8 px-4"
    use:enhance={() =>
        async ({ result }) => {
            pb.authStore.loadFromCookie(document.cookie);
            await applyAction(result);
        }}
>
    <h1 class="text-2xl mb-8">Register</h1>
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
        <input
            type="password"
            name="passwordConfirm"
            class="input input-bordered"
            placeholder="Confirm Password"
        />
        <button class="btn btn-primary">Register</button>
    </div>
</form>
