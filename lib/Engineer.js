const Employee = require("./Employee");

class Engineer extends Employee 
{
    constructor (name, id, title, github)
    {
        super(name, id, title);
        this.github = github
    }

getName() {
    return this.name;
}

getId() {
    return this.id;
}

getEmail() {
    return this.email;
}

getRole() {
    return "Engineer";
}


}