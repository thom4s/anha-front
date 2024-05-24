<script>
    import { page } from '$app/stores';
</script>

<main>

    <div class="notFound-container wrapper flex-vertical gap-s">
        
        <h1 class="status-code">{$page.status}</h1>
        <h2 class="h2">{$page.error.message}</h2>

        <div class="actions flex-center gap-l">
            <a class="btn btn_secondary" href="#" data-sveltekit-reload>Try to reload first</a>
            <a class="btn btn_secondary" href={ ($page.error.link) ? $page.error.link : '/'} data-sveltekit-prefetch>No ? Ok, go back</a>
        </div>
    </div>

</main>

<style lang="scss">

    .notFound-container {
        align-items: center;
        justify-content: center;
    }
    
    .status-code {
        font-size: 125px;
        color: $black;
        font-weight: $font-b;
    }
    .h2 {
        font-size: 24px;
    }
    .actions {
        margin-top: 80px;
    }

</style>