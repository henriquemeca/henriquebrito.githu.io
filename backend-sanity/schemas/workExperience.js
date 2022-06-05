export default {
    name:'workExperience',
    title:'Work Experience',
    type:'document',
    fields:[
           {name:'jobtitle',
               title:'Job Title',
               type:'string'
            },
            {
                name:'startdate',
                title:'Start Date',
                type:'string'
            },
            {
                name:'enddate',
                title:'End Date',
                type:'string'
            },
            {
                name:'desc',
                title:'Desc',
                type: "array",
                of: [{type: "string"}]
            }
    ]
}