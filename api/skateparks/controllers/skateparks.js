const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  /**
   * Retrieve a record.
   *
   * @return {Object}
   */

  async findOne(ctx) {
    const lookup = ctx.request.url;
    const slug = lookup.replace('/alldem/','');

    const entity = await strapi.services.skateparks.findOne({ slug });
    return sanitizeEntity(entity, { model: strapi.models.skateparks });
  },
};

 