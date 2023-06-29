import { PeopleDbProxy } from "./classes/proxy"

const peopleProxy = new PeopleDbProxy()

peopleProxy.getPeople().then((peoples)=>{
    console.log(peoples)
})

// Após o carregamento do Cache
peopleProxy.getPeople().then((peoples)=>{
    console.log('\n\n**************** In cache ****************')
    console.log(peoples)
})
peopleProxy.getPeople().then((peoples)=>{
    console.log(peoples)
})
peopleProxy.getPeople().then((peoples)=>{
    console.log(peoples)
})