// Looping through nested arrays
// Of course, once you start nesting arrays you quickly end up with lots of array elements. The easiest way to work with large 
// arrays is to use loops. And in order to process nested arrays, you need to use nested loops.

// For example, the following code loops through the animals nested array we created above, displaying each of the animals, 
// along with their ages and types:



for ( i=0; i<animals.length; i++ )
{
  for ( j=0; j<animals[i].length; j++ )
  {
    alert ( animals[i][j][0] + " is a " + animals[i][j][1] + " year old " + animals[i][j][2] );
  }
}