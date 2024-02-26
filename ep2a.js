// function arrow 

// traditional

function fullname(first,last){
    return first + last 
}

console.log(fullname("Chutintorn","    Srisittikum"))

// using arrow 

fullname2 = (first,last) => first+last

console.log(fullname2("Bhutintorn","   ASrisittikum"))
 

setAge =(age)=>"My age is " + age + "   years old"

console.log(setAge(72))
