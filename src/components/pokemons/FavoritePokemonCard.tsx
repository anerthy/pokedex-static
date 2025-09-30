import type { FavoritePokemon } from "@interfaces/favorite-pokemon"
import { getPokemonImage } from "@utils/pokemon-resources";
import { createSignal, Show, type Component } from "solid-js"

interface Props {
  pokemon: FavoritePokemon
}

export const FavoritePokemonCard: Component<Props> = ({pokemon}) => {

  const [isVisible, setIsVisible] = createSignal(true);

  const imageUrl = getPokemonImage(pokemon.id.toString());

  const deleteFavorite = () => {
    const favorites: FavoritePokemon[] = JSON.parse(
      localStorage.getItem('favoritePokemons') ?? '[]'
    );

    const newFavorites = favorites.filter((fav: FavoritePokemon) => fav.id !== pokemon.id);

    localStorage.setItem('favoritePokemons', JSON.stringify(newFavorites));

    setIsVisible(false);

  }


  return (
    <Show when={isVisible()}>
      <div class="flex flex-col items-center justify-center p-4 border border-gray-300 rounded-lg shadow hover:shadow-lg transition duration-300">
        <a href={`/pokemons/${pokemon.name}`}>
          
          <img src={imageUrl} 
          alt={pokemon.name} 
          class="mb-2 sixe-24" 
          style={`view-transition-name: ${pokemon.name}-image`}
          />
          
          <p class="capitalize">#{pokemon.id} {pokemon.name}</p>
        </a>
        <button onClick={deleteFavorite} class="text-red-600">Remove</button>
      </div>
    </Show>

  );

}