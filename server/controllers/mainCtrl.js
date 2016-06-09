'use strict'
let myOccupations = ['sales', 'more sales'],
myHobbies = [{
    name: 'Rock Climbing',
    type: 'current'
},
{
    name: 'Weight Training',
    type: 'past'
}],
myName = 'Breiden Busch',
myLocation = 'Salt Lake City',
skillz = [{
   id: 1,
   name: 'JS',
   experience: 'Intermediate'
}];

module.exports = {
    getName: (req, res, next) => {
        res.status(200).json({name: myName})
    },
    getLocation: (req, res, next) => {
        res.status(200).json({location: myLocation})
    },
    getOccupations: (req, res, next) => {
        let query = req.query.order;
        if (query === 'asc') res.status(200).json({occupations: myOccupations.sort()});
        else if (query === 'desc') res.status(200).json({occupations: myOccupations.sort().reverse()});
        else res.status(200).json({occupations: myOccupations});
    },
    getLatestOccupation: (req, res, next) => {
        res.status(200).json({latestOccupation: myOccupations[0]})
    },
    getHobbies: (req, res, next) => {
        let query = req.query.order;
        if (query === 'asc') res.status(200).json({hobbies: myHobbies.sort()});
        else if (query === 'desc') res.status(200).json({hobbies: myHobbies.sort().reverse()});
        else res.status(200).json({hobbies: myHobbies});
    },
    getHobby: (req, res, next) => {
        let returnArray = [];
        let type = req.params.type;
        for (let i = 0; i < myHobbies.length; i++) {
            if (myHobbies[i].type === type) returnArray.push(myHobbies[i]);
        }
        if (returnArray.length >= 1) res.status(200).json(returnArray);
        else res.status(500).json('No Matches Found');
    },
    changeName: (req, res, next) => {
        if (req.body.name) {
            myName = req.body.name;
            res.status(200).json({name: myName})
        } else {
            res.status(500).json('Invalid. Please use a valid name');
        }
    },
    changeLocation: (req, res, next) => {
        if (req.body.location) {
            myLocation = req.body.location;
            res.status(200).json({location: myLocation})
        } else {
            res.status(500).json('Invalid. Please use a valid location');
        }
    },
    addHobby: (req, res, next) => {
        if (req.body.name && req.body.type) {
            myHobbies.push(req.body);
            res.status(200).json(myHobbies);
        } else {
            res.status(500).json('Invalid. Please ensure new hobby has both a name, and type');
        }
    },
    addOccupation: (req, res, next) => {
        if (req.body.occupation) {
            myOccupations.push(req.body.occupation);
            res.status(200).json(myOccupations);
        } else {
            res.status(500).json('Invalid. Please enter an occupation name');
        }
    },
    getSkillz: (req, res, next) => {
        let query = req.query.experience;
        let returnArray = [];

        if (query) {
            for (let i = 0; i < skillz.length; i++) {
                if (query.toLowerCase() === skillz[i].experience.toLowerCase()) returnArray.push(skillz[i])
            }
            if (returnArray.length >= 1) res.status(200).json(returnArray);
            else  res.status(500).json('Nothing matches your search');
        } else {
            res.status(200).json(skillz);
        }
    },
    addSkill: (req, res, next) => {
        if (req.body.name && req.body.experience) {
            skillz.push({
                id: skillz.length + 1,
                name: req.body.name,
                experience: req.body.experience
            })
            res.status(200).json(skillz)
        } else {
            res.status(500).json('Please add a valid skill')
        }
    }
}
