<script>
  export let x;
  export let y;
  export let state;

  let visualStartX = 20 * x + 1
  let visualStartY = 20 * y + 1
</script>

<g on:click>
  <rect
    class:alive={state}
    class:dead={!state}
    x={visualStartX}
    y={visualStartY}
    height={18}
    width={18}
  />
</g>

<style>
  .dead {
    fill: #aaa;
  }

  .alive {
    fill: #3e3;
  }
</style>
