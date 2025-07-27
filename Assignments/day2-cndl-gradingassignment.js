/* 
Assignment Details:
Write a JavaScript function that evaluates a student's score and returns their grade using a switch statement to assess score ranges.
Assignment Requirements:
1. Create a function that takes a student's score as a parameter.
2. Declare and initialize the variable.
3. Use `switch` statement inside the function.
4. Return the corresponding grade.
5. Call the function and print the result.
*/


function evaluateGrade(mark) {
  switch (true) {
    case (mark >= 90):
      return 'Grade O - Outstanding';
    case (mark >= 70):
      return 'Grade A';
    case (mark >= 50):
      return 'Grade B';
    case (mark >= 35):
      return 'Pass';
    case (mark < 35):
      return 'Fail';
    default:
      return 'Check the mark';
  }
}

  console.log(evaluateGrade(24))