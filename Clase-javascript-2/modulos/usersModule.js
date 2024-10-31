const users = [
    {id:1,name:"Mariana", course:"javascript"},
    {id:2,name:"Lucas", course:"css"},
    {id:3,name:"Felipe", course:"css"},
    {id:4,name:"Juan", course:"nodejs"},
];

const getUser = (id)=>{
    const user = users.find((user)=>user.id === id);
    return user;
};

export {
    users,
    getUser
}