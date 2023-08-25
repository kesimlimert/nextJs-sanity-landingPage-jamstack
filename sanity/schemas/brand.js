import { defineConfig } from 'sanity'

export default defineConfig({

    title: 'Brand image',
    name: 'brand',
    type: 'image',
    fields: [
        {
            name: 'caption',
            type: 'string',
            title: 'Caption',
        },
        {
            name: 'attribution',
            type: 'string',
            title: 'Attribution',
        }
    ]

})