// Creates object relations
const User=require('./User');
const Subscription =require('./Subscription');

// Subscriptions belong to a user
Subscription.belongsTo(User, {
    foreignKey: 'user_id'
});

// User can have several subscriptions
User.hasMany(Subscription, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

// Exports objects
module.exports={
    User,
    Subscription,
}
