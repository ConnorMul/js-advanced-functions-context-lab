/* Your Code Here */


function createEmployeeRecord(empInfo) {
    let empRecord = {
        firstName: empInfo[0],
        familyName: empInfo[1],
        title: empInfo[2],
        payPerHour: empInfo[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    
    return empRecord
}

function createEmployeeRecords(empArrays) {
    return empArrays.map((emp) => createEmployeeRecord(emp))
}

function createTimeInEvent(dateStamp) {
    let dateTime = dateStamp.split(" ")

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(dateTime[1]),
        date: dateTime[0]
    })

    return this

}

function createTimeOutEvent(dateStamp) {
    let dateTime = dateStamp.split(" ")

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(dateTime[1]),
        date: dateTime[0]
    })

    return this

}

function hoursWorkedOnDate(date) {
   let timeIn = this.timeInEvents.find((timeArray) => timeArray.date === date)

   let timeOut = this.timeOutEvents.find((timeArray) => timeArray.date === date)

   let hoursWorked = timeOut.hour - timeIn.hour

   return hoursWorked / 100
}

function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
}


let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find((emp) => emp.firstName === firstName)
}

function calculatePayroll(empRecords) {
    return empRecords.reduce((memo, record) => memo + allWagesFor.call(record), 0)
}