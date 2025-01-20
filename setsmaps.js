const ids = new Set(['hi','from','set']);
ids.add(2);
ids.delete('hi');
console.log(ids.values());
for(const entry of ids.values()){
    console.log(entry)
}

const person1 = {name: 'max'};
const person2 = {name: 'Manuel'};
const personData = new Map([[person1,[{date: 'yesterday',price: '10'}]]]);
personData.set(person2,[{date: 'two weeks ago',price:'100'}])
console.log(personData);
console.log(personData.get(person1));

for(const [key,value] of personData.entries()){
    console.log(key,value);
}

for(const key of personData.keys()){
    console.log(key);
}

for(const value of personData.values()){
    console.log(value);
}

console.log(personData.size);

let person = {name: 'max'};
const persons = new WeakSet();
persons.add(person);
//person = null;
console.log(persons);

const personData2 = new WeakMap();
personData2.set(person, 'Extra info!');
person = null;
console.log(personData2);