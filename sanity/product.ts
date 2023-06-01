
export const product = {
    name: 'products',
    title: 'Products',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'product Name',
            type: 'string',
        },
        {
            name: 'quantity',
            title: 'quantity',
            type: 'number',
        },
        {
            name: 'price',
            title: 'price',
            type: 'number',
        },
        {
            name: 'image',
            title: 'image',
            type: 'array',
            of: [
                {
                    type: 'image',
                }
            ],
        },
        {
            name: 'description',
            title: 'product description',
            type: 'text',
        },
        {
            name: 'slug',
            title: 'slug',
            type: 'slug',
        },
        {
            name: 'catergoryType',
            title: 'category',
            type: 'reference',
            to: [
                {
                    type: "category"
                }
            ]
        },

    ],
}
