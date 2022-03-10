
const arr = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];

var X,i,j;

 for(i=0; i<arr.length-1; i++ ){
     for (let j = i+1; j < arr.length; j++) {
        if (arr[i]>arr[j]) {
            X=arr[i];
            arr[i]=arr[j];
            arr[j]=X;
        }
         
     }
 }


 for(var b=0; b<arr.length; b++ ){
 console.log( arr[b]);
}