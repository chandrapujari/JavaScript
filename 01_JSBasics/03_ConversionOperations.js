let firstName="Chandra"
let lastName=null
let rollNumber=undefined
let accountNumber=1234567
let isPresent=true
/*check string to number conversion*/
let IslastName= Number(firstName)
console.log(typeof (IslastName))
console.log(IslastName)
/*check Number to String conversion*/
let valueInString=String(accountNumber)
console.log(typeof (valueInString))
console.log(valueInString)
/*check null to number conversion*/
let nullValueInNumber= Number(lastName)
console.log(typeof (nullValueInNumber))
console.log(nullValueInNumber)
/*check null to string conversion*/
let nullValueInString = String(lastName)
console.log(typeof (nullValueInString))
console.log(nullValueInString)
/* check undefined to number conversion*/
let undefinedValueInNumber= Number(rollNumber)
console.log(typeof (undefinedValueInNumber))
console.log(undefinedValueInNumber)
/* check boolean to number conversion*/
let booleanInNumber=Number(isPresent)
console.log(booleanInNumber)
console.log(typeof(booleanInNumber))
/* check boolean to string conversion*/
let booleanInString=String(isPresent)
console.log(booleanInString)
console.log(typeof(booleanInString))