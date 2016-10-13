# openam-agent-cache-memcached
Cache using Memcached for the OpenAM Policy Agent for NodeJS

Installation: `npm install openam-agent-cache-memcached`

# API Docs

<a name="MemcachedCache"></a>

## MemcachedCache ⇐ <code>Cache</code>
**Kind**: global class  
**Extends:** <code>Cache</code>  

* [MemcachedCache](#MemcachedCache) ⇐ <code>Cache</code>
    * [new MemcachedCache([options])](#new_MemcachedCache_new)
    * [.get(key)](#MemcachedCache+get) ⇒ <code>Promise</code>
    * [.put(key, value)](#MemcachedCache+put) ⇒ <code>Promise</code>
    * [.remove(key)](#MemcachedCache+remove) ⇒ <code>Promise</code>
    * [.quit()](#MemcachedCache+quit) ⇒ <code>Promise</code>

<a name="new_MemcachedCache_new"></a>

### new MemcachedCache([options])
Cache implementation for memcached


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>object</code> |  | Options |
| [options.url] | <code>string</code> | <code>&quot;http://localhost/11211&quot;</code> | memcached URL |
| [options.expireAfterSeconds] | <code>number</code> | <code>60</code> | Expiration time in seconds |

**Example**  
```js
var memcachedCache = new MemcachedCache({
  url: 'cache.example.com:11211',
  expireAfterSeconds: 600
});
```
<a name="MemcachedCache+get"></a>

### memcachedCache.get(key) ⇒ <code>Promise</code>
Get a single cached item
If the entry is not found, reject

**Kind**: instance method of <code>[MemcachedCache](#MemcachedCache)</code>  

| Param | Type |
| --- | --- |
| key | <code>string</code> | 

**Example**  
```js
memcachedCache.get('foo').then(function (cached) {
  console.log(cached);
}).catch(function (err) {
  console.error(err);
});
```
<a name="MemcachedCache+put"></a>

### memcachedCache.put(key, value) ⇒ <code>Promise</code>
Store a single cached item (overwrites existing)

**Kind**: instance method of <code>[MemcachedCache](#MemcachedCache)</code>  

| Param | Type |
| --- | --- |
| key | <code>string</code> | 
| value | <code>\*</code> | 

**Example**  
```js
memcachedCache.put('foo', {bar: 'baz'}).then(function () {
  console.log('foo saved to cache');
}).catch(function (err) {
  console.error(err);
});
```
<a name="MemcachedCache+remove"></a>

### memcachedCache.remove(key) ⇒ <code>Promise</code>
Remove a single cached item

**Kind**: instance method of <code>[MemcachedCache](#MemcachedCache)</code>  

| Param | Type |
| --- | --- |
| key | <code>string</code> | 

**Example**  
```js
memcachedCache.remove('foo').then(function () {
  console.log('foo removed from cache');
}).catch(function (err) {
  console.error(err);
});
```
<a name="MemcachedCache+quit"></a>

### memcachedCache.quit() ⇒ <code>Promise</code>
Closes the client connection

**Kind**: instance method of <code>[MemcachedCache](#MemcachedCache)</code>  