<script lang="ts">
    import { onMount } from "svelte";
    import ExpertiseItem from '$lib/parts/Modules/ExpertiseItem.svelte';
    import PushContact from '../Modules/PushContact.svelte';
    import Close from '$lib/parts/Svgs/Close.svelte';


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
            const activeSections = rightColVisible ? leftSections : (leftColVisible ? rightSections : []);
            if (activeSections.length === 0) return;

            // Determine current index based on active container
            let currentIndex = rightColVisible ? currentIndexLeft : currentIndexRight;
            const direction = event.deltaY > 0 ? 1 : -1; // Scroll direction
            const nextIndex = currentIndex + direction;

            // Check if the next index is between the first and the last section
            if (nextIndex >= 0 && nextIndex < activeSections.length) {
                event.preventDefault();

                if (rightColVisible) currentIndexLeft = nextIndex;
                else if (leftColVisible) currentIndexRight = nextIndex;
                
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
            const activeSections = rightColVisible ? leftSections : (leftColVisible ? rightSections : []);
            if (activeSections.length === 0) return;

            let currentIndex = rightColVisible ? currentIndexLeft : currentIndexRight;
            let touchEndY = event.changedTouches[0].clientY;

            const direction = touchStartY > touchEndY + 5 ? 1 : touchStartY < touchEndY - 5 ? -1 : 0;
            const nextIndex = currentIndex + direction;

            // Check if the next index is between the first and the last section
            if (direction !== 0 && nextIndex >= 0 && nextIndex < activeSections.length) {
                
                if (rightColVisible) currentIndexLeft = nextIndex;
                else if (leftColVisible) currentIndexRight = nextIndex;

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

    let leftColVisible = false, rightColVisible = false;

    export let page = {};

    $: console.log('page', page )

    $: ( { leftCol, rightCol } = page.contenusSavoirFaire)



    const animationIn = ( side, otherSide ) => { 

        console.log('animationIn: ', side, otherSide)
        let tl = gsap.timeline({onComplete: tlComplete});

        function tlComplete() {
            console.log("the tl is complete");
        }

        if( side === 'leftSide' ) {
                leftColVisible = true
        }
        else if (side === 'rightSide') {
            rightColVisible = true
        }

        // FADE OUT OTHERSIDE TITLE 
        tl.to(`#${otherSide} .btn_title`, { opacity: 0, duration: .1 });

        // BRING CONTENT TO FRONT (BUT DONT DISPLAY)
        tl.to(`#${side}Contents`, { opacity: 1, duration: 0});
        tl.to(`#${side}Contents`, { zIndex: 5, duration: 0});

        // MOVE CONTENT (BUT DONT DISPLAY)
        if( side === 'rightSide') {
            tl.to(`#${side}Contents`, { translateX: '0', duration: 1, delay: .1 });
            // DISPLAY CONTENT TITLE
            tl.to(`#${side}Contents .section_title`, { backgroundColor: '#F8F7F4', duration: .1, delay: .2}, "<");
            tl.to(`#${side}Contents`, { maxWidth: '100vw', duration: 1 });
        }
        else {
            tl.to(`#${side}Contents`, { translateX: '-50vw', duration: 1, delay: .5 });
            // DISPLAY CONTENT TITLE
            tl.to(`#${side}Contents .section_title`, { backgroundColor: '#F8F7F4', duration: .1, delay: .2 }, "<");
            tl.to(`#${side}Contents`, { maxWidth: '100vw', duration: .1 });
        }


        // DISPLAY CONTENT
        tl.to(`#${side}Contents .section_inner`, { opacity: 1, duration: .5, delay: .2 });
        tl.to(`#${side}Contents .section_title h2`, { opacity: 1, duration: .1 });
        tl.to(`#${side} .btn_title_clone`, { opacity: 1, duration: .1 });

        // START
        if (tl.progress() < 1) {
            tl.play();
        } else {
            tl.restart();
        }
    }

    const animationOut = ( side, otherSide ) => { 

        console.log('animationIn: ', side)
        let tl = gsap.timeline({onComplete: tlComplete});

        function tlComplete() {
            console.log("the tl is complete");
            if( side === 'leftSide' ) {
                leftColVisible = false
            }
            else if (side === 'rightSide') {
                rightColVisible = false
            }
        }

        // HIDE CONTENT
        tl.to(`#${side}Contents .section_inner`, { opacity: 0, duration: .5, delay: .2 });
        tl.to(`#${side}Contents .section_title h2`, { opacity: 0, duration: .5 });
        tl.to(`#${side} .btn_title_clone`, { opacity: 0, duration: .5 });

        // HIDE CONTENT TITLE
        tl.to(`#${side}Contents .section_title`, { backgroundColor: '', duration: .1, delay: .1 });

        // MOVE CONTENT OUT
        if( side === 'rightSide') {
            tl.to(`#${side}Contents`, { maxWidth: '50vw', duration: 1 });
            tl.to(`#${side}Contents`, { translateX: '0', duration: .1, delay: .5 });
        }
        else {
            tl.to(`#${side}Contents`, { translateX: '0', duration: 1 });
            tl.to(`#${side}Contents`, { maxWidth: '50vw', duration: .1 });
        }

        // SEND CONTENT TO BACK
        tl.to(`#${side}Contents`, { opacity: 0, duration: 0});
        tl.to(`#${side}Contents`, { zIndex: -1, duration: 0});

        // FADE IN OTHERSIDE TITLE 
        tl.to(`#${otherSide} .btn_title`, { opacity: 1, duration: .1 });

        // START
        if (tl.progress() < 1) {
            tl.play();
        } else {
            tl.restart();
        }

    }


</script>


<article>

    <div class="wrapper" class:overflow={!rightColVisible && !leftColVisible} >

        <div class="btn-container">

            <button 
                id="leftSide" 
                class="btn h1 left" 
                class:active={leftColVisible} 
                on:click={ () => {
                    animationIn( 'leftSide', 'rightSide' )
                } }
            >
                <span class="btn_title">{leftCol.titre}</span>
            </button>

            <button 
                id="rightSide" 
                class="btn h1 right" 
                class:active={rightColVisible} 
                on:click={() => {
                    animationIn('rightSide', 'leftSide' )
                }}
            >
                <span class="btn_title">{rightCol.titre}</span>
            </button>

        </div>


        <div class="sec-container">
            <div id="rightSideContents" class="right-sections" class:active={rightColVisible}>

                <div class="section_title">
                    <h2 class="btn_title_clone">{rightCol.titre}</h2>
                </div>

                <div class="section_inner">
                    <button 
                        on:click={ () => {
                            animationOut('rightSide', 'leftSide')
                        } }
                        class="btn_clean menus_close_btn"
                        class:active={rightColVisible}
                    >
                        <Close />
                    </button>
                    <div class="btn_title_mobile fl-column">
                        <span class="caption ">{rightCol.titre}</span>
                    </div>
                    <ExpertiseItem chapo={rightCol.chapo} visuel={rightCol.visuel} flexibleContents={rightCol.contenusFlexibles} design="left" />
                </div>
            </div>

            <div id="leftSideContents" class="left-sections" class:active={leftColVisible}>

                <div class="section_title">
                    <h2 class="btn_title_clone">{leftCol.titre}</h2>
                </div>

                <div class="section_inner">
                    <button 
                        class="btn_clean menus_close_btn"
                        on:click={ () => {
                            animationOut('leftSide', 'rightSide' )
                        } }
                    >
                        <Close />
                    </button>
                    <div class="btn_title_mobile fl-column">
                        <span class="caption ">{leftCol.titre}</span>
                    </div>
                    <ExpertiseItem chapo={leftCol.chapo} visuel={leftCol.visuel}  flexibleContents={leftCol.contenusFlexibles} design="right"/>
                </div>
            </div>
        </div>

    </div>

</article>

<PushContact />


<style lang="scss">

    $space_for_title : 140px;
    $space_for_title_mobile : 20px;

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

            .btn_title {
                @include max(bigtablet) {
                    text-orientation: sideways;
                    writing-mode: sideways-lr;

                }
            }

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
                display: inline-block;
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
            position: relative;
            z-index: -1;
            overflow-x: hidden;
            opacity: 0;
            background-color: $light-bg2;
            display: flex;
        }

        $sectionTitleWidth: 115px;

        .section_title {
            padding: $gutter;
            flex: 0 0 $sectionTitleWidth;
            min-width: $sectionTitleWidth;

            h2 {
                margin: 0;
                opacity: 0;
            }
        }
        .section_inner {
            opacity: 0;
        }

        .left-sections {
            flex: 0 0 auto;
            max-width: 50vw;

            .btn_title_clone {
                writing-mode: sideways-lr;
            }
        }
        .right-sections {
            flex: 0 0 auto;
            flex-direction: row-reverse;
            max-width: 50vw;

            .btn_title_clone {
                writing-mode: sideways-rl;
            }
        }

        .btn_title_mobile {
            @include min(tablet) {
                 display: none;
            }
 
            @include max(bigtablet) {
                padding: $space-xl 0 0 $space-m;
                margin-bottom: - $space-s;
            }
        }
        .menus_close_btn {
            position: absolute;
            top: 20px;

            @include min(bigtablet) {
                width: 30px;
                height: 30px;
            }
            @include max(bigtablet) {
                width: 20px;
                height: 20px;
            }
            .right-sections & {
                right: $sectionTitleWidth + 20px;
            }
            .left-sections & {
                left: $sectionTitleWidth + 20px;
            }
        }
        


</style>