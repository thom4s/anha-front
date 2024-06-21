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

        // window.addEventListener('wheel', handleScroll, { passive: false });
        // window.addEventListener('touchstart', handleTouchStart, { passive: false });
        // window.addEventListener('touchend', handleTouchEnd, { passive: false });

        // return () => {
        //     // Remove event listeners when component is destroyed
        //     window.removeEventListener('wheel', handleScroll);
        //     window.removeEventListener('touchstart', handleTouchStart);
        //     window.removeEventListener('touchend', handleTouchEnd);
        // };
    });

    let designVisible = false;
    let productionVisible = false;

    export let page = {};

    $: console.log('page', page )

    $: ( { leftCol, rightCol } = page.contenusSavoirFaire)

</script>


<article>

    <div class="wrapper" class:overflow={!productionVisible && !designVisible}>

        <div class="btn-container">

            <button class="btn h1 left" class:active={designVisible} on:click={() => {designVisible = !designVisible}}>
                <span class="btn_title_clone">{leftCol.titre}</span>
                <span class="btn_title">{leftCol.titre}</span>
            </button>

            <button class="btn h1 right"  class:active={productionVisible} on:click={() => {productionVisible = !productionVisible}}>
                <span class="btn_title_clone">{rightCol.titre}</span>
                <span class="btn_title">{rightCol.titre}</span>
            </button>

        </div>


        <div class="sec-container">
            <div class="left-sections" class:active={productionVisible}>
                <ExpertiseItem chapo={rightCol.chapo} visuel={rightCol.visuel} flexibleContents={rightCol.contenusFlexibles} design="left" />
            </div>

            <div class="right-sections" class:active={designVisible}>
                <ExpertiseItem chapo={leftCol.chapo} visuel={leftCol.visuel}  flexibleContents={leftCol.contenusFlexibles} design="right"/>
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
            background-color: $light-bg2;
            display: block;
            width: 50%;
            height: 100%;
            font-size: 80px;
            text-align: center;
            cursor: pointer;
            position: relative; 

            &:not(.active):hover {
                .btn_title {
                    font-style: italic;
                }
                background-color: $white;
            }
            span {
                position: relative;
                transition: all .3s;
                z-index: 1;
            }
            .btn_title_clone {
                opacity: 0;
                transition: opacity .3s;
                position: absolute;
                top: 105px;
                text-orientation: sideways;
            }
            &.left .btn_title_clone {
                left: 0;
                writing-mode: sideways-lr;
            }
            &.right .btn_title_clone {
                right: 0;
                writing-mode: sideways-rl;
            }
            &.active {
                background-color: $white;
                .btn_title_clone {
                    opacity: 1;
                }
            }
            &.active {
                .btn_title {
                    opacity: 0;
                }
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
            max-width: 0px;
            transition: transform 0.3s ease-in-out, width 0.3s ease-in-out;
            transform: translateX(0);
            overflow-x: hidden;
            
        }
        .left-sections {
            transform: translateX(-40vw);

            
        }
        .right-sections {
            transform: translateX(40vw);
        }
        .left-sections.active, .right-sections.active {
            transform: translateX(0);
            max-width: 90vw;
            width: 90vw;
        }
        .left-sections.active {
            margin-right: 10vw;
        }
        .right-sections.active {
            margin-left: 10vw;
        }
        

</style>