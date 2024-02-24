'use client'

import { api } from "@/api/api"

async function getPokemons() {
  api.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=5').then(response => console.log(response))
}


export default function PokemonDetail() {
  return (
    <div>
      <button onClick={() => getPokemons()}>GetPokemons</button>
    </div>
  )
}
