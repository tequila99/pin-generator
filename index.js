const defaultOptions = {
  length: 4,
  repetition: 4
}

const generate = (options = {}) => {
  const opts = Object.assign(defaultOptions, options)
  if (opts.length < 4) throw new Error('The length of the pin code cannot be less than 4 characters')
  if (opts.repetition < 2 || opts.repetition > opts.length) throw new Error(`The number of repetitions should be in the range from 2 to ${opts.length}`)
  const positions = []
  const mainDigit = (Math.floor(Math.random() * 10)).toString()
  while (positions.length < opts.repetition) {
    currentPosition = Math.floor(Math.random() * opts.length)
    if (!positions.includes(currentPosition)) positions.push(currentPosition)
  }
  const pin = Math.floor(Math.random() * Math.pow(10, opts.length)).toString().padStart(opts.length, '0')
  
  return pin.split('').reduce((acc, el, i) => acc += positions.includes(i) ? mainDigit : el, '')
}

module.exports = generate
generate.generate = generate
