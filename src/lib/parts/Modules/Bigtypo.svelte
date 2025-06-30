<script>
    export let content = '';
</script>

        <section class="module mod_bigtypo container body">
            <div class="">{@html content}</div>
        </section>

<style lang="scss">

    .mod_bigtypo {

        @include max(bigtablet) {
            margin-top: calc($space-xxl * 1.5);
            margin-bottom: calc($space-xxl * 1.5);
        }
        @include min(bigtablet) {
            margin-top: calc($space-wide * 1.5);
            margin-bottom: calc($space-wide * 1.5);
        }
        h2 {
            line-height: 1.2;
        }
        :global(h2) {
            line-height: 1.2;
            margin: 0;

            @include min(bigtablet) {
                font-size: 5rem;
            }
            
        }
    }

</style>