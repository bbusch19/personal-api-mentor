'use strict'
let myOccupations = ['sales', 'more sales'],
myHobbies = [{
    name: 'Rock Climbing',
    type: 'current'
},
{
    name: 'Weight Training',
    type: 'past'
}];

module.exports = {
    getName: (req, res, next) => {
        res.status(200).json({name: "Donald Duck"})
    },
    getLocation: (req, res, next) => {
        res.status(200).json({location: 'Timbuktu'})
    },
    getOccupations: (req, res, next) => {
        res.status(200).json({occupations: myOccupations})
    },
    getLatestOccupation: (req, res, next) => {
        res.status(200).json({latestOccupation: myOccupations[0]})
    },
    getHobbies: (req, res, next) => {
        res.status(200).json({hobbies: myHobbies})
    },
    getHobby: (req, res, next) => {
        let returnArray = [];
        let query = req.params.type;
        for (let i = 0; i < myHobbies.length; i++) {
            if (myHobbies[i].type === query) returnArray.push(myHobbies[i]);
        }
        if (returnArray.length >= 1) res.status(200).json(returnArray);
        else res.status(500).json('No Mathes Found');
    }
}
