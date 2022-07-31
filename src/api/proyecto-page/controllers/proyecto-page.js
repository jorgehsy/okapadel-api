'use strict';

/**
 *  proyecto-page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::proyecto-page.proyecto-page', ({ strapi }) => ({
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
