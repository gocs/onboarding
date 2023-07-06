<script lang="ts">
  import { currUser, pb } from "$lib/pocketbase/db.js";
  import { applyAction, enhance } from "$app/forms";
  import "../app.postcss";
</script>

<div class="bg-neutral text-neutral-content">
  <div class="max-w-xl mx-auto navbar">
    <div class="navbar-start">
      <a href="/" class="btn btn-ghost text-xl">Onboarding</a>
    </div>
    <div class="navbar-end">
      <ul class="menu menu-horizontal">
        {#if $currUser}
          <li><a href="/">{$currUser.email}</a></li>
          <li>
            <form
              action="/logout"
              method="POST"
              use:enhance={() =>
                async ({ result }) => {
                  pb.authStore.clear();
                  await applyAction(result);
                }}
            >
              <button>Log out</button>
            </form>
          </li>
        {:else}
          <li><a href="/login">Login</a></li>
          <li><a href="/register">Register</a></li>
        {/if}
      </ul>
    </div>
  </div>
</div>

<div class="max-w-xl mx-auto py-8 px-4">
  <slot />
</div>
