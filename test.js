let x = {
    name: "Himanshu Seth",
    age: 23,
    print : function() {
        setTimeout(function() {
            console.log(`The name is ${this.name} & the age is ${this.age} is he valid voter ${this.validVoter}`);
        },1000);
    }
}
import data from './data.json'
console.log(data);