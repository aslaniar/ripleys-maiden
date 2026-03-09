<script>
  let { data } = $props();
</script>
<ul>
  {#each data.barbers as barber}
    <li>{barber.name}</li>
  {/each}
</ul>