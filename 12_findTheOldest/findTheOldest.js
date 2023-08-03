const findTheOldest = function(a) {
    let outIndex =0;
    a.reduce((age, person, index) => {
        if(!person.yearOfDeath) person.yearOfDeath = new Date().getFullYear()
        if(person.yearOfDeath-person.yearOfBirth > age) {
            outIndex = index;
        }
        else {
            age = person.yearOfDeath-person.yearOfBirth;
        }
        return person.yearOfDeath-person.yearOfBirth;
    },0);
    return a[outIndex]
};

// Do not edit below this line
module.exports = findTheOldest;
