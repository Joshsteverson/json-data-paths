# JSON DATA PATHS

#### Easily extract complete paths to every property in an object.
#### Created for use with [Simple Object Path](https://www.npmjs.com/package/simple-object-path)
```js
const jsonDataPaths = require('./index')
const obj = {animal:
  {
      type: 'Feline',
      dailyNeeds: [
          {timeOfDay: 'morning', need: 'Breakfast'},
          {timeOfDay: 'evening', need: 'Dinner'}
      ]
  }
}

const paths = jsonDataPaths(obj)
/*
[ 'animal',
  'animal/type',
  'animal/dailyNeeds',
  'animal/dailyNeeds/0',
  'animal/dailyNeeds/0/timeOfDay',
  'animal/dailyNeeds/0/need',
  'animal/dailyNeeds/1',
  'animal/dailyNeeds/1/timeOfDay',
  'animal/dailyNeeds/1/need' ]
*/
```
