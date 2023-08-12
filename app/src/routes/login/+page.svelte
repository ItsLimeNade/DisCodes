<script lang="ts">
    import { user, auth, db, userData, storage } from "$lib/firebase";
    import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
    import { doc, getDoc, writeBatch, updateDoc } from "firebase/firestore"
    import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

    async function signInWithGoogle() {
        const provider = new GoogleAuthProvider();
        const user = await signInWithPopup(auth, provider);

        await confirmUsername()
        await upload()
    }



async function confirmUsername() {
    console.log('ran1')
    let username = $user?.displayName
    const batch = writeBatch(db);
    batch.set(doc(db, "usernames", String(username).toLowerCase()), { uid: $user?.uid });
    batch.set(doc(db, "users", $user!.uid), { 
        username, 
        photoURL: $user?.photoURL ?? null,
        published: true,
        bio: 'I a random User',
        links: [
            {
                title: 'Discodes App',
                url: 'https://discodes.vercel.app',
            icon: 'custom'
            }
        ]
    })
    await batch.commit();
};


let previewURL: string;
    let uploading = false;

    async function upload() {
        console.log('ran2')
        uploading = true;
        const file:any = $userData?.photoURL;
        previewURL = URL.createObjectURL(file);
        const storageRef = ref(storage, `users/${$user!.uid}/profile.png`);
        const result = await uploadBytes(storageRef, file);
        const url = await getDownloadURL(result.ref);

        await updateDoc(doc(db,"users", $user!.uid), {photoURL: url});
        uploading = false; 
    }
</script>

{#if $user}
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
{:else}
    <p class="font-bold text-xl">Sign in<p>
    <button class="btn btn-primary" on:click={signInWithGoogle}>Sign in with Google</button>
{/if}

