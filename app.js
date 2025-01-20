const numbers = [1, 2, 3];
console.log(numbers);

// const moreNumbers = Array(5, 2);
// console.log(moreNumbers);

// const yetMoreNumbers = Array.of(1, 2);
// console.log(yetMoreNumbers);

const listItems = document.querySelectorAll('li');
console.log(listItems);

const arrayListItems = Array.from(listItems);
console.log(arrayListItems);

const hobbies = ['cooking','sports'];
const personalData = [30,'max',{moreDetail:[1,2,3]}];
console.log(personalData[2]);
const analysticData = [[1,2.2],[2,4.5]];

for(const data of analysticData){
    for(dataPoint of data){
        console.log(dataPoint);
    }
}

const hobbies1 = ['sports','cooking'];
hobbies1.push('reading');               //push value to last index
hobbies1.unshift('Coding');
hobbies1.pop();
hobbies1.shift();
hobbies1[1] = 'Coding';
hobbies1[2] = 'sleeping';
hobbies1.splice(2,0,'watching');
hobbies1.splice(1,1,'writing');
hobbies1.splice(-1,1,'Dreaming');
console.log(hobbies1);

const testResults = [2,0.1,2.5,4,5];
const storedResults = testResults.slice();
testResults.push(10);
console.log(storedResults,testResults);

const testResults1 = [2,0.1,2.5,4,5];
const storedResults1 = testResults1.concat([3.99,2]);
testResults1.push(10);
console.log(storedResults1,testResults1);

console.log(testResults1.indexOf(2.5));
console.log(testResults1.lastIndexOf(4));

const personalData1 = [{name:'Max'},{name:'Manuel'}];
console.log(personalData1.indexOf({name:'Manuel'}));   //it throws -1 if it does not matches values

const manuel = personalData1.find((person,idx,persons)  =>{              //finds the value and returns
      return person.name === 'Manuel';
});
manuel.name = 'anna';
console.log(manuel,personalData1);

const maxIndex = personalData1.findIndex((person,idx,persons)  =>{        //finds the value and returns index
    return person.name === 'Max';
});
console.log(maxIndex);

const prices = [10.99,5.99,3.99,6.59];
const tax = 0.19;
const taxAdjustedPrice = [];

// for(const price of prices){
//     taxAdjustedPrice.push(price*(1+tax));
// }
prices.forEach((price,idx,prices)=>{
    const priceObj = {index: idx, adjPrice: price*(1+tax)}
    taxAdjustedPrice.push(priceObj);
})
console.log(taxAdjustedPrice);

const prices1 = [10.99,5.99,3.99,6.59];
const tax1= 0.19;
const mapAry = prices1.map((price,idx,prices)=>{      //map method returns new array it doesnot change already existing array
    const priceObj = {index: idx, adjPrice: price*(1+tax)}
    return priceObj
})
console.log(prices1,mapAry);

const sortedPrices = prices1.sort((a,b) =>{
    if(a>b){
        return 1
    }else if(a === b){
        return 0
    }else{
        return -1
    }
});
console.log(sortedPrices);

const filterdArry = prices1.filter(price =>  price>6 );   //shorter Arrow Functions
console.log(filterdArry);

const sumReduce = prices1.reduce((prevalue,curValue,curIdx,prices) => {
    return prevalue + curValue;
}, 0);
console.log(sumReduce);

const data = 'New York;10.00;2000';
console.log(data.split(';'));

const data2 = ['Ant','Man','hhhhh'];
console.log(data2.join(' '));

const copiedData = [...data2];    // spread operator copies elements of an array and puts them in new array
console.log(copiedData);

console.log(Math.min(...prices1));  //it ouputs min value 

const persons = [{name: 'max', age: 30},{name: 'manuel',age: 31}];
//const copiedPersons = [...persons];  
const copiedPersons = persons.map(person => ({
   name: person.name,
   age: person.age
}))
persons.push({name: 'Ana', age: 29});
persons[0].age = 40;  //age changes in both persons and copiedPersons to overcome this use above method
console.log(persons,copiedPersons);

const nameData = ['Robin','Hood','Mr',24];
const [firstname,secondname,...remainValues] = nameData;
console.log(firstname,secondname,remainValues);