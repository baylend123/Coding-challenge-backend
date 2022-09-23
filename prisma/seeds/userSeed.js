const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const userData = [
    {
        posts : {
            create : [
                {
                    Title : 'This is a story all about how',
                    Body : 'a post',
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
                    Body : 'a post',
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