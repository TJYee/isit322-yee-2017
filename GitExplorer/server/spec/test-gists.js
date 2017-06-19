/**
 * Created by charlie on 10/7/15.
 * REQUIRES gist MICRO SERVICE TO BE RUNNING
 */

let request = require('supertest');
let app = require('../app');
const Logger = require('./support/elf-logger');
const logger = new Logger('test');

describe('Elvenware Gists Suite', function () {
    
    'use strict';
    
    it('expects true to be true', function () {
        expect(true).toBe(true);
    });
    
    
    it('gets the basic gists list', function (done) {
        request(app)
            .get('/gist/list')
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
            .get('/gist/list')
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
    
    it('checks the gist response has four properties: htmlUrl, id, description, gitPullUrl', function (done) {
        request(app)
            .get('/gist/list')
            .expect(200)
            .expect('Content-Type', /json/)
            .expect(function (response) {
                logger.log(response.body.result[0]);
                const gist = response.body.result[0];
                expect(gist.htmlUrl).toBeDefined();
                expect(gist.id).toBeDefined();
                expect(gist.description).toBeDefined();
                expect(gist.gitPullUrl).toBeDefined();
            })
            .end(function (err, res) {
                if (err) {
                    throw err;
                }
                done();
            });
    });
});