// const lemonade = {
//   lemonJuice: 3,
//   water: 3,
//   sugar: 1.5,
//   iceCubes: 10,
//   [console.log('Hello World')]: 'Hi',
//   calculatePrice () {
//     return (
//       this.lemonJuice * 0.3 +
//       this.water * 0.01 +
//       this.sugar * 0.25 +
//       this.iceCubes * 0.05 +
//       0.75
//     )
//   }
// }

// function updateLemonade (
//   { calculatePrice },
//   lemonJuice,
//   water,
//   sugar,
//   iceCubes
// ) {
//   return {
//     lemonJuice,
//     water,
//     sugar,
//     iceCubes,
//     calculatePrice
//   }
// }

let a = 10

const updateLemonade = (
  { calculatePrice },
  lemonJuice,
  water,
  sugar,
  iceCubes
) => ({
  lemonJuice,
  water,
  sugar,
  iceCubes,
  calculatePrice,
  a
})

const outer = () => {
  let x = 2

  const inner = () => {
    let y = 5
    return x + y
  }

  return inner
}

const containedInner = outer()

console.log(containedInner())

// lemonade.water = 8

// console.log({ ...lemonade, water: 5 })
// console.log(lemonade)
// console.log(updateLemonade(lemonade, 1, 2, 3, 20))

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, [1, 2, 3]]
// const numbersCopy = [...numbers]
// numbersCopy[10] = [...numbers[10]]

// numbersCopy[10][0] = 5
// console.log(numbers)
// console.log(numbersCopy)

// let { water: willsCoolWater, lemonJuice, sugar, iceCubes } = lemonade

// console.log(willsCoolWater)
// console.log(lemonJuice)
// console.log(sugar)
// console.log(iceCubes)

// function add (x, y) {
//   return x + y
// }

// function increment (x) {
//   return x + 1
// }

// const increment = x => x + 1
