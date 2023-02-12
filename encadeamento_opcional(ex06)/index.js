const user = {
    name: "John Doe",
    email:"doejohn.@email.com",
    friends: [{
        name:"Mary",
        adress: {
            street: "Some Street",
            number: 89
        }
    }],
    age: 42,
    phone:{
        countryCode:"+55",
        ddd: "22",
        number: "998765432"
    }
}

 //console.log(user.friends[0].phone.ddd)
//com o "?" ele dará o erro depois do parâmetro de undefined
console.log(user?.friends[0]?.phone?.ddd)
console.log(user?.brothers?.length)

// é possivel tambem fazer encadeamneto com posições de array
console.log(user.brothers?.[5].name)