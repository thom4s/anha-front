<script lang="ts">
    import ExpertiseItem from '$lib/parts/Modules/ExpertiseItem.svelte';

    import { onMount } from "svelte";

    onMount(() => {

        const sections = document.querySelectorAll('.left section, .right section');
            
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {

                    // Get next section
                    const id = entry.target.id;
                    const currentSec = document.getElementById(`${id}`);
                    console.log('intere', currentSec);
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

        <div class="left">

            <button class="top" on:click={() => {designVisible = !designVisible}}>
                {leftCol.titre}
            </button>

            <div class="left-sections" class:active={productionVisible}>
                <ExpertiseItem chapo={rightCol.chapo} flexibleContents={rightCol.flexibleContents}/>
            </div>

        </div>

        <div class="right">

            <button class="top" on:click={() => {productionVisible = !productionVisible}}>
                {rightCol.titre}
            </button>

            <div class="right-sections" class:active={designVisible}>
                <ExpertiseItem chapo={leftCol.chapo} flexibleContents={leftCol.flexibleContents}/>
            </div>

        </div>
    </div>

</article>


<style lang="scss">

.wrapper {
        display: flex;
        position: relative;
        overflow-x: hidden;
    }
    .wrapper.overflow {
        height: 100vh;
        overflow: hidden;
    }

    .left, .right {
        width: 50%;
        position: relative;
    }

    .left .top, .right .top {
        all: unset;
        display: block;
        background-color: black;
        width: inherit;
        position: fixed;
        height: 100vh;
        font-size: 80px;
        font-weight: bold;
        text-align: center;
        cursor: pointer;
        color: white;
    }

    .left-sections, .right-sections {
        background-color: #808080;
        position: relative;
        z-index: 5;
        transition: 0.3s;
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

    .right section:nth-child(even) {
        background-color: #2a2a2a;
    }
</style>