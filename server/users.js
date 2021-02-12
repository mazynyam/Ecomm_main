const users = []

const addUser = ({ id, room, name})=>{
    // name = name.trim().toLowerCase()
    const existingUserId = users.find((user)=>user.room === room && user.name === name)
    if(existingUserId){
        return { error: 'name already taken'}
    }
    const user = { id, name, room}
    users.push(user)
    return {user};
}

const removeUser = (id)=>{
    const index = users.findIndex((user)=> user.id === id);
    if(index !== -1){
        return users.splice(index, 1)[0]
    }
}

const getUser = (id)=> users.find((user)=>user.id === id);

const getUsersInChat = (room) => users.filter((user)=>user.room === room)

module.exports = {
    addUser, 
    removeUser,
    getUser,
    getUsersInChat 
}