const mongoose = require('mongoose');
const path = require('path');
const crypto = require('crypto');

const { Schema } = mongoose;

const generalSchema = new Schema({
   name: {
      type: Schema.Types.String,
      index: true,
      required:[true,"usernameRequired"],
        // Данное поле обязательно. Если его нет вывести ошибку с текстом usernameRequired
        maxlength:[32,"tooLong"],
        // Максимальная длинна 32 Юникод символа (Unicode symbol != byte)
        minlength:[6,"tooShort"],
        // Слишком короткий Логин!
        match:[/^[a-z0-9]+$/,"usernameIncorrect"],
        // Мой любимй формат! ЗАПРЕТИТЬ НИЖНЕЕ ТИРЕ!
        unique:true // Оно должно быть уникальным
    
   },
},
   {timestamps: true}  
);


const modelName = path.basename(__filename, '.js');
const model = mongoose.model(modelName, generalSchema);

module.exports = model;