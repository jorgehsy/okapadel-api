'use strict';

/**
 *  cubierta-single-padel-page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::cubierta-single-padel-page.cubierta-single-padel-page', ({ strapi }) => ({
    async find(ctx) {
        const populateList = [
            'firstSection.*',
            'secondSection.*',
            'thirdSection.*',
            'contact.*',
            'seo.*',
'seo.metaImage'
        ]
        // Push any additional query params to the array
        populateList.push(ctx.query.populate)
        ctx.query.populate = populateList.join(',')

        const content = await super.find(ctx)
        return content
    }
}));
