const User=require('./User');
const Subscription =require('./Subscription');

// Post.belongsTo(User,{
//     foreignKey:"UserID",
//     onDelete:"CASCADE"
// })

// Subscription.belongsTo(User,{
//     foreignKey:"UserID",
//     onDelete:"CASCADE"
// })

// Post.hasMany(Subscription,{
//     foreignKey:"PostID",
//     onDelete:"CASCADE"
// })

module.exports={
    User,
    Subscription,
    // Post
}
