import calculatePizzaPrice from './calculatePizzaPrice'

export default function calculateOrderTotal(order, pizzas) {
  return order.reduce((runningTotal, singleOrder) => {
    const pizza = pizzas.find((p) => p.id === singleOrder.id)
    return runningTotal + calculatePizzaPrice(pizza.price, singleOrder.size)
  }, 0)
}
