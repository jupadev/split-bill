import { reactive } from 'vue'

export const store = reactive({
  params: {
    total: 0,
    tip: 0,
    people: 0,
    remaining: 0
  },
  people: []
})

export const getGrandTotal = () => {
  return store.params.total * (store.params.tip / 100 + 1)
}

export const calculate = () => {
  store.people = []
  const { people = 0 } = store.params
  const totalPerPerson = getGrandTotal() / people
  store.params.remaining = getGrandTotal()
  const peopleArray = [...Array(people).keys()]
  peopleArray.forEach((person, index) => {
    store.people.push({
      id: crypto.randomUUID(),
      numberOfPerson: index + 1,
      totalPerPerson,
      paid: false
    })
  })

  calculateRemaining()
}

const calculateRemaining = () => {
  const missingToPay = store.people.filter((item) => !item.paid)
  const remaining = missingToPay.reduce((acc, item) => (acc += item.totalPerPerson), 0)
  store.params.remaining = remaining
}

export const setPay = (id, isPaid) => {
  const person = store.people.find((item) => item.id === id)
  if (person) {
    person.paid = isPaid
    calculateRemaining()
  }
}
