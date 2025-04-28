import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useCharactersStore } from '@/stores/characters'

export const useCrewStore = defineStore('crew', () => {
  const state = ref({
    crews: [],
    possibleCrews: [
      { id: 1, name: 'Chapéus de palha' },
      { id: 2, name: 'Piratas do Barba Branca' },
      { id: 3, name: 'Piratas do Roger' },
      { id: 4, name: 'Piratas da Big Mom' },
      { id: 5, name: 'Piratas das Feras' },
      { id: 6, name: 'Piratas do Kid' },
      { id: 7, name: 'Marinha' },
      { id: 8, name: 'Bando do Barba Negra' },
      { id: 9, name: 'Donquixote' },
      { id: 10, name: 'Revolucionários' },
      { id: 11, name: 'Governo Mundial' },
      { id: 12, name: 'Baratie'},
      { id: 13, name: 'CP9' },
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
    const response = characterStore?.characters.filter((s) =>
        s.bando.toLowerCase().includes(search.toLowerCase())
    )
    state.value.crews = response 
    console.log(state.value.crews, search)
    return response
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
