<script lang="ts">
  import "./Tiptap.scss";

  import StarterKit from "@tiptap/starter-kit";
  import { Editor } from "@tiptap/core";
  import { onMount } from "svelte";

  let element: HTMLDivElement;
  let editor: Editor;

  onMount(() => {
    editor = new Editor({
      element: element,
      extensions: [StarterKit],
      content: `
              <h2>
                Hi there,
              </h2>
              <p>
                this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
              </p>
              <ul>
                <li>
                  That’s a bullet list with one …
                </li>
                <li>
                  … or two list items.
                </li>
              </ul>
              <p>
                Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
              </p>
              <pre><code class="language-css">body {
          display: none;
        }</code></pre>
              <p>
                I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
              </p>
              <blockquote>
                Wow, that’s amazing. Good work, boy! 👏
                <br />
                — Mom
              </blockquote>
            `,
      onTransaction: () => {
        // force re-render so `editor.isActive` works as expected
        editor = editor;
      },
    });
  });
</script>

{#if editor}
  <div class="flex flex-wrap gap-2 p-2">
    <button
      on:click={() => console.log && editor.chain().focus().toggleBold().run()}
      disabled={!editor.can().chain().focus().toggleBold().run()}
      class={"border rounded-md px-1" +
        (editor.isActive("bold") ? " is-active" : "")}
    >
      bold
    </button>
    <button
      on:click={() => editor.chain().focus().toggleItalic().run()}
      disabled={!editor.can().chain().focus().toggleItalic().run()}
      class={"border rounded-md px-1" +
        (editor.isActive("italic") ? "is-active" : "")}
    >
      italic
    </button>
    <button
      on:click={() => editor.chain().focus().toggleStrike().run()}
      disabled={!editor.can().chain().focus().toggleStrike().run()}
      class={"border rounded-md px-1" +
        (editor.isActive("strike") ? "is-active" : "")}
    >
      strike
    </button>
    <button
      on:click={() => editor.chain().focus().toggleCode().run()}
      disabled={!editor.can().chain().focus().toggleCode().run()}
      class={"border rounded-md px-1" +
        (editor.isActive("code") ? "is-active" : "")}
    >
      code
    </button>
    <button
      class="border rounded-md px-1"
      on:click={() => editor.chain().focus().unsetAllMarks().run()}
    >
      clear marks
    </button>
    <button
      class="border rounded-md px-1"
      on:click={() => editor.chain().focus().clearNodes().run()}
    >
      clear nodes
    </button>
    <button
      on:click={() => editor.chain().focus().setParagraph().run()}
      class={"border rounded-md px-1" +
        (editor.isActive("paragraph") ? "is-active" : "")}
    >
      paragraph
    </button>
    <button
      on:click={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
      class={"border rounded-md px-1" +
        (editor.isActive("heading", { level: 1 }) ? "is-active" : "")}
    >
      h1
    </button>
    <button
      on:click={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
      class={"border rounded-md px-1" +
        (editor.isActive("heading", { level: 2 }) ? "is-active" : "")}
    >
      h2
    </button>
    <button
      on:click={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
      class={"border rounded-md px-1" +
        (editor.isActive("heading", { level: 3 }) ? "is-active" : "")}
    >
      h3
    </button>
    <button
      on:click={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
      class={"border rounded-md px-1" +
        (editor.isActive("heading", { level: 4 }) ? "is-active" : "")}
    >
      h4
    </button>
    <button
      on:click={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
      class={"border rounded-md px-1" +
        (editor.isActive("heading", { level: 5 }) ? "is-active" : "")}
    >
      h5
    </button>
    <button
      on:click={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
      class={"border rounded-md px-1" +
        (editor.isActive("heading", { level: 6 }) ? "is-active" : "")}
    >
      h6
    </button>
    <button
      on:click={() => editor.chain().focus().toggleBulletList().run()}
      class={"border rounded-md px-1" +
        (editor.isActive("bulletList") ? "is-active" : "")}
    >
      bullet list
    </button>
    <button
      on:click={() => editor.chain().focus().toggleOrderedList().run()}
      class={"border rounded-md px-1" +
        (editor.isActive("orderedList") ? "is-active" : "")}
    >
      ordered list
    </button>
    <button
      on:click={() => editor.chain().focus().toggleCodeBlock().run()}
      class={"border rounded-md px-1" +
        (editor.isActive("codeBlock") ? "is-active" : "")}
    >
      code block
    </button>
    <button
      on:click={() => editor.chain().focus().toggleBlockquote().run()}
      class={"border rounded-md px-1" +
        (editor.isActive("blockquote") ? "is-active" : "")}
    >
      blockquote
    </button>
    <button
      class="border rounded-md px-1"
      on:click={() => editor.chain().focus().setHorizontalRule().run()}
    >
      horizontal rule
    </button>
    <button
      class="border rounded-md px-1"
      on:click={() => editor.chain().focus().setHardBreak().run()}
    >
      hard break
    </button>
    <button
      class="border rounded-md px-1"
      on:click={() => editor.chain().focus().undo().run()}
      disabled={!editor.can().chain().focus().undo().run()}
    >
      undo
    </button>
    <button
      class="border rounded-md px-1"
      on:click={() => editor.chain().focus().redo().run()}
      disabled={!editor.can().chain().focus().redo().run()}
    >
      redo
    </button>
  </div>
{/if}
<div class="" bind:this={element} />
