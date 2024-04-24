// let a = [32, 46, 67];
// let b = [16, 54, 23];

// let alice = 0;
// let bob = 0;
// let resultado = [alice,bob];

// for (let i = 0; i <= 3; i++) {
//   if (a[i] < b[i]) {
//     alice += 1;
//   } else if (a[i] > b[i]) {
//     bob += 1;
//   } else {
//     a[i] = b[i];
//     return resultado;
//   }
// }
// console.log(resultado);

// ---------------------------------------------------
// var array1= [1,2,3,4,5,23,35,6];
// var array2= [2,4];
 
// var iguales=0;
// for(var i in array1)
// {
//  //console.log(i+"----> for 1")
// 	for(var j in array1)
// 	{
//    // console.log(j+"---> for 2")
// 		if(array1[i]==array2[j]){
// 			iguales++;
//       console.log(array2[j])
//     }
// 	}
// }
// console.log(iguales);

// ---------------------------------------------
var array1=new Array(1,2,3,4,5,6);
var array2=new Array(2,4,6,78);
 
var iguales=0;
for(var i=0;i<array1.length;i++)
{
	for(var j=0;j<array1.length;j++)
	{
		if(array1[i]==array2[j])
			iguales++;
	}
}
console.log(iguales);
