(async function main () {
  function fizzBuzz (numbers) {
    const result = []
    const divisors = {
      3: 'Fizz',
      5: 'Buzz'
    }

    // happy debugging
    for (let i = 0, length = numbers.length; i < length; i++) {
      const number = numbers[i]
      let message = `${number} `

      for (let divisor of Object.keys(divisors)) {
        if (!(number % divisor)) {
          message += divisors[divisor]
        }
      }

      result.push(message)
    }

    return result
  }

  console.log(
    fizzBuzz([...Array(101).keys()].slice(1)).join('\n')
  )
})()
