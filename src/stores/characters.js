import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'


export const useCharactersStore = defineStore('character', () => {
  // Aqui os dados de personagens serão importados do arquivo JSON
  const state = reactive({
    characters: [],
    charactersByName: [],
    selectedCharacter: null,
  })
  const characters = computed(()=> state.characters)
  const selectedCharacter = computed(()=> state.selectedCharacter)
  const charactersByName = computed(()=> state.charactersByName)

   const GetCharacter = async () => {
    const response = await fetch('../../data.json').then((response) => response.json())
    state.characters = response
  }

  const GetCharacterByName = (search) => {
    console.log(search)
    const response = state.characters.filter((s) =>
        s.nome.toLowerCase().includes(search.toLowerCase())
    )
    state.charactersByName = response 
    console.log(state.charactersByName)
    return response
  }

  return { state, characters, selectedCharacter, charactersByName, GetCharacter, GetCharacterByName }
})
