const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

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

function findMatching(array, name) {
  const driverName = []
  for (const element of array) {
    if (name.toLowerCase() === element.toLowerCase()) {
      driverName.push(element)
    } else if (name.toUpperCase() === element.toUpperCase()) {
      driverName.push(element)
    }
  }
  return driverName
}

console.log(findMatching(drivers, "SaMmY"))

function fuzzyMatch(array, name) {
  const driver = []
  for (const element of array) {
    if (name[0] === element[0]) {
        driver.push(element)
    }
  }
  return driver
}

console.log(fuzzyMatch(drivers, "mm"))

function matchName(array, name) {
  const driverDetails = []
  for (const element of array) {
    if (name === element.name) {
      driverDetails.push(element)
    }
  }
  return driverDetails
}

console.log(matchName(drivers2, "Sally"))