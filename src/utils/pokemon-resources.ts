export const getPokemonId = (url: string) => {
  const id = url.split('/').at(-2);
  return id;
}

export const getPokemonImage = (id: string) => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
}

export const getPokemonAudio = (id: string) => {
  return `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${id}.ogg`;
}
