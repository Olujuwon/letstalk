
const oldPets={
    cat: "meow",
    dog: "woofy",
    parrot: "bowie"
}

const newPet = {
    tiger: 'Paul'
}


const pets = (pet)=>{
    let old = Object.assign({}, ...pet, ...oldPets);
    return old;

};

console.log(pets(newPet));

console.log(oldPets);
