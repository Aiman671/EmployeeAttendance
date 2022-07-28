var User= require('../models/user');
var bcrypt=require('bcrypt-nodejs');
var mongoose= require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://admin:admin123@cluster0.ybpxy.mongodb.net/HRMS?retryWrites=true&w=majority');

var users=[

    new User({
        type: 'employee',
        email: 'samad@pm.com',
        password: bcrypt.hashSync('pm1234', bcrypt.genSaltSync(5), null),
        name: 'Samad',
        dateOfBirth: new Date('1990-05-26'),
        contactNumber: '03334552191',
    }),
    new User({

        type: 'employee',
        email: 'ciwan@am.com',
        password: bcrypt.hashSync('am1234', bcrypt.genSaltSync(5), null),
        name: 'Ciwan',
        dateOfBirth: new Date('1990-05-26'),
        contactNumber: '03004814710',
    }),
    new User({
        type: 'employee',
        email: 'adam@gmail.com',
        password: bcrypt.hashSync('123456', bcrypt.genSaltSync(5), null),
        name: 'Adam Salha',
        dateOfBirth: new Date('1990-05-26'),
        contactNumber: '03334552191',
    }),
    new User({

        type: 'employee',
        email: 'imman@outlook.com',
        password: bcrypt.hashSync('123456', bcrypt.genSaltSync(5), null),
        name: 'Aliff Imman',
        dateOfBirth: new Date('1990-05-26'),
        contactNumber: '03004814710',
    }),
    new User({

        type: 'admin',
        email: 'admin@admin.com',
        password: bcrypt.hashSync('admin123', bcrypt.genSaltSync(5), null),
        name: 'Muhd Aiman Adli',
        dateOfBirth: new Date('1990-05-26'),
        contactNumber: '03004297859',
    }),
];
//save function is asynchronous
//so we need to ceck all itmes are saved before we disconnect to db
done=0;
for (i=0;i<users.length;i++){
    users[i].save(function(err,result){
        done++;
        if(done==users.length){
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}