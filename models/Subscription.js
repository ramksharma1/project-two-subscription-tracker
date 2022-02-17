const {Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Subscription extends Model{}

Subscription.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
        subname:{
            type: DataTypes.STRING,
            allowNull: false
        },

        description:{
            type:DataTypes.STRING,
            allowNull: false
        },

        link:{
            type:DataTypes.STRING,
            allowNull: false
        },

        cycle:{
            type:DataTypes.STRING,
            allowNull: false
        },

        date:{
            type:DataTypes.STRING,
            allowNull: false
        },

        payment:{
            type:DataTypes.INTEGER,
            allowNull: false
        },

        remind:{
            type:DataTypes.STRING,
            allowNull: false
        }
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
