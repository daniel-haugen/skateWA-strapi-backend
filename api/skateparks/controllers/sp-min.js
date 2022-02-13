// const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

module.exports = {

  async dingdong(ctx) {
    
    let answer = await strapi.services.skateparks.find(); 

    let newAnswer = [];
    
    answer.map((index)=>{
      newAnswer.push({
        'name': index.name,
        'address': index.full_address,
        'city': index.city,
        'native_land': index.native_land,
        'slug': index.slug
      }); 
    });

    function compare(a, b) {
      const bandA = a.name.toUpperCase();
      const bandB = b.name.toUpperCase();
      let comparison = 0;
      if (bandA > bandB) {
        comparison = 1;
      } else if (bandA < bandB) {
        comparison = -1;
      }
      return comparison;
    }

    newAnswer.sort(compare);

    ctx.send(newAnswer);



  },


};

