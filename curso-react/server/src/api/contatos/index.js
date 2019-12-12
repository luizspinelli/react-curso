const model = require('./model')

model.methods(['get','post'])
model.updateOptions({new : true, runValidators: true})

module.exports = model