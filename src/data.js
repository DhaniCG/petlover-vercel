// I know you can generate random number or string by using Math.random()... I just want to simplify my life a bit because I'm build everything from scratch...

let data = [
    {
        id: "cat1",
        pic: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80",
        name: "Tom",
        age: 6,
        type: "Cat",
        category: "cats",
        description: "He loves chasing after small animals"
    },
    {
        id: "cat2",
        pic: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        name: "Mia",
        age: 3,
        type: "Cat",
        category: "cats",
        description: "She likes to sleep all day..."
    },
    {
        id: "cat3",
        pic: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80",
        name: "Coco",
        age: 4,
        type: "Cat",
        category: "cats",
        description: "He is a playful cat..."
    },
    {
        id: "cat4",
        pic: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
        name: "Bruno",
        age: 3,
        type: "Cat",
        category: "cats",
        description: "He likes to climb mountain... for some reason"
    },
    {
        id: "cat5",
        pic: "https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
        name: "Galo",
        age: 4,
        type: "Cat",
        category: "cats",
        description: "He is very playful... Almost like a fox"
    },
    {
        id: "cat6",
        pic: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
        name: "Lia",
        age: 0.4,
        type: "Cat",
        category: "cats",
        description: "She is a loner..."
    },
    {
        id: "cat7",
        pic: "",
        name: "Tiger",
        age: 16,
        type: "Cat",
        category: "cats",
        description: "He just wants some friends... He lost all of them in his belly"
    },
    {
        id: "cat8",
        pic: "",
        name: "Lulu",
        age: 3,
        type: "Cat",
        category: "cats",
        description: "She is a literal fluff ball..."
    },
    {
        id: "cat9",
        pic: "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
        name: "Lucia",
        age: 0.3,
        type: "Cat",
        category: "cats",
        description: "She likes to chill and eat..."
    },
    {
        id: "cat10",
        pic: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
        name: "Brandon",
        age: 5,
        type: "Cat",
        category: "cats",
        description: "I think he's cooler than all of us humans..."
    },
    {
        id: "dog1",
        pic: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
        name: "Leo",
        age: 6,
        type: "Dog",
        category: "dogs",
        description: "Always happy evevryday..."
    },
    {
        id: "dog2",
        pic: "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGRvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
        name: "Louis",
        age: 3,
        type: "Dog",
        category: "dogs",
        description: "Don't eat that flower please... that's not a food"
    },
    {
        id: "dog3",
        pic: "https://images.unsplash.com/photo-1575859431774-2e57ed632664?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGRvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
        name: "Frey",
        age: 4,
        type: "Dog",
        category: "dogs",
        description: "She is the unpredictable one..."
    },
    {
        id: "dog4",
        pic: "https://images.unsplash.com/photo-1581888227599-779811939961?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGRvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
        name: "Lucy",
        age: 4,
        type: "Dog",
        category: "dogs",
        description: "He is going to be your friend when watching TV..."
    },
    {
        id: "dog5",
        pic: "",
        name: "Luke",
        age: 2,
        type: "Dog",
        category: "dogs",
        description: "She likes to explore weird places..."
    },
    {
        id: "dog6",
        pic: "",
        name: "Gelo",
        age: 7,
        type: "Dog",
        category: "dogs",
        description: "He loves water..."
    },
    {
        id: "dog7",
        pic: "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGRvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
        name: "Mary",
        age: 8,
        type: "Dog",
        category: "dogs",
        description: "She is a nerd... maybe she can solve you math problem"
    },
    {
        id: "dog8",
        pic: "https://images.unsplash.com/photo-1521673461164-de300ebcfb17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGRvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
        name: "Lary",
        age: 3,
        type: "Dog",
        category: "dogs",
        description: "Just as lazy as a Cat..."
    },
    {
        id: "dog9",
        pic: "",
        name: "Pedro",
        age: 23,
        type: "Dog",
        category: "dogs",
        description: "Be careful..."
    },
    {
        id: "dog10",
        pic: "https://images.unsplash.com/photo-1615751072497-5f5169febe17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGRvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
        name: "Hana",
        age: 4,
        type: "Dog",
        category: "dogs",
        description: "Cutest and most lovable one..."
    },
    {
        id: "bird1",
        pic: "https://images.unsplash.com/photo-1606567595334-d39972c85dbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmlyZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
        name: "Muy",
        age: 2,
        type: "Bird",
        category: "birds",
        description: "She is a photo model..."
    },
    {
        id: "bird2",
        pic: "https://images.unsplash.com/photo-1514346267951-b572f198e166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMyfHxiaXJkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
        name: "Ruy",
        age: 2.5,
        type: "Bird",
        category: "birds",
        description: "Arctic version of Muy..."
    },
    {
        id: "bird3",
        pic: "https://images.unsplash.com/photo-1520808663317-647b476a81b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGJpcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
        name: "Berry",
        age: 3,
        type: "Bird",
        category: "birds",
        description: "He can find his own foods..."
    },
    {
        id: "bird4",
        pic: "https://images.unsplash.com/photo-1591198936750-16d8e15edb9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGJpcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
        name: "Kelly",
        age: 1,
        type: "Bird",
        category: "birds",
        description: "She just want to be freed..."
    },
    {
        id: "bird5",
        pic: "https://images.unsplash.com/photo-1593088302678-a2774224cb3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fGJpcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
        name: "Luka",
        age: 2,
        type: "Bird",
        category: "birds",
        description: "He just want to eat and sleep..."
    },
    {
        id: "bird6",
        pic: "",
        name: "Golly",
        age: 8,
        type: "Bird",
        category: "birds",
        description: "Sometimes you just can't see it... but, it's definitely there"
    },
    {
        id: "bird7",
        pic: "https://images.unsplash.com/photo-1605092675701-0dafa674328e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODN8fGJpcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
        name: "Lia",
        age: 3,
        type: "Bird",
        category: "birds",
        description: "She is loyal... you can trust her... just believe me"
    },
    {
        id: "bird8",
        pic: "",
        name: "Lona",
        age: 1,
        type: "Bird",
        category: "birds",
        description: "She likes to eat something that's still moving..."
    },
    {
        id: "fish1",
        pic: "https://images.unsplash.com/photo-1497671954146-59a89ff626ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpc2h8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
        name: "Mei",
        age: 1,
        type: "Fish",
        featured: true,
        category: "fishes",
        description: "Small but aggressive..."
    },
    {
        id: "fish2",
        pic: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGZpc2h8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
        name: "Maki",
        age: 26,
        type: "Fish",
        category: "fishes",
        description: "He looks like he's angry... but, he's actually not (But still, don't put your finger in his mouth)"
    },
    {
        id: "fish3",
        pic: "https://images.unsplash.com/photo-1655608944255-217f19fe6741?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTJ8fHNlYWhvcnNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
        name: "Horsey",
        age: 1.5,
        type: "Fish",
        category: "fishes",
        description: "I believe he can feed the other fishes by spitting out fish foods from his mouth... Atleast that's what I learned from Insaniquarium"
    },
    {
        id: "fish4",
        pic: "https://images.unsplash.com/photo-1584267814800-c9de7a2cfeac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YW5nbGVyJTIwZmlzaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
        name: "Anger-Problem",
        age: 7,
        type: "Fish",
        category: "fishes",
        description: "No one want to adopt her... I think you're the right person to adopt her"
    },
    {
        id: "fish5",
        pic: "https://images.unsplash.com/photo-1516408388733-2f8364f2e00b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGZpc2h8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
        name: "Comey",
        age: 1,
        type: "Fish",
        category: "fishes",
        description: "Looks like she want's to kiss someone, heheh... heh"
    },
    {
        id: "fish6",
        pic: "",
        name: "Sury",
        age: 45,
        type: "Fish",
        category: "fishes",
        description: "I don't know but when someone adopt him... he always back here, I think it's a good idea to give this fish for free"
    }
]

let animalFoods = [
    {
        id: "catfood1",
        pic: "../../public/PetFoods/cats-food-1.png", // use path as if this was in the used jsx file, not this file (tried with singe double dots (../) before and didn't work)
        name: "Brit  Care",
        flavour: "Chicken",
        for: "All",
        type: "Cat",
        category: "cats",
        featured: true
    },
    {
        id: "catfood2",
        pic: "../../public/PetFoods/cats-food-2.png",
        name: "Funnycats",
        flavour: "Chicken",
        for: "Adult",
        type: "Cat",
        category: "cats",
        featured: true
    },
    {
        id: "catfood3",
        pic: "../../public/PetFoods/cats-food-3.png",
        name: "Happy Cat",
        flavour: "Fish",
        for: "Kitten",
        type: "Cat",
        category: "cats",
        featured: true
    },
    {
        id: "catfood4",
        pic: "../../public/PetFoods/cats-food-4.png",
        name: "Brit Premium",
        flavour: "Salmon",
        for: "Adult",
        type: "Cat",
        category: "cats",
        featured: true
    },
    {
        id: "dogfood1",
        pic: "../../public/PetFoods/dogs-food-1.png",
        name: "Nulo - Medal Series",
        flavour: "Salmon and Sweet Potato",
        for: "Adult",
        type: "Dog",
        category: "dogs",
        featured: true
    },
    {
        id: "dogfood2",
        pic: "../../public/PetFoods/dogs-food-2.png",
        name: "IAMSO",
        flavour: "Chicken and Barley",
        for: "Adult",
        type: "Dog",
        category: "dogs",
        featured: true
    },
    {
        id: "dogfood3",
        pic: "../../public/PetFoods/dogs-food-3.png",
        name: "Happy Dog",
        flavour: "Fish, Potato, and Banana",
        for: "Adult",
        type: "Dog",
        category: "dogs",
        featured: true
    },
    {
        id: "dogfood4",
        pic: "../../public/PetFoods/dogs-food-4.png",
        name: "Purina - Bakers Complete",
        flavour: "Chicken, Rice, and Vegetables",
        for: "Adult",
        type: "Dog",
        category: "dogs",
        featured: true
    },
    {
        id: "birdfood1",
        pic: "../../public/PetFoods/birds-food-1.png",
        name: "Roudybush",
        flavour: "Corn",
        for: "All",
        type: "Bird",
        category: "birds",
        featured: true
    },
    {
        id: "birdfood2",
        pic: "../../public/PetFoods/birds-food-2.png",
        name: "Douwe Egberts",
        flavour: "Wheat",
        for: "Young",
        type: "Bird",
        category: "birds",
        featured: true
    },
    {
        id: "birdfood3",
        pic: "../../public/PetFoods/birds-food-3.png",
        name: "KG Group",
        flavour: "Rice",
        for: "Chicken",
        type: "Bird",
        category: "birds",
        featured: true
    },
    {
        id: "fishfood1",
        pic: "../../public/PetFoods/fishes-food-1.png",
        name: "Bug Bites",
        flavour: "Bugs",
        for: "Small",
        type: "Fish",
        category: "fishes",
        featured: false
    },
    {
        id: "fishfood2",
        pic: "../../public/PetFoods/fishes-food-2.png",
        name: "Vital Aquatics - Discus Meat Mix",
        flavour: "Bugs",
        for: "Small",
        type: "Fish",
        category: "fishes",
        featured: true
    },
    {
        id: "fishfood2",
        pic: "../../public/PetFoods/fishes-food-2.png",
        name: "Vital Aquatics - Discus Basic",
        flavour: "Bugs",
        for: "Small",
        type: "Fish",
        category: "fishes",
        featured: true
    },
    {
        id: "fishfood2",
        pic: "../../public/PetFoods/fishes-food-2.png",
        name: "Vital Aquatics - Discus Insect",
        flavour: "Bugs",
        for: "All",
        type: "Fish",
        category: "fishes",
        featured: true
    },
    {
        id: "fishfood2",
        pic: "../../public/PetFoods/fishes-food-2.png",
        name: "Vital Aquatics - Growth",
        flavour: "Bugs",
        for: "Adult",
        type: "Fish",
        category: "fishes",
        featured: true
    },
]

const sorting = (a, b) => { // sort objects based on the "name" key
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0; // swap both comparations or the returned values above to get the result in reverse
}

data = data.sort(sorting)

export { data, animalFoods };