<script lang="ts">
	import { onMount } from 'svelte';

	onMount(async () => {
		document.getElementById('title')?.classList.add('opacity-100');
		document.getElementById('title')?.classList.add('-translate-y-40');
		document.getElementById('plans')?.classList.add('-translate-y-40');
		document.getElementById('plans')?.classList.add('opacity-100');
		document.getElementById('roadmap')?.classList.add('opacity-100');
		document.getElementById('roadmap')?.classList.add('translate-y-[-100px]');
		setTimeout(() => {
			document.getElementById('joinbutton')?.classList.add('duration-[1000ms]');
			document.getElementById('preview')?.classList.add('duration-[2000ms]');

			document.getElementById('joinbutton')?.classList.add('opacity-100');
			document.getElementById('preview')?.classList.add('opacity-100');
		}, 2000);
		setTimeout(() => {
			document
				.getElementById('joinbutton')
				?.classList.replace('duration-[1000ms]', 'duration-[200ms]');
			document
				.getElementById('preview')
				?.classList.replace('duration-[2000ms]', 'duration-[200ms]');
		}, 3000);
	});
</script>

<!-- <div class="scrollbar-hide"> -->
<div class="flex flex-col items-center justify-center h-screen">
	<h1 id="title" class="font-bold text-4xl pb-3 duration-[1500ms] ease-in-out opacity-0">
		Welcome To Discodes
	</h1>
	<h3 id="plans" class="font-bold text-2xl text-primary opacity-0 duration-[1800ms] ease-in-out">
		Our plans:
	</h3>

	<ul id="roadmap" class="steps duration-[2000ms] ease-in-out opacity-0">
		<li class="step step-primary">Website layout</li>
		<li class="step step-base-100">Basic Bot Maker</li>
		<li class="step step-base-100">Marketplace</li>
		<li class="step step-base-100">Shared Workspaces</li>
		<li class="step step-base-100 pb-5" data-content="?">Account System</li>
	</ul>
	<div class="translate-y-[-50px]">
		<a id="joinbutton" class="btn btn-primary opacity-0 ease-in-out" href="/create">
			Go test it now!
		</a>
	</div>
	<div class="translate-y-[-50px] pt-5">
		<!-- <button id="preview" class="btn btn-secondary opacity-0 ease-in-out" on:click={() => window.scrollTo({top: document.getElementById("preview_window")?.getBoundingClientRect().top, behavior: "smooth"})}>
            Try a preview
        </button> -->
	</div>
	<footer class="text-gray-600 absolute bottom-1 left-1">Last updated : 12/11/23</footer>
</div>

<!-- <div class="flex flex-col items-center translate-y-[-80px]">
	<button class="down-arrow" on:click={() => {
		window.scrollTo({top: document.getElementById("preview_window")?.getBoundingClientRect().top, behavior: "smooth"})
		addWorkspace()} }></button>
</div>

<div id="div_ws" class="flex flex-col items-center">
    <h3 class="font-bold text-2xl text-secondary pb-5">Preview</h3>
    <embed id="preview_window" src="http://s4d.discodes.xyz" class="w-[95vw] h-[92vh] pb-5">
</div>
</div> -->

<style>
	/* .down-arrow {
		position: absolute;
		width: 0;
		height: 30px;
		border: 2px solid;
		border-radius: 2px;
		animation: jumpInfinite 1.5s infinite;
	}

	.down-arrow:after {
		content: " ";
		position: absolute;
		top: 12px;
		left: -8px;
		width: 16px;
		height: 16px;
		border-bottom: 4px solid;
		border-right: 4px solid;
		border-radius: 4px;
		transform: rotateZ(45deg);
	} */

	@keyframes jumpInfinite {
		0% {
			margin-top: 0;
		}
		50% {
			margin-top: 20px;
		}
		100% {
			margin-top: 0;
		}
	}
</style>
