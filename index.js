const defaultOptions = {
  length: 4,
  repetition: 4
}

const defaultHashOptions = {
  length: 5,
  lang: 'ru'
}

const dictHash = {
        0: '0', 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7', 8: '8', 9: '9',        
        a: 'А', b: 'Б', c: 'Ц', d: 'Д', e: 'Е', f: 'Ф', g: 'Г', 
        h: 'Х', i: 'И', j: 'Ж', k: 'К', l: 'Л', m: 'М', n: 'Н', 
        o: 'О', p: 'П', q: 'Ю', r: 'Р', s: 'С', t: 'Т', u: 'У', 
        v: 'В', w: 'Э', x: 'Ю', y: 'Я', z: 'З'
      }

const getSeconds = l => {  
  const date = new Date()
  return (date.getSeconds().toString().padStart(2,'0') + date.getMilliseconds().toString().padStart(3, '0')).slice(0, l)
}

const hash = (options = {}) => {
  const opts = Object.assign(defaultHashOptions, options)
  if (opts.length > 5) throw new Error('The length of the suffix cannot be more than 5 characters')
  if (opts.length < 0) opts.length = 0
  return Math.random()
    .toString(36)
    .split('')
    .slice(-3)
    .map(el => opts.lang === 'ru' ?  dictHash[el] : el.toUpperCase())
    .join('') + (opts.length ? '-'+getSeconds(opts.length) : '')
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
generate.hash = hash