const User=require('./User');
const Subscription =require('./Subscription');

Subscription.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Subscription, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

module.exports={
    User,
    Subscription,
}
