const getDeathYear = function (person) {
    if (person.hasOwnProperty('yearOfDeath')) {
        return person.yearOfDeath;
    } else {
        return new Date().getFullYear();
    }
}

const findTheOldest = function (people) {
    return people.reduce((person, nextPerson) => {
        let personAge = getDeathYear(person) - person.yearOfBirth;
        let nextPersonAge = getDeathYear(nextPerson) - nextPerson.yearOfBirth;
        if (personAge > nextPersonAge) {
            return person;
        } else {
            return nextPerson;
        }
    });
};

// Do not edit below this line
module.exports = findTheOldest;
