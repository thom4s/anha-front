<script lang="ts">
    import ExpertiseItem from '$lib/parts/Modules/ExpertiseItem.svelte';
    import PushContact from '../Modules/PushContact.svelte';
    
    import { onMount } from "svelte";

    onMount(() => {

        const sections = document.querySelectorAll('.left-sections section, .right-sections  section');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
    
                    // Get next section
                    const id = entry.target.id;
                    const currentSec = document.getElementById(`${id}`);
                    // currentSec.scrollIntoView({ behavior: "smooth", block: "start" })
    
                    // Scroll to next section
                    window.scrollTo({
                        top: currentSec.offsetTop,
                        behavior: "smooth",
                    });
                }
            });
        }, {
            root: null,
            rootMargin: `0px`,
            threshold: 0.1
        });
    
        sections.forEach((el) => observer.observe(el));

    });

    let designVisible = false;
    let productionVisible = false;

    export let page = {};

    $: console.log(page )

    $: ( { leftCol, rightCol } = page.contenusSavoirFaire)

</script>


<article>

    <div class="wrapper" class:overflow={!productionVisible && !designVisible}>

        <div class="btn-container">
            <button class="btn" on:click={() => {designVisible = !designVisible}}>{leftCol.titre}</button>
            <button class="btn" on:click={() => {productionVisible = !productionVisible}}>{rightCol.titre}</button>
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
            all: unset;
            display: block;
            width: 50%;
            height: 100%;
            font-size: 80px;
            cursor: pointer;
            text-align: center;
            background-color: #000000;
            color: white;

            &:hover {
                font-style: italic;
            }
        }

    .sec-container {
        display: flex;
        margin-top: -100vh;
        overflow: hidden;
    }
        .left-sections, .right-sections {
            background-color: white;
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

        section {
            padding: 50px;
            height: 100vh;
            /* scroll-snap-align: center; */
        }
        section:nth-child(even) {
            background-color: #2a2a2a;
        }

</style>