function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}

const numPetals = 100 + Math.round(Math.random() * 800)
const state = []

const slope = 1.9
let index = 0

for (let i = 0; i < numPetals; i++) {
    state.push({
        linkAngle: Math.random() * 360,
        relevance: (10 - Math.log((Math.random()*(Math.pow(slope, 10)-1.0))+1.0) / Math.log(slope)) * 100,
        date: randomDate(new Date(2018, 0, 1), new Date()),
        x: 0,
        y: 0,
        id: index++,
    })
}

state.sort(function(a, b) {
    return a.relevance - b.relevance;
  })

export function getState() {
    return state
}