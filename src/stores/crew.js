import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const useCrewStore = defineStore('crew', () => {
  // Aqui os dados de tripulação serão importados do arquivo JSON
  const crews = ref([
    {
      id:0,
      name: 'Exibir Tudo'
    },
    {
      id: 1,
      name: 'Chapéus de Palha',
    },
    {
      id: 2,
      name: 'Barba Branca',
    },
    {
      id: 3,
      name: 'Donquixote',
    },
    {
      id: 4,
      name: 'Revolucionários',
    },
    {
      id: 5,
      name: 'Piratas do Barba Negra',
    },
    {
      id: 6,
      name: 'Piratas do Barba Branca',
    },
  ])

  const currentCrew = ref(crews.value[0])

  function setCurrentCrew(crewId) {
    currentCrew.value = crews.value[crewId-1]
    console.log(currentCrew.value)
  }

  return { crews, currentCrew, setCurrentCrew }
})
