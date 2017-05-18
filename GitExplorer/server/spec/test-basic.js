/**
 * Created by charlie on 10/7/15.
 */

var request = require('supertest');
var app = require('../app');
const Logger = require('../routes/elf-logger');
const logger = new Logger('test');

describe('Elvenware Foo Suite', function () {
    'use strict';
    
    it('expects true to be true', function () {
        expect(true).toBe(true);
    });
    
    it('get the foo route', function (done) {
        request(app)
            .get('/foo')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function (err, res) {
                if (err) {
                    throw err;
                }
                done();
            });
    });
});