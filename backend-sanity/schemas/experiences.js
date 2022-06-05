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
            name:'Location',
            title:'Location',
            type:'string'
        },
        {
            name:'works',
            title:'Works',
            type:'array',
            of:[{ type:'workExperience'}]
        },
    ]
}