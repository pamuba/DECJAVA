var add = function(a){
    return Number(a)+Number(a)
}

var add = a=>{
                Number(a)+Number(a);
                console.log("Hii")
}

//doesnt have this, but can get it from the parent

let Group = {
    title:"Our Group",
    students:["John", "Will","Bill"],

    showList(){
        this.students.forEach(
            student => console.log(this.title+":"+student)
        )
    }
};

Group.showList();

//cant be called with new
//no arguments
//super
