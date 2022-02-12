const {Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Subscription extends Model{}

Subscription.init(
    {
        Subscription_id:{
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncremnt:true
        },
        businessName:{
            type: DataTypes.STRING
        },

        amount:{
            type:DataTypes.FLOAT
        },

        due:{
            type:DataTypes.DATEONLY
        },

        renew:{
            type:DataTypes.STRING
        },
    },

    { 
        sequelize,
        timestamps:false,
        freezeTableName:true,
        underscored:true,
        modelName:'Subscription'
    }
);
module.exports = Subscription;
