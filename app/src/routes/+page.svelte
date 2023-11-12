<script lang="ts">
	import { onMount } from "svelte";
    onMount(async () => {
        document.getElementById("title")?.classList.add("opacity-100")
        document.getElementById("title")?.classList.add("-translate-y-40")
        document.getElementById("plans")?.classList.add("-translate-y-40")
        document.getElementById("plans")?.classList.add("opacity-100")
        document.getElementById("roadmap")?.classList.add("opacity-100")
        document.getElementById("roadmap")?.classList.add("translate-y-[-100px]")
        setTimeout(() =>{
            document.getElementById("joinbutton")?.classList.add("duration-[1000ms]")
            document.getElementById("joinbutton")?.classList.add("opacity-100")
        }, 2000)
        setTimeout(() => {
            document.getElementById("joinbutton")?.classList.replace("duration-[1000ms]", "duration-[200ms]")
        }, 3000)
        
    })
</script>


<div class="flex flex-col items-center justify-center h-screen">
        <h1 id="title" class="font-bold text-4xl pb-3 duration-[1500ms] ease-in-out opacity-0">Welcome To Discodes</h1>
        <h3 id="plans" class="font-bold text-2xl text-primary opacity-0 duration-[1800ms] ease-in-out">Our plans:</h3>

        <ul id="roadmap" class="steps duration-[2000ms] ease-in-out opacity-0">
            <li class="step step-primary">Website layout</li>
            <li class="step step-base-100">Basic Bot Maker</li>
            <li class="step step-base-100">Marketplace</li>
            <li class="step step-base-100">Shared Workspaces</li>
            <li class="step step-base-100 pb-5" data-content="?">Account System</li>
        </ul>
        <div class="translate-y-[-50px]">
            <a id="joinbutton" class="btn btn-primary opacity-0 ease-in-out" href='https://s4d.discodes.xyz'>Go test it now!</a>
        </div>
        
        <footer class="text-gray-600 absolute bottom-1 left-1">Last updated : 12/11/23</footer>
</div>
