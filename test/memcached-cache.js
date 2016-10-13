var MemcachedCache = require('../index').MemcachedCache,
    assert = require('assert');

describe('MemcachedCache', function () {
    var memecachedCache;

    beforeEach(function () {
        memecachedCache = new MemcachedCache({
            url: process.env.MEMCHACHED_URL || 'localhost:32772',
            expireAfterSeconds: 1
        });
    });

    afterEach(function () {
        memecachedCache.quit();
    });

    describe('put', function () {
        it('should put an entry in memcached', function () {
            return memecachedCache.put('foo', 'bar')
                .then(function () {
                    return memecachedCache.get('foo');
                })
                .then(function (res) {
                    assert(res === 'bar');
                });
        });

        it('should make entries expire', function () {
            return memecachedCache.put('foo', 'bar')
                .then(function () {
                    return new Promise(function (resolve) {
                        setTimeout(resolve, 1100);
                    });
                })
                .then(function () {
                    return memecachedCache.get('foo');
                })
                .then(function (res) {
                    assert(res === null);
                });
        });


    });

    describe('get', function () {
        it('should get an entry from memcached', function () {
            return memecachedCache.put('foo', {foo: 'bar'})
                .then(function () {
                    return memecachedCache.get('foo');
                })
                .then(function (res) {
                    assert(res.foo === 'bar');
                });
        });

    });

    describe('remove', function () {
        it('should remove an entry from memcached', function () {
            return memecachedCache.put('foo', 'bar')
                .then(function () {
                    return memecachedCache.remove('foo');
                })
                .then(function () {
                    return memecachedCache.get('foo');
                })
                .then(function (res) {
                    assert(res === null);
                });
        });
    });

    describe('quit', function () {
        it('should close the connection to memcached and not allow any more operations', function () {
            return memecachedCache.quit()
                .then(function () {
                    return memecachedCache.put('foo', 'bar');
                })
                .then(function () {
                    throw 'write allowed after quit() was called';
                })
                .catch(function (err) {
                    assert(!!err);
                });
        });
    });
});
