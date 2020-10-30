export default (context, inject) => {
  inject('random', {
    from (creatures) {
      if (!creatures || creatures.length === 0)
        return {}
      const sumOfWeights = creatures.reduce(function (memo, creature) {
        return memo + creature.status.weight
      }, 0)

      return creatures.find(this.getRandom(sumOfWeights))
    },
    getRandom (sumOfWeights) {
      let random = Math.floor(Math.random() * (sumOfWeights + 1))

      return function (creature) {
        random -= creature.status.weight
        return random <= 0
      }
    },
  })
}
