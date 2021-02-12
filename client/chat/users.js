const users = []

const addUser = ({id, name, shop})=>{
    name = name.trim().toLowerCase()
    shop = shop.trim().toLowerCase()

    const user = { id, name, shop}
    users.push(user);
    return  {user}
}

const removeUser = (id) => {
    const index  = users.findIndex((user)=> user.id ===id)
    return users.splice(index, 1)[0]
}

const getUser = (id)=> users.find((user) => user.id === id);

const getUsersInRoom = (shop) => users.filter((user) => users.shop === shop);

module.exports= {
    addUser, removeUser, getUser, getUsersInRoom
}