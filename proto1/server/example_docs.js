module.exports = [


    {
        type:'alarm',
        time: 60*8+30,
        enabled:false,
        name:'wake up',
        repeat:['none']
    },
    {
        type:'alarm',
        time:60*10,
        enabled:true,
        name:'drink second cup of coffee',
        repeat:['weekday']
    },
    {
        type:'alarm',
        time:60*14+15,
        enabled:false,
        name:'afternoon coffee',
        repeat:['weekday']
    },


    {
        type:'alarm',
        time:60*2+0,
        enabled:false,
        name:'afternoon coffee',
        repeat:['weekday']
    },




    {
        type:'email',
        from:'Nigerian Prince',
        subject:'A fortune you have inherited',
        folder:['inbox'],
        read:false,
        content: {
            mimeType:'text/plain',
            text:"Dear sirs"
        }
    },
    {
        type:'email',
        from:'Nigerian Princess',
        subject:'Yet another fortune!',
        folder:['inbox'],
        read:true,
        content: {
            mimeType:'text/plain',
            text:"Dear sirs"
        }
    },

    {
        type:'email',
        from:'United',
        subject:'Flight update',
        folder:['travel'],
        read:true,
        content: {
            mimeType:'text/plain',
            text:"Dear sirs"
        }
    },



    {
        type:'event',
        datetime:{
            day:31,
            month:8,
            year:2017
        },
        title:'birthday',
    },
    {
        type:'event',
        datetime:{
            day:15,
            month:8,
            year:2017,
            hour:10,
            minute:15
        },
        title:'birthday',
    },



    {
        type:'artist',
        name:'Erasure'
    },
    {
        type:'artist',
        name:'Depeche Mode'
    },
    {
        type:'artist',
        name:'Cars'
    },
    {
        type:'artist',
        artist:'Alphaville',
    },




    {
        type:'album',
        artist:'Erasure',
        name:'Wild'
    },
    {
        type:'album',
        artist:'Erasure',
        name:'The Innocents'
    },
    {
        type:'album',
        artist:'Depeche Mode',
        name:'Some Great Reward'
    },
    {
        type:'album',
        artist:'Depeche Mode',
        name:'Violator'
    },
    {
        type:'album',
        artist:'Depeche Mode',
        name:'Songs of Faith and Devotion'
    },

    {
        type:'song',
        artist:'Depeche Mode',
        album:'Violator',
        name:'In Your Eyes'
    },



    {
        type:'album',
        artist:'Alphaville',
        name:'Best Of',
    },
    {
        type:'song',
        artist:'Alphaville',
        name:'Forever Young',
        url:'https://joshondesign.com/p/MaiTai/b1/Samples/Forever_Young.mp3'
    },



    {
        type:'artist',
        artist:'Liver',
    },
    {
        type:'album',
        artist:'Liver',
        name:"Best 'O",
    },
    {
        type:'song',
        artist:'Liver',
        name:"Liver Song",
        url:'https://joshondesign.com/p/MaiTai/b1/Samples/Liver.mp3'
    },






    {
        type:'contact',
        first:"Josh",
        last:"Marinacci",
        address: [
            {
                street:"50 Nice Street",
                city:"Awesomeville",
                state:"TA",
                zip:"66666"
            }
        ]
    },
    {
        type:'contact',
        first:'Bill',
        last:"Roberts",
    },
    {
        type:'contact',
        first:'Rob',
        last:"Williams",
    },
    {
        type:'contact',
        first:'Steve',
        last:"Martin",
    },



    {
        type:'note',
        title:'notes from the meeting',
        body:'this is a note',
    },
    {
        type:'note',
        title:'plan for the next year',
        body:'this is another note',
    },
    {
        type:'note',
        title:'year for the plan',
        body:'this is note another note. ha ha. nevermind.',
    },



    {
        type:'notification',
        title:'app launched',
        read:false
    },


    {
        type:'todo',
        text:"get the milk",
        completed:false
    },

    {
        type:'todo',
        text:"pick up the dry cleaning",
        completed: false
    },


    { type:'app', title:'Alarm', name:'alarms'},
    { type:'app', title:'Music', name:'musicplayer'},
    { type:'app', title:'Contacts', name:'contacts'},
    { type:'app', title:'Todo List', name:'todos'},
    { type:'app', title:'Debug', name:'debug'}

];