console.log("Hello World");
for(let i=10;i>0;i--){
    console.log(i)
}
console.log("max boqqolo");
//loops of javascript
for(let i=0;i<=6;i++)
{
    console.log('loop of javascript' + i);
    if(i==3)
    break;
}
const names=['john','ali','mary','bob'];
for(let i=0;i<names.length;i++)
{
    console.log(names[i])
    if(i==3)
    break;
}

for(name of names) console.log(name);
//objects
const user={firstName:'John',lastName:'Doe'};
for(key in user) console.log(user[key]);
let i=0;
while(i<10)
{
    
    i++;
    if(i==5)
    break;
    console.log(i)
}
const animals=['cat','dog','horse','sheep'];
animals.forEach(animal=> {
console.log(animal);
})
//arry of javascript
const items=[
    {name:'Bike', price:100},
    {name:'Ali' ,price:200},
    {name:'book', price:10},
    { name:'computer',price:1000 },
    {name:'phone',price:500},
    {name:'keyboard', price:25},
    {name:'TV', price:5}
]
const filteredItems=items.filter((item)=>
{
    return item.price <=100
})
console.log(filteredItems)