<script>
    export let label = '';
    export let name = '';
    export let value = '';
    export let required = false;
</script>


<p>
    <label for={name}>{label}<br>
        <span class="" data-name="{name}">
                <input 
                    class="" 
                    class:input-required={required} 
                    aria-required="{required}" 
                    aria-invalid="false" 
                    value="{value}" 
                    type="checkbox" 
                    name="{name}"
                >
        </span> 
    </label>
</p>