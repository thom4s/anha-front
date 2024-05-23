<script lang="ts">
    import ExpertiseItem from '$lib/parts/Modules/ExpertiseItem.svelte';
    import PushContact from '../Modules/PushContact.svelte';
    
    import { onMount } from "svelte";

    // onMount(() => {

    //     const sections = document.querySelectorAll('.left-sections section, .right-sections  section');
        
    //     const observer = new IntersectionObserver((entries) => {
    //         entries.forEach(entry => {
    //             if (entry.isIntersecting) {
    
    //                 // Get next section
    //                 const id = entry.target.id;
    //                 const currentSec = document.getElementById(`${id}`);
    //                 // currentSec.scrollIntoView({ behavior: "smooth", block: "start" })
    
    //                 // Scroll to next section
    //                 window.scrollTo({
    //                     top: currentSec.offsetTop,
    //                     behavior: "smooth",
    //                 });
    //             }
    //         });
    //     }, {
    //         root: null,
    //         rootMargin: `0px`,
    //         threshold: 0.1
    //     });
    
    //     sections.forEach((el) => observer.observe(el));

    // });

    let designVisible = false;
    let productionVisible = false;

    export let page = {};

    $: console.log(page )

    $: ( { leftCol, rightCol } = page.contenusSavoirFaire)

</script>


<article>

    <div class="wrapper" class:overflow={!productionVisible && !designVisible}>

        <div class="btn-container">
            <button class="btn h1" on:click={() => {designVisible = !designVisible}}>
                <span>{leftCol.titre}</span>
                {#if rightCol.visuel }
                    <img src="{leftCol.visuel.node.sourceUrl}">
                {/if}
            </button>
            <button class="btn h1" on:click={() => {productionVisible = !productionVisible}}>
                <span>{rightCol.titre}</span>
                {#if rightCol.visuel }
                    <img src="{rightCol.visuel.node.sourceUrl}">
                {/if}
            </button>
        </div>


        <div class="sec-container">
            <div class="left-sections" class:active={productionVisible}>
                <ExpertiseItem chapo={rightCol.chapo} flexibleContents={rightCol.flexibleContents}/>
            </div>

            <div class="right-sections" class:active={designVisible}>
                <ExpertiseItem chapo={leftCol.chapo} flexibleContents={leftCol.flexibleContents}/>
            </div>
        </div>

    </div>

</article>

<PushContact />


<style lang="scss">

    .wrapper.overflow {
        height: 100vh;
        overflow: hidden;
    }

    .btn-container {
        display: flex;
        height: 100vh;
        width: 100%;
        position: sticky;
        top: 0;
    }
        .btn {
            border: none;   
            background-color: unset;
            display: block;
            width: 50%;
            height: 100%;
            font-size: 80px;
            text-align: center;
            cursor: pointer;
            position: relative;

            &:first-child {
                border-right: 0.5px solid $dark-font;
            }
            &:last-child {
                border-left: 0.5px solid $dark-font;
            }

            &:hover {
                font-style: italic;
                img {
                    opacity: 1;
                }
            }
            span {
                position: relative;
                z-index: 1;
            }
            img {
                position: absolute;
                height: 100%;
                width: 100%;
                object-fit: cover;
                top: 0;
                right: 0;
                left: 0;
                bottom: 0;
                z-index: 0;
                opacity: 0;
            }
        }

    .sec-container {
        display: flex;
        margin-top: -100vh;
        overflow: hidden;
    }
        .left-sections, .right-sections {
            background-color: $light-bg2;
            position: relative;
            z-index: 5;
            width: 50%;
            transition: 0.3s ease-in-out;
            transform: translateX(0);
        }
        .left-sections {
            transform: translateX(-100%);
        }
        .right-sections {
            transform: translateX(100%);
        }
        .left-sections.active, .right-sections.active {
            transform: translateX(0);
        }

</style>