<script lang="ts">
    import Tiptap from "$lib/component/Tiptap.svelte";

    let value = "";
</script>

<main>
    <Tiptap bind:value />
</main>

{value}
