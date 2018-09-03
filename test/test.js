//var log = require('../../../../logger/logger');

var calcu = require('./add');
var should = require("should");
//var mocha = require('mocha')

//process.env['mocha-unfunk-style'] = 'css';
//log.info('log start');



describe("add func test1",function() {
    it('2 add 2 should equal 4',function() {
        //log.info('log two6');
        calcu.add(2,2).should.equal(4)
    })
    it('2 add 2 should equal 4',function() {
        //log.info('log two5');
        calcu.add(2,2).should.equal(5)
    })
    it('2 add 2 should equal 4',function() {
        calcu.add(2,1).should.equal(4)
        //log.info('log two4');
    })
    it('2 add 2 should equal 4',function() {
        calcu.add(1,1).should.equal(3)
        //log.info('log two3');
    })
    it('2 add 2 should equal 4',function() {
        calcu.add(2,2).should.equal(4)
        //log.info('log two2');
    })
    it('2 add 2 should equal 4',function() {
        calcu.add(2,2).should.equal(4)
        //log.info('log two1');
    })
    it('2 add 2 should equal 4',function() {
        calcu.add(2,2).should.equal(4)
        //log.info('log two');
    })
})
