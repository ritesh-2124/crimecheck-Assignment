// Implement simple string compression - Given a string of alphabets only, compress repeated letters by indicating frequency of character by the number.
//     E.g. Hello, I'm good => Hel2o, I'm go2d
//     E.g. aaaabbbccd => a4b3c2d
//     E.g. aaabbbaaaa => a3b3a4


// function compress(str) {
//  let count = 1
//  for(let i = 0; i<str.length; i++){
//     if(str[i] === str[i+1]){
//         count++
//     }else{
//         if(count >1){
//             console.log(str[i]+count)
//           count = 1
//         }
//         else{
//             console.log(str[i])
//         }
//     }
//  }

// }

//  let str = "aaaabbbccd";
//  compress(str)


// Find if parentheses are balanced in a string, and indicate the position of the last unbalanced parentheses.
// E.g. '(a)(b)((c)' => Excess open parenthesis found, last index: 6
// E.g. ‘(a+(b+c)+a))’ => Excess close parenthesis found, last index: 11

function string(str){
    let stack = []
    for(let i =0; i<str.length; i++){
        if(str[i] == "("){
         stack.push(str[i])  
        }
    else{
           if(stack.length == 0){
             return ("NotBalanced" , i)
           }else{
            if( str[i] == ")" ){
                stack.pop()
            }
           }
        }
        }
        if(stack.length == 0){
            console.log("Balenced")
        }else{
            console.log("NotBalenced")
        }
    }

let parentheses =  '(a)(b)((c))))'
  string(parentheses)
