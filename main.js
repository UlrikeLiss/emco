
/* Homework 1: Create 3 Objects, some instances and 2 interactions:
class 1: Email
class 2: Task
class 3: Member

Instance 1: email1
Instance 2: task1
Instance 3: Ulrike
Instance 4: André
 
Interaction 1: Change status of Task or/ and Email
Interaction 2: Open a new task
*/


// Classes:
var Email = class {                       // Class 1: "Emails"
constructor(sender, recipient, status) {
  this.sender = sender
  this.recipient = recipient
  this.status = status
  this.statussetter = null
  }
}

var Task = class {                        // Class 2: "Tasks"
  constructor(title, deadline) {
    this.title = title
    this.deadline = deadline
    this.opener = []
  }    
}
   
var Member = class {                       // Class 3: "Member"
constructor(name, role) {
  this.name = name
  this.role = role
  this.statussetter = []
  }
  changestatus(email) {                   // Methods
    this.email = email
    email.statussetter = this.name
  }
   opentask(task) {                        // Methods
    this.task = task
    task.opener = this.name
  }
}
  
// Instances
var email1 = new Email ('Ganesh', "legal@camunda.com", "in process")
var email2 = new Email ('Clemens', "legal@camunda.com", "in process")
var email3 = new Email ("Jakob", "legal@camunda.com", "completed")
var task1= new Task ('Update Privacy Policy', "End of November")
var ulrike = new Member ('Ulrike', 'Line Manager')
var andré = new Member ('André', 'Legal counsel')
                        

// Interactions of Methods
ulrike.changestatus(email1, email3)          // Interaction 1
andré.changestatus(email2)                   // Interaction 1
ulrike.opentask(task1)                       // Interaction 2


// Show on console
console.log(email1, email2, email3, task1, ulrike, andré)
