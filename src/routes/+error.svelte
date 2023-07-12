<script>
    import { page } from "$app/stores";
</script>

<div class="hero rounded-md p-10">
    <div class="hero-content text-center">
        <div class="max-w-md flex flex-col gap-7">
            <h1 class="text-5xl font-bold">
                {$page.status}
                {$page.error?.message}
            </h1>
            <span><a href="/" class="btn btn-secondary">Go Home</a></span>
        </div>
    </div>
</div>
