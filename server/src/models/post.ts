'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize:any, DataTypes:any) => {
    class Post extends Model {
    //make methods here!
    static associate(models:any) {
      // define association here
    }
}
Post.init({
    post_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    creator: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Post',
    tableName: 'post',
    timestamps: false
});
    return Post;
};