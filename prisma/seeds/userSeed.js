const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const userData = [
    {
        posts : {
            create : [
                {
                    Title : 'This is a story all about how',
                    Body : 'This is a test post That I am adding content to so that when I style this on the page I have something more to work with,  thanks ',
                    created_at : new Date(),
                    updated_at : new Date()
                }
            ]
        },
        first_name : 'Baylen',
        last_name : 'Doss',
        address_one : 'test addy1',
        address_two : 'test addy 2',
        city : 'Dallas',
        stateId : 44,
        created_at : new Date(),
        updated_at : new Date()
    },
    {
        posts : {
            create : [
                {
                    Title : 'My life got flipped turned upside down',
                    Body : 'a second post about how I am going to make this app and I am typing things so that on the page I will have more content to style, thnaks',
                    created_at : new Date(),
                    updated_at : new Date()
                }
            ]
        },
        first_name : 'Philip',
        last_name : 'Banks',
        address_one : 'test addy3',
        address_two : 'test addy 4',
        city : 'Los Angeles',
        stateId : 5,
        created_at : new Date(),
        updated_at : new Date()
    },
]

async function main(){
    console.log('Satrting to seed')
    let stateArray = await fetch('https://worldpopulationreview.com/static/states/abbr-name-list.json')
    stateArray = await stateArray.json()
    for (let i = 0; i < stateArray.length; i++){
        const state = await prisma.state.create({
                    data : {
                        name : stateArray[i].name,
                        Abbreviation : stateArray[i].abbreviation,
                        created_at : new Date(),
                        updated_at : new Date()
                    }
                })
    }
    for (const user of userData){
        const u = await prisma.user.create({
            data : user
        })
    }
    console.log('done')

}

main()
.then(async () => {
    await prisma.$disconnect()
})
.catch(async e => {
    console.error(e)
    await prisma.$disconnect()
})