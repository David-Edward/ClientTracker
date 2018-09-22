class Client {
    constructor(firstName, lastName, service, source, date, online, loc, contact, subject) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._service = service;
        this._source = source;
        this._date = date;
        this._online = online;
        this._location = loc;
        this._contact = contact;
        this._subject = subject;
        this.lastInteraction = [];
        this.pastMeetings = [];
        this.totalEarned = 0;
        this.comments = [];
    }
    
    get firstName() {
        return this._firstName;
    }
    
    get lastName() {
        return this._lastName;
    }

    get service() {
        return this._service;
    }
    
    get source() {
        return this._source;
    }
    
    get date() {
        let complDate = this._date.day + ' ' + this._date.month + ', ' + this._date.year;
        return complDate;
    }
    
    get online() {
        if (this._online === 'online') {
            return this._online;
        } else {
            return 'in person';
        }
    }
    
    get location() {
        let place = this._location.city + ', ' + this._location.state;
        return place;
    }
    
    get contact() {
        return this._contact;
    }
    
    get subject() {
        return this._subject;
    }
    
    fullName() {
        return `${this._firstName} ${this._lastName}`;
    }
    
    addInter(last) {
        var dateOf = new Date().toJSON().slice(0,10);
        document.write(dateOf);
        this.lastInteraction.unshift(dateOf + ': ' + last);
    }
    
    addMeet(year, month, day, time, rate, fee) {
        let date = {
            year: year,
            month: month,
            day: day,
        };
        let earnings = rate * (1 - fee) * time;
        let summary = {
            date: date,
            earnings: earnings
        };
        
        this.pastMeetings.push(summary);
    }
    
    addComm(comment) {
        var dateMade = new Date().toJSON().slice(0,10)
        document.write(dateMade);
        let commObj = {
            dateMade: dateMade,
            comment: comment
        };
        this.comments.push(commObj);
    }
    
    sumEarn() {
        let earned = [];
        for (let earnInd = 0; earnInd < this.pastMeetings.length; earnInd++) {
            earned.push(this.pastMeetings[earnInd].earnings)
        };
        let total = earned.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        this.totalEarned = total;
    }
}

/*const test = new Client('Testy', 'McTesterson', 'Tutoring', 'Tests', { year: 2018, month: 'September', day: 16 }, false, { state: 'CO', city: 'Boulder' }, { email: 'testyMcT@test.tst', phone: '(555)555-5555' }, Testing)

console.log(test.fullName());*/

module.exports = Class;