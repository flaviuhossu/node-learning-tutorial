//CommonJS , every file in Node is a MODULE !
//Modules - Encapsulated code (only sharing minimum/what we want)

const sayHi = (name) => {
  console.log(`Hellooo there, ${name}`)
}

module.exports = sayHi
