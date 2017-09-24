// TODO: unfinished
class List{
  constructor(input) {
    this.input = input;
    this.values = this.init();
  };

  init(){
    return this.input ? this.input : [];
  };

  append(list) {
    list.values.forEach(a => {
      this.values.push(a)})
    return this;
  };

  concat(list) {
    return this.append(list);
  };

  filter(fun) {
     var result = [];
     this.values.forEach(a =>{
       if (fun(a)){ result.push(a)};
     })
     this.values = result;
     return this; //Why can't I return result?

     //console.log(result) --> [] and [1,3,5]
     //return result --> undefined and undefined
   };

   length() {
     let result = 0;
     this.values.forEach(() => {
       result++;
     })
     return result;
   }

   map(fun) {
     let result = [];
     /*
     this.values.forEach(a => {
       if(fun(a)) { return result.push(fun(a))}
     })
     */

     if (this.values instanceof Array) {
       this.values.forEach((a, i) => { //of
         return result.push(fun(a, i));
       });
     } else if (this.values instanceof Object) {
       for (let key in this.values) { //in
         if (this.values.hasOwnProperty(key)) {
           result.push(fun(this.values[key],
            Object.keys(this.values).indexOf(key)));
         }
       }
     }
     this.values = result;
     return this;
   }

   foldl(fun, start) {
     let result = start;
     this.values.forEach((a, i, array) => {
       if (i == 0) {
         result += fun(result, a);
       } else if (fun(array[i-1], a)) {
         result += fun(array[i-1], a )
       };
       console.log(result);
     })
     return result;
   }

   foldr(fun, acc) {
     let reversedValues = this.values.reverse();
     reversedValues.forEach(a =>{
       acc = fun(a, acc);
     });
     return acc;
    }


   foldl(fun, acc) {
     this.values.forEach(a =>{
       acc = fun(a, acc);
     });
     return acc;
   }

   reverse(){
     let result = [];
     this.values.forEach((a,i)=>{
       result[this.values.length-1-i] = a;
     })
     this.values = result;
     return this;
  }
}


  // reverse() {
  //   let result = [];
  //   let index = 0;
  //   for (let x of this.values) {
  //     if (this.values.hasOwnProperty(x)) {
  //        index += 1;
  //     }
  //   }
  //   for (index; index >= 0; index--) {
  //     console.log(index);
  //     result.push(this.values[index]);
  //   }
  //   this.values = result;
  //   console.log(this);
  //   return this.values;
  // }
  //}

module.exports = List;
