<script>
    export let label = '';
    export let name = '';
    export let value = '';
    export let required = false;
</script>


    <div class="input-group checkbox fl-center gap-xs" data-name="{name}">
        <input 
            class="" 
            class:input-required={required} 
            aria-required="{required}" 
            aria-invalid="false" 
            value="{value}" 
            type="checkbox" 
            name="{name}"
        >
        <label class="body" for={name}>{label}</label>
    </div>


<style lang="scss">
    .checkbox {
        input[type=checkbox] {
            position: relative;
            border: 2px solid $gray;
            border-radius: 3px;
            background: $light-bg;
            cursor: pointer;
            padding: 8px;
            height: 20px;
            width: 20px;
            appearance: none;
            display: flex;
            align-items: center;
            justify-content: center;
            &:checked {
                background-color: $dark-font;
                border-color: $dark-font;
            }
            &:before {
                content: "";
                position: absolute;
                width: 4px;
                height: 8px;
                border: solid $light-bg;
                border-width: 0 2px 2px 0;
                margin: -3px -1px 0 -1px;
                transform: rotate(45deg);
                z-index: 2;
            }
        }
        label {
            cursor: pointer;
            align-items: center;
            gap: $space-s;
        }
    }
</style>