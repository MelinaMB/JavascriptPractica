const a = [32, 46, 67];
const b = [16, 54, 23];

let alice = 0;
let bob = 0;
resultado = [`${alice},${bob}`];

for (let i=0; i<3; i++){
   
    if(a[i]<b[i]){
        return alice +=1
    }else if(a[i]>b[i]){
        return bob +=1
    }else{
        a[i] = b[i] 
        return resultado;
    }
};
console.log(resultado);
