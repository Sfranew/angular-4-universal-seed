/**

  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
                                                                                     
                                                                                   
 *  DO NOT EDIT HIS FILE!!
 * 
 *  FOR CUSTOMIZE DB SCHEMA PLEASE EDIT db/maeci_db_customSchema.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT EASYDEV'S CODE GENERATION --
 * 
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const createUser = require('../security/security.js');

const db_maeci_db_schema = [];
const db_maeci_db = [];

/**
 * SCHEMA DB maeci_db
 */



 /**
  * Immobile
  */
db_maeci_db_schema.Immobile = new mongoose.Schema({
	nome: {
		type: 'String'
	},
	//RELATIONS
	
	
	//EXTERNAL RELATIONS
	/*
	*/
});



/**
 * SCHEMA DB User
 */

db_maeci_db_schema.User = new mongoose.Schema({
    username: {
        type: 'String',
        required: true
    },
    password: {
        type: 'String',
        required: true
    },
    mail: {
        type: 'String'
    },
    name: {
        type: 'String'
    },
    surname: {
        type: 'String'
    },
    roles: [{
        type: 'String'
    }]
});


// Import schema customization
require('./maeci_db_customSchema.js');
var maeci_db_model = require('./maeci_db_crud.js');

// Declare mongoose model

db_maeci_db.Immobile = maeci_db_model.connection.model('Immobile', db_maeci_db_schema.Immobile );

db_maeci_db.User = maeci_db_model.connection.model('User', db_maeci_db_schema.User);

module.exports = db_maeci_db;

// Create ADMIN user if does not exist
createUser.createUser();
