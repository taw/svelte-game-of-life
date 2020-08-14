<script>
  import Cell from "./Cell.svelte";
  import { runStep } from "./simulation";
  import { onDestroy } from 'svelte';

  let sizex = 30
  let sizey = 30
  let cells = []
  let playing = false

  const interval = setInterval(onTick, 100);
  onDestroy(() => clearInterval(interval));

  for(let x=0; x<sizex; x++) {
    for(let y=0; y<sizey; y++) {
      cells.push({ x, y, state: Math.random() < 0.2 })
    }
  }

  function step() {
    cells = runStep(cells)
  }

  function pause() {
    playing = false
  }

  function play() {
    playing = true
  }

  function onTick() {
    if (playing) {
      cells = runStep(cells)
    }
  }

  function clickedCell(cell) {
    playing = false
    cell.state = !cell.state
    // Tell svelte it's refreshing
    cells = cells
  }
</script>

<header>
  Game of Life
</header>
<svg>
  {#each cells as cell}
    <Cell
      x={cell.x}
      y={cell.y}
      state={cell.state}
      on:click={() => clickedCell(cell) }
    />
  {/each}
</svg>
<div class="buttons">
  {#if playing}
    <button on:click={pause}>
      Pause
    </button>
  {:else}
    <button on:click={step}>
      Step
    </button>
    <button on:click={play}>
      Play
    </button>
  {/if}
</div>

<style>
  header {
    font-size: 64px;
    text-align: center;
  }

  svg {
    height: 600px;
    width: 600px;
    background-color: #888;
    margin: auto;
    display: block;
  }

  .buttons {
    text-align: center;
  }
  button {
    margin: 0.5em;
  }
</style>
