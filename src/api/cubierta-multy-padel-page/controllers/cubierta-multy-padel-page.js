'use strict';

/**
 *  cubierta-multy-padel-page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::cubierta-multy-padel-page.cubierta-multy-padel-page', ({ strapi }) => ({
    async find(ctx) {
        const populateList = [
            'firstSection.*',
            'secondSection.*',
            'thirdSection.*',
            'contact.*',
            'seo.*'
        ]
        // Push any additional query params to the array
        populateList.push(ctx.query.populate)
        ctx.query.populate = populateList.join(',')

        const content = await super.find(ctx)
        return content
    }
}));
