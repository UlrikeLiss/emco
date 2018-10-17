/* Homework 1: Create 3 Objects, some instances and 2 interactions:
class 1: Object (instances: email/task) properties: status / flag / creator / owner
class 2: Status (instances: done / in progress / archive )
class 4: Flag (green / red / yellow / blue)
class 3: Member (name / role)
Instance 1: email
Instance 2: task
Instance 3: Ulrike
Instance 4: André
Instance 5: done 
Instance 6: green

Interaction 1: Change status of Task or/ and Email
Interaction 2: Open a new task
*/


// Classes:
var Object = class {                          // Class 2: "objects"
constructor(creator, owner, status, flag) {
  this.creator = creator
  this.owner = owner
  this.status = status
  this.flag  = flag
                                                                                                this.statussetter = null
  }
}

var status = class {                        // Class 2: "status"
  constructor(done, inProgress, archive) {
    this.inProgress = done
    this.inProgress = inProgress
    this.archive = archive
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
 
 var flag = class {                        // Class 4: "flag"
  constructor(red, green, yellow, blue) {
    this.red = red
    this.green = green
    this.yellow = yellow
    this.blue = blue
    }
  }
  
// Instances
var email = new Email ('Ganesh', "legal@camunda.com", "in process")
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
