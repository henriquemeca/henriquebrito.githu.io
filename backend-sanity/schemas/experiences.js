export default{
    name:'experiences',
    title:'Experiences',
    type: 'document',
    fields:[
        {
            name:'company',
            title:'Company',
            type:'string'
        },
        {
            name:'location',
            title:'Location',
            type:'string'
        },
        {
            name:'indexOrder',
            title:'Index show order',
            type:'number'
        },
        {
            name:'desc',
            title:'Description',
            type:'string'
        },
        {
            name:'imgUrl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name:'works',
            title:'Works',
            type:'array',
            of:[{ type:'workExperience'}]
        },
    ]
}