import './calendar.scss'

export class Calendar {
  constructor() {
    this.heading = 'Calendar App'
    this.events = {}
    this.eventInitializer()
  }
  eventInitializer(){
    for (var i = 1 ; i < 29; i++){
      this.events[i] = ''
    }
  }
  errorHandler(day){
    if (isNaN(day) || (day != parseInt(day, 10)) || day < 1 || day > 29){
      alert("Not a valid date")
      return false
    }
    return true
  }
  addEvent() {
    var day = prompt("Date you would like to add an event to?", 1)
    if(this.errorHandler(day) && !this.events[day]){
      var description = prompt("Event Title", "Job Interview")
      this.events[day] = description
    }
  }
  editEvent(){
    var day = prompt("Date of event you would like to edit?", 1)
    if(this.errorHandler(day) && this.events[day]){
      var description = prompt("Event Title", "Job Interview")
      this.events[day] = description
    }
  }
  deleteEvent() {
    var day = prompt("Date of event you would like to delete?", 1)
    if(this.errorHandler(day)){
      this.events[day] = ''
    }
  }
}
