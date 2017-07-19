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

## DISCLAIMER

The sample code described herein is provided on an "as is" basis, without warranty of any kind, to the fullest extent permitted by law. ForgeRock does not warrant or guarantee the individual success developers may have in implementing the sample code on their development platforms or in production configurations.

ForgeRock does not warrant, guarantee or make any representations regarding the use, results of use, accuracy, timeliness or completeness of any data or information relating to the sample code. ForgeRock disclaims all warranties, expressed or implied, and in particular, disclaims all warranties of merchantability, and warranties related to the code, or any service or software related thereto.

ForgeRock shall not be liable for any direct, indirect or consequential damages or costs of any type arising out of any action taken by you or others related to the sample code.
