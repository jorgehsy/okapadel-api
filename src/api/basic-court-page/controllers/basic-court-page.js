'use strict';

/**
 *  basic-court-page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::basic-court-page.basic-court-page', ({ strapi }) => ({
    async find(ctx) {
        const populateList = [
            'firstSection.*',
            'secondSection.*',
            'thirdSection.*',
            'fourthSection.*',
            'fifthSection.*',
            'sixthSection.*',
            'seventhSection.*',
            'eighthSection.*',
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
