const ram = require('./index2')

const mem = ram()

mem.write(0, Buffer.from('hello world'), function () {
  mem.read(0, 11, (_, data) => console.log(data.toString()))
})
