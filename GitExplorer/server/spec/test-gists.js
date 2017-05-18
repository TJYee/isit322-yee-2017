/**
 * Created by charlie on 10/7/15.
 */

var request = require('supertest');
var app = require('../app');
const Logger = require('../routes/elf-logger');
const logger = new Logger('test');

describe('Elvenware Gists Suite', function () {
    
    'use strict';
    
    it('expects true to be true', function () {
        expect(true).toBe(true);
    });
    
    
    it('gets the basic gists list', function (done) {
        request(app)
            .get('/gitapi/get-basic-list')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function (err, res) {
                if (err) {
                    throw err;
                }
                done();
            });
    });
    
    it('checks the gist response data exists', function (done) {
        request(app)
            .get('/gitapi/get-basic-list')
            .expect(200)
            .expect('Content-Type', /json/)
            .expect(function (response) {
                logger.log(response.body);
                expect(typeof response.body.count).toBe('number');
                expect(typeof response.body.result).toBe('object');
            })
            .end(function (err, res) {
                if (err) {
                    throw err;
                }
                done();
            });
    });
    
    it('checks the gist response has four properties: html_url, id, description, git_pull_url', function (done) {
        request(app)
            .get('/gitapi/get-basic-list')
            .expect(200)
            .expect('Content-Type', /json/)
            .expect(function (response) {
                logger.log(response.body.result[0]);
                const gist = response.body.result[0];
                expect(gist.html_url).toBeDefined();
                expect(gist.id).toBeDefined();
                expect(gist.description).toBeDefined();
                expect(gist.git_pull_url).toBeDefined();
            })
            .end(function (err, res) {
                if (err) {
                    throw err;
                }
                done();
            });
    });
});