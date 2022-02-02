const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  /**
   * Retrieve a record.
   *
   * @return {Object}
   */

  async findOne(ctx) {
    const { id } = ctx.params;

    const entity = await strapi.services.skateparks.findOne({ id });
    return sanitizeEntity(entity, { model: strapi.models.skateparks });
  },
};

