<script>
  import { onMount } from "svelte";
  import { fetchMovies} from "./api/api.js";
  import { movies} from "./lib/stores.js";

  // Fetch movies on mount
  onMount(async () => {
    const data = await fetchMovies();
    movies.set(data);
  });
</script>

<h1>Movie List</h1>

{#if $movies.length > 0}
  <ul>
    {#each $movies as movie}
      <li>
        <h3>{movie.title} ({movie.year})</h3>
        <img src="{movie.medium_cover_image}" alt="{movie.title}" width="100">
        <p>Rating: {movie.rating}</p>
      </li>
    {/each}
  </ul>
{:else}
  <p>Loading movies...</p>
{/if}