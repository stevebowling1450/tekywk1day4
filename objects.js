var person ={
    firstname: "Steve",
    lastName: "Bowling",
    email: "steve.bowling@interapthq.com",
    phone: "606.477.1703",
    birthday: "3/7/76",
    fullName : function(){
        return this.firstname +" "+ this.lastName
    }

};

function printDetails (x){
    console.log(x.fullName());
    console.log(x.email);
    console.log(x.phone);
    console.log(x.birthday);
};

printDetails(person);
 
 