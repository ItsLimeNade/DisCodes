<script lang="ts">
    let perms = false
</script>


{#if !perms}
<div class='flex justify-center items-center h-screen'>
    <div class="card w-96 bg-base-100 shadow-xl ">
        <figure class="px-10 pt-10">
            <img src="../../../Gifs/whyareyourunning.gif" alt="gif" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
            <h2 class="card-title">Uh oh, looks like you don't have the permissions to enter here!</h2>
            <p class='text-secondary'>Don't cry... It's ok!</p>
            <div class="card-actions">
                <a class="btn btn-secondary" href="/">Go back to the home screen</a>
            </div>
        </div>
    </div>
</div>
{:else}
    <slot/>
{/if}