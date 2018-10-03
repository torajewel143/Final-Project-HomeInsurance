const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const Property = express.Router();

Property.route('/add').post(function (req, res) {

    var data = req.body;

    // Saving homeowner information.
    var token = data[4].token;
    var homeowner = data[1];
    // console.log(data);
    jwt.verify(token, 'homeownerinformationdocisnotsoclear', (err, decode) => {
        // console.log(decode);
        db.collection('users').find({user_id: decode.user_id}).toArray((err, result) => {
            if(result.length){
                // console.log(result);
                var user_id = result[0]._id;
                db.collection('users').updateOne({_id: result[0]._id}, {$set: homeowner}, (err, result) => {
                    // db.collection('properties')
                    var property = {
                        homeowner_id: user_id,
                        residence_type: data[0]['residence_type'],
                        address_line_one: data[0]['address_line_one'],
                        address_line_two: data[0]['address_line_two'],
                        state: data[0]['state'],
                        city: data[0]['city'],
                        zip: data[0]['zip'],
                        residence_use: data[0]['residence_use'],
                        market_value: data[2]['market_value'],
                        originally_built: data[2]['originally_built'],
                        area: data[2]['area'],
                        dwelling_style: data[2]['dwelling_style'],
                        roof_material: data[2]['roof_material'],
                        garage: data[2]['garage'],
                        full_bath: data[2]['full_bath'],
                        half_bath: data[2]['half_bath'],
                        has_pool: data[2]['has_pool'],
                        monthly_premium: data[3]['monthly_premium'],
                        dwelling_coverage: data[3]['dwelling_coverage'],
                        detatched_structures: data[3]['detatched_structures'],
                        personal_property: data[3]['personal_property'],
                        additional_living_expense: data[3]['additional_living_expense'],
                        medical_expense: data[3]['medical_expense'],
                        deductable: data[3]['deductable'],
                    };
                    db.collection('properties').insertOne(property, (err, result) => {
                        res.json({
                            type: 'success',
                            message: "Property added successfully.",
                        });
                    });
                });
            }
        });

    });

});

Property.route('/list/').post((req, res, next) => {
    db.collection('properties').find({}).toArray((err, result) => {
        // console.log(result);
        res.json({
            type: 'success',
            message: '',
            result: result,
        });
    });
});

module.exports = Property;
