<script lang="ts">

    import { supabase } from "$lib/supabase";
    async function signInWithDiscord() {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: "discord",
        });
        user()
    }

    let user = async () => {console.log(await supabase.auth.getUser())} 

</script>

<!-- {#if $user}
    <div class="avatar">
        <div class="w-30 rounded-full">
            <img
            src={$user?.photoURL ?? "../../../Images/emptypfp.png"}
            alt='photoURL'
            class="mx-auto"
            />
        </div>
    </div>
    <h2>Hi {$user.displayName}</h2>
    <p class="text-center text-success">You are logged in!</p>
    <img src='../../../Gifs/congrats.gif' alt='Congratulations!'>
    <div>
        <button class="btn btn-warning mr-3" on:click={() => signOut(auth)}>Sign out</button>
        <a href="/" class="btn btn-accent">Back home</a>
    </div>
{:else} -->
    <p class="font-bold text-xl">Sign in</p>
    <button class="btn btn-primary" on:click={signInWithDiscord}>Sign in with Discord</button>
<!-- {/if} -->

