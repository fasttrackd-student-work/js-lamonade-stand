import Vorpal from 'vorpal'
import {
  createQuestionsArray,
  promptIngrediantQuestions,
  createLemonadesArray,
  addPriceToLemonades,
  createOrderObject,
  writeOrderToFile,
  readAllFiles
} from './lib'

const vorpal = Vorpal()

vorpal
  .command(
    'createOrder <name> <phoneNumber>',
    'Create an order and saves it as a JSON file'
  )
  .action(function ({ name, phoneNumber }) {
    // Prompt the user for how many lemonades they want
    return this.prompt({
      type: 'number',
      name: 'numLemonades',
      default: 1,
      message: 'How many lemonades would you like to order?'
    })
      .then(createQuestionsArray)
      .then(promptIngrediantQuestions(this))
      .then(createLemonadesArray)
      .then(addPriceToLemonades)
      .then(createOrderObject(name, phoneNumber))
      .then(writeOrderToFile)
  })

vorpal
  .command(
    'getOrders <lemonadeStand>',
    'Get all orders for the given lemonade stand'
  )
  .action(function ({ lemonadeStand }, callback) {
    const orders = readAllFiles(lemonadeStand)
    this.log(`There are ${orders.length} orders at ${lemonadeStand}`)
    for (let order of orders) {
      this.log(`Order:`)
      this.log(`Total Price: ${order.total}`)
      this.log(`Lemonades:`)
      this.log(order.lemonades)
      this.log(`Customer:`)
      this.log(order.customer)
    }
    callback()
  })

vorpal.delimiter('lemonade-stand$').show()
