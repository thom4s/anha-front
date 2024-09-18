<script lang="ts">
    import ExpertiseItem from '$lib/parts/Modules/ExpertiseItem.svelte';
    import PushContact from '../Modules/PushContact.svelte';
    import IconClose from '$lib/parts/Svgs/IconClose.svelte';
    import {device} from '$lib/stores/device.js';


    export let page = {};
    $: console.log('page', page )


    $: ( { leftCol, rightCol } = page.contenusSavoirFaire)
    let leftColVisible = false, rightColVisible = false;


    // ANIMATIONS
    import {gsap}  from "gsap/dist/gsap";        
    import {ScrollToPlugin} from "gsap/dist/ScrollToPlugin";   
    gsap.registerPlugin(ScrollToPlugin);

    const animationIn = ( side, otherSide ) => { 

        console.log('animationIn: ', side, otherSide, $device)
        let tl = gsap.timeline({onComplete: tlComplete});

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });

        function tlComplete() {
            console.log("the tl is complete");
        }

        if( side === 'leftSide' ) {
            leftColVisible = true
        }
        else if (side === 'rightSide') {
            rightColVisible = true
        }

        if( $device === 'mobile' || $device === 'tablet' ) {
            tl.to(`#${otherSide}`, { backgroundColor: '#F4F2EB', duration: 0});
        }

        // FADE OUT OTHERSIDE TITLES 
        tl.to(`#${otherSide} .btn_title`, { opacity: 0, duration: .1 });
        tl.to(`#${side} .btn_title`, { opacity: 0, duration: .1 });

        // BRING CONTENT TO FRONT (BUT DONT DISPLAY)
        tl.to(`#${side}Contents`, { opacity: 1, duration: 0});
        tl.to(`#${side}Contents`, { zIndex: 5, duration: 0});

        // MOVE CONTENT (BUT DONT DISPLAY)
        if( side === 'rightSide') {
            tl.to(`#${side}Contents`, { translate: '0', duration: .5, delay: .1 });
            tl.to(`#${side}Contents`, {
                maxWidth: '93vw', 
                duration: .5
            });
            tl.to(`#${side}Contents`, {
                maxWidth: '93vw', 
                duration: .1,
                modifiers: {
                    maxWidth: function() {
                        return $device === 'mobile' || $device === 'tablet' ? 'calc(100vw - 30px)' : 'calc(100vw - 120px)';
                    }
                }
            });
        }
        else {
            tl.to(`#${side}Contents`, { translate: '-43vw', duration: .5, delay: .5 });
            tl.to(`#${side}Contents`, { translate: '-43vw', duration: .1,
                modifiers: {
                    translate: function() {
                        return $device === 'mobile' || $device === 'tablet' ? 'calc(-50vw + 30px)' : 'calc(-50vw + 120px)';
                    }
                }
            });
            tl.to(`#${side}Contents`, { maxWidth: '93vw', duration: .1,
                modifiers: {
                    maxWidth: function() {
                        return $device === 'mobile' || $device === 'tablet' ? 'calc(100vw - 30px)' : 'calc(100vw - 120px)';
                    }
                }
            });
        }

        // DISPLAY CONTENT
        tl.to(`#${side}Contents .section_inner`, { opacity: 1, duration: .5, delay: .2 });
        tl.to(`#${side} .btn_title_clone`, { opacity: 1, duration: .1 }, "<");

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

        if( $device === 'mobile' || $device === 'tablet') {
            tl.to(`#${otherSide}`, { backgroundColor: '#F8F7F4', duration: 0});
        }
        
        // HIDE CONTENT
        tl.to(`#${side}Contents .section_inner`, { opacity: 0, duration: .5, delay: .2 });
        tl.to(`#${side} .btn_title_clone`, { opacity: 0, duration: .5 }, "<");

        // MOVE CONTENT OUT
        if( side === 'rightSide') {
            tl.to(`#${side}Contents`, { maxWidth: '50vw', duration: .5 });
            tl.to(`#${side}Contents`, { translate: '0', duration: .1, delay: .1 });
        }
        else {
            tl.to(`#${side}Contents`, { translate: '0', duration: .5 });
            tl.to(`#${side}Contents`, { maxWidth: '50vw', duration: .1 });
        }

        // SEND CONTENT TO BACK
        tl.to(`#${side}Contents`, { opacity: 0, duration: 0});
        tl.to(`#${side}Contents`, { zIndex: -1, duration: 0});

        // FADE IN OTHERSIDE TITLE 
        tl.to(`#${otherSide} .btn_title`, { opacity: 1, duration: .1 });
        tl.to(`#${side} .btn_title`, { opacity: 1, duration: .1 }, "<");

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
                class="btn left" 
                class:active={leftColVisible} 
                on:click={ () => {
                    if( leftColVisible ) {
                        animationOut('leftSide', 'rightSide' )
                    }
                    else {
                        animationIn('leftSide', 'rightSide')
                    }
                } }
            >
                <span class="btn_title_clone">{leftCol.titre}</span>
                <span class="btn_title">{leftCol.titre}</span>
            </button>

            <button 
                id="rightSide" 
                class="btn right" 
                class:active={rightColVisible} 
                on:click={() => {
                    if( rightColVisible ) {
                        animationOut('rightSide', 'leftSide' )
                    }
                    else {
                        animationIn('rightSide', 'leftSide')
                    }
                }}
            >
                <span class="btn_title_clone">{rightCol.titre}</span>
                <span class="btn_title">{rightCol.titre}</span>
            </button>

        </div>


        <div class="sec-container">
            <div id="rightSideContents" class="right-sections" class:active={rightColVisible}>

                <div class="section_inner">
                    <button 
                        on:click={ () => {
                            animationOut('rightSide', 'leftSide')
                        } }
                        class="btn_clean menus_close_btn"
                        class:active={rightColVisible}
                    >
                        <IconClose />
                    </button>
                    <div class="btn_title_mobile fl-column">
                        <span class="caption ">{rightCol.titre}</span>
                    </div>
                    <ExpertiseItem chapo={rightCol.chapo} visuel={rightCol.visuel} flexibleContents={rightCol.contenusFlexibles} design="left" />
                </div>
            </div>

            <div id="leftSideContents" class="left-sections" class:active={leftColVisible}>

                <div class="section_inner">
                    <button 
                        class="btn_clean menus_close_btn"
                        on:click={ () => {
                            animationOut('leftSide', 'rightSide' )
                        } }
                    >
                        <IconClose />
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
            line-height: 1.2;
            text-transform: none;
            font-family: 'Baskervville', serif;
            font-weight: 400;
            font-style: italic;
            display: block;
            width: 50%;
            height: 100%;
            font-size: 9.5rem;
            letter-spacing: -0.02em;
            text-align: center;
            cursor: pointer;
            position: relative; 

            &:first-child {
                @include max(bigtablet) {
                    border-right: 1px solid;
                }
            }
            @include max(bigtablet) {
                background-color: $white;
            }

            .btn_title {
                @include max(bigtablet) {
                    writing-mode: vertical-rl;
                    transform: rotate(180deg);
                }
            }

            &:not(.active):hover {
                .btn_title {
                    font-style: normal;
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
                font-size: 5rem;
                top: 5%;
                opacity: 0;
                transition: opacity .3s;
                position: absolute;
                text-orientation: mixed;
                writing-mode: vertical-rl;
                transform: rotate(180deg);
                @include max(bigtablet) {
                    display: none;
                }
            }
            &.left .btn_title_clone {
                left: 20px;
            }
            &.right .btn_title_clone {
                right: 30px;
            }
            &.active {
                background-color: $white;
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
            z-index: -1;
            opacity: 0;
            background-color: $light-bg2;
        }

        $sectionTitleWidth: 115px;

        .section_title {
            padding: $gutter;
            flex: 0 0 $sectionTitleWidth;
            min-width: $sectionTitleWidth;
            position: fixed;
            height: 100vw;
            top: 0;

            @include max(bigtablet) {
                display: none;
            }

            h2 {
                top: 100px;
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
            width: 100vw;

            .btn_title_clone {
                writing-mode: sideways-lr;
            }
            .section_title {
                left: -110px;
            }
        }
        .right-sections {
            flex: 0 0 auto;
            flex-direction: row-reverse;
            max-width: 50vw;
            width: 100vw;

            .btn_title_clone {
                writing-mode: sideways-rl;
            }
            .section_title {
                right: -110px;
            }
        }

        .btn_title_mobile {
            @include min(bigtablet) {
                 display: none;
            }
            @include max(bigtablet) {
                padding: 5vw;
            }
        }
        .menus_close_btn {
            position: absolute;
            top: 10px;

            @include min(bigtablet) {
                width: 30px;
                height: 30px;
            }
            @include max(bigtablet) {
                width: 20px;
                height: 20px;
            }
            .right-sections & {
                @include min(bigtablet) {
                    right: 10px;
                }
                @include max(bigtablet) {
                    right: 10px;
                }
                
            }
            .left-sections & {
                @include min(bigtablet) {
                    left: 10px;
                }
                @include max(bigtablet) {
                    left: 10px;
                }
                
            }
        }
        


</style>