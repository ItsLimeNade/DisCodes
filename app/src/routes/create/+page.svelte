<!-- TODO DISPLAY A THUMBNAIL THAT REPRESENTS THE INSIDE OF THE WORKSPACE BY TAKING A SCREENSHOT OR LIKE UHM
  TODO USE THE SVG EXPORT FEATURE FROM S4D (STEALING TIME HEHEHEHE) -->
<script lang="ts">
	import { browser } from '$app/environment';
	import { ConfigManager } from '$lib/configManager';
	import type { workspaceFile } from '$lib/interfaces';
	import { onMount } from 'svelte';

  let workspaceFiles: Array<workspaceFile> = []
  let config: ConfigManager
  onMount(() => {
    config = new ConfigManager();
    workspaceFiles = config.config.workspaces[0].files
  })


  function addFile(): void {
    let newConfig = config.config
    newConfig.workspaces[0].files.push({
      name: "Introduction",
      description: "An introduction to coding with discodes!",
      createdAt: new Date(),
      lastEdited: new Date(),
      blocklyWorkspace: undefined
    })
    workspaceFiles = newConfig.workspaces[0].files
    config.config = newConfig
  }

  function deleteFile(fileIndex: number): void {
    let newConfig = config.config
    workspaceFiles.slice(fileIndex, 1)
    newConfig.workspaces[0].files.slice(fileIndex, 1)
    config.config = newConfig
  }
</script>

<div class="flex items-center justify-center h-screen gap-10">
  {#if browser}
    {#each workspaceFiles as file, i}
      <div
      class="card card-compact w-96 bg-base-200 shadow-xl border border-black duration-[400ms] hover:border-white hover:scale-105"
    >
      <figure><img src="/images/create_thumb.png" alt="Shoes" /></figure>
      <div class="card-body">
        <h2 class="card-title">{file.name}</h2>
        <p>{file.description}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary" on:click={() => deleteFile(0)}>Edit</button>
        </div>
      </div>
    </div>

    {/each}
  {/if}

  <div
    class="card card-compact w-96 bg-base-200 shadow-xl border border-black duration-[400ms] hover:border-white hover:scale-105"
  >
    <figure><img src="/images/create_thumb.png" alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title">New File</h2>
      <p>Create a new blockly file, the discord.js library is installed by default.</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary" on:click={() => addFile()}>Create</button>
      </div>
    </div>
  </div>

</div>
