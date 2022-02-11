const User=require('./User');
const Post=require('./Subscriptions');

Post.belongsTo(User,{
    foreignKey:"UserID",
    onDelete:"CASCADE"
})

Subscriptions.belongsTo(User,{
    foreignKey:"UserID",
    onDelete:"CASCADE"
})

Post.hasMany(Subscriptions,{
    foreignKey:"PostID",
    onDelete:"CASCADE"
})

module.exports={
    User,
    Subscriptions
}