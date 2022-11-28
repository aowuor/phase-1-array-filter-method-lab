// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(arr, driver){
    const matchingDriver = arr.filter(name => name.toUpperCase() === driver.toUpperCase());
    return matchingDriver;
}
console.log(findMatching(drivers, 'Bobby'));


function fuzzyMatch(arr, char){
    const beginningSame = arr.filter(name => name.startsWith(char));
    return beginningSame;
}
console.log(fuzzyMatch(drivers, 'Sa'));

const drivers2 = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function matchName(arr, name){
    const matchingName = arr.filter(driver => driver.name === name);
    return matchingName;

}
console.log(matchName(drivers2, 'Bobby'))