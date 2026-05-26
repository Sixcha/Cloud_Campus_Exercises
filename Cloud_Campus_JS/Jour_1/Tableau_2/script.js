const user = {
    firstName: 'Alex',
    lastName: 'Testeur',
    age: 18,
    fullName: function(){
        return this.firstName + " " + this.lastName;
    },
    isMajor: function(){
        return this.age>=18
    }
}

console.log(user,user.fullName(),user.isMajor())