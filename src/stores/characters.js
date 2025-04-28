import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useCharactersStore = defineStore('character', () => {
  const state = reactive({
    characters: [],
    charactersByName: [],
    selectedCharacter: null,
    error: '',
  })
  
  const characters = computed(()=> state.characters)
  const selectedCharacter = computed(()=> state.selectedCharacter)
  const charactersByName = computed(()=> state.charactersByName)

   const GetCharacter = async () => {
    const response = await fetch('../../data.json').then((response) => response.json())
    state.characters = response
  }

  const GetCharacterByName = (search) => {
    if (search != '') {
    const response = state.characters.filter((s) =>
        s.nome.toLowerCase().includes(search.toLowerCase())
    )
    state.charactersByName = response
    if (response.length >= 1) { 
    state.error = null
    return response
    } else {
      state.error = 'Não Encontrado'
    }
  } else {
    state.error = null
    state.charactersByName = []
    return []
  }

  }

  const getCharacterDetails = async (id) => {
      const response = await fetch('../../data.json').then((response) => response.json())
      const GetCharacterById = response.find(char => char.id === Number(id))
      state.selectedCharacter = GetCharacterById
  }

  return { state, characters, selectedCharacter, charactersByName, GetCharacter, GetCharacterByName, getCharacterDetails }
})
