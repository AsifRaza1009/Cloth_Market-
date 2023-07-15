export const products = {
    name:'product',
    type:'document',
    title:'Product',
    fields:[
        {
            name:'name',
            type:'string',
            title:'Product Name'
        },
        {
            name:'discription',
            type:'array',
            title:'Discription',
            of:[{
                type:'block'
            }]
        },
        {
            name:'image',
            type:'array',
            title:'Image',
            of:[
                {
                    type:'image',
                    fields:[
                        {
                            name:'alt',
                            type:'text',
                            title:'Alternative Text'
                        }
                    ]

                }
            ]
        },
    ]
}

