<script>
    import { onMount, onDestroy } from 'svelte';
    let cursorVisible = false;
    let cursorX = 0;
    let cursorY = 0;
    let customCursor;

    const handleMouseMove = (event) => {
        cursorX = event.clientX;
        cursorY = event.clientY;
        customCursor.style.left = `${cursorX}px`;
        customCursor.style.top = `${cursorY}px`;
        customCursor.style.transform = cursorVisible ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0)';
    };

    const handleMouseEnter = () => { cursorVisible = true };
    const handleMouseLeave = () => { cursorVisible = false };

    onMount(() => {
        customCursor = document.querySelector('.custom-cursor');
        window.addEventListener('mousemove', handleMouseMove);
        const targets = document.querySelectorAll('.hover-target');
        targets.forEach(target => {
            target.addEventListener('mouseenter', handleMouseEnter);
            target.addEventListener('mouseleave', handleMouseLeave);
        });
        onDestroy(() => {
            window.removeEventListener('mousemove', handleMouseMove);
            targets.forEach(target => {
                target.removeEventListener('mouseenter', handleMouseEnter);
                target.removeEventListener('mouseleave', handleMouseLeave);
            });
        });
    });
    
</script>


<div class="custom-cursor">Voir</div>


<style>
    .custom-cursor {
        position: fixed;
        width: 60px;
        height: 60px;
        background-color: rgba(0, 0, 0, 0.7);
        border-radius: 50%;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        pointer-events: none;
        transition: transform 0.2s ease-in-out;
        z-index: 100;
        transform: scale(0);
    }
    :global(.hover-target:hover) {
        cursor: none;
    }
</style>