console.log("userDto.js top")

exports.userDto= (user) => (
    {
        id: user._id,
        email: user.email,
        name: user.name,
        age: user.age,
        city: user.city,
        zipCode: user.zipCode
    }
)

console.log("userDto.js bottom")
