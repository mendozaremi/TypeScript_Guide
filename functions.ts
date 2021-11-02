/* Optional parameters can be used when arguments need not be compulsorily passed for a function’s execution. A parameter can be marked optional by appending a question mark to its name. The optional parameter should be set as the last argument in a function. The syntax to declare a function with optional parameter is as given below − */

function disp_details(id:number,name:string,mail_id?:string) { 
  console.log("ID:", id); 
  console.log("Name",name); 
  
  if(mail_id!=undefined)  
  console.log("Email Id",mail_id); 
}
disp_details(123,"John");
disp_details(111,"mary","mary@xyz.com");

/*Rest parameters are similar to variable arguments in Java. Rest parameters don’t restrict the number of values that you can pass to a function. However, the values passed must all be of the same type. In other words, rest parameters act as placeholders for multiple arguments of the same type.

To declare a rest parameter, the parameter name is prefixed with three periods. Any nonrest parameter should come before the rest parameter. */

function addNumbers(...nums:number[]) {  
  var i;   
  var sum:number = 0; 
  
  for(i = 0;i<nums.length;i++) { 
     sum = sum + nums[i]; 
  } 
  console.log("sum of the numbers",sum) 
} 
addNumbers(1,2,3) 
addNumbers(10,10,10,10,10)