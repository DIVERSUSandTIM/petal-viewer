const numPetals = 100 + Math.round(Math.random() * 1000)
const state = []

const zmii = 1.9
let index = 0

// let idx = 
// idx = (max-idx) - 1
for (let i = 0; i < numPetals; i++) {
    state.push({
        linkAngle: Math.random() * 360,
        relevance: (10 - Math.log((Math.random()*(Math.pow(zmii, 10)-1.0))+1.0) / Math.log(zmii)) * 100,
        x: 0,
        y: 0,
        id: index++,
    })
}


state.sort(function(a, b) {
    return a.relevance - b.relevance;
  })

  console.log(state)

  let max = 0
  let less1 = 0
  let less50 = 0
  let less1000 = 0
  let less10000 = 0

  state.forEach((d) => {
      if (d.relevance > max) {
          max = d.relevance
      }

      if (d.relevance < 1) {
          less1++
      } else if (d.relevance < 50) {
          less50++
      } else if (d.relevance < 1000) {
          less1000++
      } else if (d.relevance < 10000) {
          less10000++
      }
  })

  console.log(less1, less50, less1000, less10000)

  console.log(max)

export function getState() {
    return state
}