const model =  require('./model')

model.methods(['get', 'post', 'put', 'delete']);
model.updateOptions({ new: true, runValidators: true });


module.exports = model