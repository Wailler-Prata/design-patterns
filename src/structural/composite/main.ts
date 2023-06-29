import { InterfaceEmployerProtocol } from "./interfaces/iEmployer"
import { Employer } from "./classes/employers"

const boss = new Employer(1, "Wailler", "boss")
const employer1 = new Employer(1, "Woody", "employer1")
const masterBoss = new Employer(1, "Bruna", "master boss")

boss.addSubordinates(employer1)
masterBoss.addSubordinates(boss)

const getInfoInEmployers = (...employers: InterfaceEmployerProtocol[]): void =>{
    employers.forEach(employer =>{

        const subordinates = employer.getSubordinates()
        treehidentation = treehidentation + '--'
        console.log(treehidentation, employer.info())

        if (subordinates.length >= 0){            
            getInfoInEmployers(...subordinates)    
        }
    })    
}

var treehidentation = '-'
console.log('\n\n', treehidentation, masterBoss.info())
getInfoInEmployers(...masterBoss.getSubordinates())