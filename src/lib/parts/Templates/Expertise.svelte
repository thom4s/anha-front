<script lang="ts">
    import { onMount } from "svelte";
    import ExpertiseItem from '$lib/parts/Modules/ExpertiseItem.svelte';
    import PushContact from '../Modules/PushContact.svelte';
    


    // import { gsap } from "gsap";
    // import { ScrollToPlugin } from "gsap/ScrollToPlugin";
    import {gsap}  from "gsap/dist/gsap";        
    import {ScrollToPlugin} from "gsap/dist/ScrollToPlugin";   
    gsap.registerPlugin(ScrollToPlugin);


    onMount(() => {
        // Get sections in left and right containers
        const leftSections = gsap.utils.toArray(".left-sections section");
        const rightSections = gsap.utils.toArray(".right-sections section");
        
        // Sections index and scroll state
        let currentIndexLeft = 0;
        let currentIndexRight = 0;
        let isScrolling = false;

        // Scroll to a specific section
        function goToSection(sections, index) {
            
            isScrolling = true;

            gsap.to(window, {
                scrollTo: { y: sections[index] },
                duration: 0.85,
                onComplete: () => { isScrolling = false }
            });
        }

        // Handle mouse wheel events
        function handleScroll(event) {
            if (isScrolling) return;

            // Set active sections (left or right)
            const activeSections = productionVisible ? leftSections : (designVisible ? rightSections : []);
            if (activeSections.length === 0) return;

            // Determine current index based on active container
            let currentIndex = productionVisible ? currentIndexLeft : currentIndexRight;
            const direction = event.deltaY > 0 ? 1 : -1; // Scroll direction
            const nextIndex = currentIndex + direction;

            // Check if the next index is between the first and the last section
            if (nextIndex >= 0 && nextIndex < activeSections.length) {
                event.preventDefault();

                if (productionVisible) currentIndexLeft = nextIndex;
                else if (designVisible) currentIndexRight = nextIndex;
                
                goToSection(activeSections, nextIndex);

            }
        }

        // Handle touch start event to get initial touch position
        function handleTouchStart(event) {
            touchStartY = event.touches[0].clientY;
        }

        // Handle touch end event to determine scroll direction
        function handleTouchEnd(event) {
            if (isScrolling) return;

            // Set active sections (left or right)
            const activeSections = productionVisible ? leftSections : (designVisible ? rightSections : []);
            if (activeSections.length === 0) return;

            let currentIndex = productionVisible ? currentIndexLeft : currentIndexRight;
            let touchEndY = event.changedTouches[0].clientY;

            const direction = touchStartY > touchEndY + 5 ? 1 : touchStartY < touchEndY - 5 ? -1 : 0;
            const nextIndex = currentIndex + direction;

            // Check if the next index is between the first and the last section
            if (direction !== 0 && nextIndex >= 0 && nextIndex < activeSections.length) {
                
                if (productionVisible) currentIndexLeft = nextIndex;
                else if (designVisible) currentIndexRight = nextIndex;

                goToSection(activeSections, nextIndex);
            }
        }

        let touchStartY = 0; // Initial touch position

        window.addEventListener('wheel', handleScroll, { passive: false });
        window.addEventListener('touchstart', handleTouchStart, { passive: false });
        window.addEventListener('touchend', handleTouchEnd, { passive: false });

        return () => {
            // Remove event listeners when component is destroyed
            window.removeEventListener('wheel', handleScroll);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    });

    let designVisible = false;
    let productionVisible = false;

    export let page = {};

    $: console.log(page )

    $: ( { leftCol, rightCol } = page.contenusSavoirFaire)




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

</script>


<article>

    <div class="wrapper" class:overflow={!productionVisible && !designVisible}>

        <div class="btn-container">
            <button class="btn h1" on:click={() => {designVisible = !designVisible}}>
                <span>{leftCol.titre}</span>
                {#if rightCol.visuel }
                    <img src="{leftCol.visuel.node.sourceUrl}" alt="{leftCol.visuel.node.caption}">
                {/if}
            </button>
            <button class="btn h1" on:click={() => {productionVisible = !productionVisible}}>
                <span>{rightCol.titre}</span>
                {#if rightCol.visuel }
                    <img src="{rightCol.visuel.node.sourceUrl}" alt='{rightCol.visuel.node.caption}'>
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
                inset: 0;
                z-index: 0;
                opacity: 0;
                transition: 0.2s;

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