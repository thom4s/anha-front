<script>
    import PushContact from '$lib/parts/Modules/PushContact.svelte';
    import PushNews from './Modules/PushNews.svelte';
    import PushPages from '$lib/parts/Modules/PushPages.svelte';
    import PushProjets from './Modules/PushProjets.svelte';
    import References from '$lib/parts/Modules/References.svelte';
    import RichText from './Modules/RichText.svelte';
    import TabExpertise from './Modules/TabExpertise.svelte';
    import Video from './Modules/Video.svelte';

    export let contenusFlexibles = [];

    $: console.log('contenusFlexibles: ', contenusFlexibles)
</script>


    {#each contenusFlexibles as layout}
        {#if layout.__typename }

            {#if layout.__typename === 'ContenusFlexiblesContenusFlexiblesPushcontactLayout'}
                <PushContact titre={layout.titre} text={layout.text} labelDuBouton={layout.labelDuBouton}/>

            {:else if layout.__typename === 'ContenusFlexiblesContenusFlexiblesPushnewsLayout'}
                <PushNews titre={layout.titre} pages={layout.news?.nodes}/>

            {:else if layout.__typename === 'ContenusFlexiblesContenusFlexiblesPushpagesLayout'}
                <PushPages titre={layout.titre} pages={layout.pages?.nodes}/>

            {:else if layout.__typename === 'ContenusFlexiblesContenusFlexiblesPushprojetsLayout'}
                <PushProjets titre={layout.titre} pages={layout.projets?.nodes}/>

            {:else if layout.__typename === 'ContenusFlexiblesContenusFlexiblesReferencesLayout'}
                <References titre={layout.titre} logos={layout.logos?.nodes} />

            {:else if layout.__typename === 'ContenusFlexiblesContenusFlexiblesRichtextLayout'}
                <RichText titre={layout.titre} contentOne={layout.contentOne} contentTwo={layout.contentTwo} />

            {:else if layout.__typename === 'ContenusFlexiblesContenusFlexiblesTabExpertiseLayout'}
                <TabExpertise titre={layout.titre} contenus={layout.contenus} />

            {:else if layout.__typename === 'ContenusFlexiblesContenusFlexiblesVideoLayout'}
                <Video titre={layout.titre} video={layout.video} />

            {/if}
            
        {/if}
    {/each}

