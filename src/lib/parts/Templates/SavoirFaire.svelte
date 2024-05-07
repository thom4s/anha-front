<script lang="ts">
    import ExpertiseItem from '$lib/parts/Modules/ExpertiseItem.svelte';

    export let page = {};

    $: console.log(page )
    $: ( { leftCol, rightCol } = page.contenusSavoirFaire)

</script>


<article>

    <div class="grid">
        <div class="m_6column ">
            <ExpertiseItem position="leftCol" title={leftCol.titre} chapo={leftCol.chapo} flexibleContents={leftCol.flexibleContents}/>
        </div>

        <div class="m_6column ">
            <ExpertiseItem position="rightCol" title={rightCol.titre} chapo={rightCol.chapo} flexibleContents={rightCol.flexibleContents}/>
        </div>
    </div>

</article>


<style lang="scss">

</style>