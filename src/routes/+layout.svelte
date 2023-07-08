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
      <div class="dropdown dropdown-hover dropdown-end">
        {#if $currUser}
          <a
            class="bg-primary px-4 py-1.5 font-semibold"
            href="/@{$currUser.username}"
          >
            @{$currUser.username}
          </a>
          <ul
            class="dropdown-content z-[1] my-1 menu shadow-lg bg-base-100 rounded-box"
          >
            <li><a href="/@{$currUser.username}/info">info</a></li>
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
                <button>log out</button>
              </form>
            </li>
          </ul>
        {:else}
          <ul class="menu menu-horizontal">
            <li><a href="/login">login</a></li>
            <li><a href="/register">register</a></li>
          </ul>
        {/if}
      </div>
    </div>
  </div>
</div>

<div class="max-w-xl mx-auto py-8 px-4">
  <slot />
</div>
