module.exports = (sequelize, DataTypes) => {
    let model = sequelize.define('store', {
        MGTNO: {
            type: DataTypes.STRING(30)
        },
        APVPERMYMD: {
            type: DataTypes.STRING(30)
        },
        SITETEL: {
            type: DataTypes.STRING(30)
        },
        SITEWHLADDR: {
            type: DataTypes.STRING(255)
        },
        RDNWHLADDR: {
            type: DataTypes.STRING(255)
        },
        BPLCNM: {
            type: DataTypes.STRING(255)
        },
        lat: {
            type: DataTypes.FLOAT
        },
        lng: {
            type: DataTypes.FLOAT
        },
        DISFETVEHGARAR: {
            type: DataTypes.INTEGER
        },
        MICROSPKLNUM: {
            type: DataTypes.INTEGER
        },
        HNDUSESTLZNUM: {
            type: DataTypes.INTEGER
        },
        DYNPWSPRAYNUM: {
            type: DataTypes.INTEGER
        },
        HDOPTDSPRAYNUM: {
            type: DataTypes.INTEGER
        },
        GMKNUM: {
            type: DataTypes.INTEGER
        },
        PROTGLSNUM: {
            type: DataTypes.INTEGER
        },
        PROTUSECLOTNUM: {
            type: DataTypes.INTEGER
        },
        VACUCLERNUM: {
            type: DataTypes.INTEGER
        },
    },
        {
            tableName: "disinfection_company_list_20200725",
            timestamps: true
        });

    return model;
}