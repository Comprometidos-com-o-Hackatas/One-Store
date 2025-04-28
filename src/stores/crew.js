import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useCharactersStore } from '@/stores/characters'

export const useCrewStore = defineStore('crew', () => {
  const state = ref({
    crews: [],
    possibleCrews: [
      {id: 1, name: 'Geral'},
      { id: 2, name: 'Chapéus de palha' },
      { id: 3, name: 'Piratas do Barba Branca' },
      { id: 4, name: 'Piratas do Roger' },
      { id: 5, name: 'Piratas da Big Mom' },
      { id: 6, name: 'Piratas das Feras' },
      { id: 7, name: 'Piratas do Kid' },
      { id: 8, name: 'Marinha' },
      { id: 9, name: 'Bando do Barba Negra' },
      { id: 10, name: 'Donquixote' },
      { id: 11, name: 'Revolucionários' },
      { id: 12, name: 'Governo Mundial' },
      { id: 13, name: 'Baratie'},
      { id: 14, name: 'CP9' },
    ],
    currentCrew: null,
  })
  const characterStore = useCharactersStore()
  const crews = computed(() => state.value.crews)
  const currentCrew = computed(() => state.value.currentCrew)
  const possibleCrews = computed(() => state.value.possibleCrews)

  const GetCharacterByCrew = async () => {
    await characterStore.GetCharacter()
    console.log(characterStore.characters)
    const search = state.value.currentCrew.name
    if (search == 'Geral') {
      state.value.crews = characterStore.characters
    } else {
      const response = characterStore?.characters.filter((s) =>
        s.bando.toLowerCase().includes(search.toLowerCase())
    )
    state.value.crews = response 
    }
   
    console.log(state.value.crews, search)
    
  }

  function setCurrentCrew(crewId) {
    try {
      state.value.currentCrew = state.value.possibleCrews[crewId-1]
    }
    catch (error) {
      console.error(error)
      return
    }
    finally {
      console.log(currentCrew.value)
      GetCharacterByCrew()}
  }

  return { crews, currentCrew, possibleCrews, setCurrentCrew, GetCharacterByCrew }
})
