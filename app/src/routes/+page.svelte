<script lang="ts">
	import { Auth } from '@supabase/auth-ui-svelte'
	import { ThemeSupa } from '@supabase/auth-ui-shared'

    export let data
</script>

<div class="flex flex-col items-center justify-center h-screen">
<h1 class="text-3xl font-bold underline text-[45px] mb-2">DisCodes</h1>
<h3 class="text-center font-bold mt-4 mb-2">The best place for your discord bot</h3>
    <a class="btn btn-accent" href="/login">Let's Go!</a>
</div>
