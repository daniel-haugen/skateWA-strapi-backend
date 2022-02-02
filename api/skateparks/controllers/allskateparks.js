const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

module.exports = {

  async dingdong(ctx) {
    
    let answer = await strapi.services.skateparks.find(); 

    let newAnswer = [];
    
    answer.map((index)=>{
      newAnswer.push({
        'name': index.name,
        'address': index.full_address,
        'city': index.city,
        'native_land': index.native_land
      }); 
    });
    ctx.send(newAnswer);



  },


};

