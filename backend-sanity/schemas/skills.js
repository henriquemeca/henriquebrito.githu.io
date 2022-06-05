export default{
    name:'skills',
    title:'Skills',
    type: 'document',
    fields:[
        {
            name:'name',
            title:'Name',
            type:'string'
        },
        {
            name:'bgColor',
            title:'BgColor',
            type:'string'
        },
        {
            name:'indexOrder',
            title:'Index show order',
            type:'number'
        },
        {
            name:'xp',
            title:'Experience',
            type: 'string',
            options: {
              list: [
                {title: 'Professional expecience', value: 'professional'},
                {title: 'Project Experience', value: 'project'}
              ]}
        },
        {
            name:'icon',
            title:'Icon',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        
    ]
}