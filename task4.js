let ar=["apple","banana","mango","kiwi","pineapple"]
ar.push("lemon")
ar.push("lime")
ar.push("sapota")
console.log(ar);

let ar1=[1,2,3,4,5]
ar1.pop()
console.log(ar1);

let ar2=["har","var","sri","vani","ramana"]
ar2.shift()
console.log(ar2);

let ar3=[9,8,7,6,78]
ar3.unshift(7,90)
console.log(ar3);

let arr=[10,20,30,40,50]
arr.splice(1,2)
console.log(arr);

let ar4=[1,2,3,4,5]
ar4.splice(2,1,100)
console.log(ar4);

let ar5=[1,2,7,8,9]
ar5.fill("hello",2,5)
console.log(ar5);

let ar6=[3,56,54,78,34]
let ar7=[72,7,5,84,6]
let t=ar6.concat(ar7)
console.log(t);

let ar8 = [10, 20, 30, 40, 50, 60]
console.log(ar8.slice(1,5));

let nesarr=[1,2,[3,4,[5]]]
console.log(nesarr.flat(Infinity));

 let ar9 = [10, 20, 30, 40, 50]
console.log(ar9.includes(30));

let ar10 = [5, 10, 15, 20, 25]
console.log(ar10.indexOf(20));

let arr1 = [1, 2, 3, 2, 1, 2]
console.log(arr1.lastIndexOf(2));

let arr2=[3,654,34,67,2,1]
console.log(arr2.sort());

let arr3=[234,534,29,45,56,66,7]
arr3.sort()
console.log(arr3.reverse());

let a=[1,2,3,4]
let b=[5,6,7,8]

let tot=[...a,...b]
console.log(tot);

let o1={
    name:"harsha",
    role:"frontend",
    exp:"fresher"
}
let o2={
    company:"stackly",
    exp1:2
}
let total={...o1,...o2}
console.log(total);

 let a3 = [10, 20, 30, 40]
let [d1,d2,d3,d4]=a3
console.log(d1,d2,d3,d4)

let nesarr1=[1,2,[3,4,[5,6]]]
let [c1,c2,[c3,c4,[c5,c6]]]=nesarr1
console.log(c1,c2,c3,c4,c5,c6);

let objVal = {
    name : "harsha",
    role : "developer",
    location : {
        mainLocation : "salem",
        currentLocation : "bangalore"
    }
}
let {name,role,location:{mainLocation,currentLocation}} = objVal

console.log(currentLocation,name,role,mainLocation);

let array=[1,2,3,4,5,6,7,8,9,10]
array.pop()
array.shift()
array.unshift(11,12)
console.log(array);

let array2=[1,2,3,2,4,2,3]
console.log(array2.includes(2));
console.log(array2.indexOf(2));
console.log(array2.lastIndexOf(2));

let ob1={
    name2:"har",
    role2:"front",
    exp2:"fresher"
}
let ob2={
    name1:"man",
    role1:"dev",
    exp1:3
}
let totobj={...ob1,...ob2}
let {name2,role2,exp2,name1,role1,exp1}=totobj
console.log(name2,role1);

let nested=[1,2,[3,4,[5,6]]]
let array15=nested.flat(Infinity)
console.log(array15.reverse());