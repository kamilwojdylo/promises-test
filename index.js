/*
const arr = [1, 2, 3, 4];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const promises = arr.map(item => {
  //return Promise.resolve(item);
  return getRandomInt(2) ? Promise.resolve(item) : Promise.reject(item);
});

Promise.all(promises)
.then(a => {
  console.log('all then', a);
})
.catch(err => {
  console.error('all catch', err);
})
.finally(param => {
  console.log('finally all', param)
});

Promise.allSettled(promises)
.then(a => {
  console.log('allSettled then', a);
})
.catch(err => {
  console.error('allSettled error', err);
})
.finally(param => {
  console.log('finally allSettled', param)
});

Promise.race(promises)
.then(a => {
  console.log('race then', a);
})
.catch(err => {
  console.error('race error', err);
})
.finally(param => {
  console.log('finally race', param)
});
*/
/*
let promisy = [];
function z() {
  const p1 = new Promise((resolve, reject) => {
    console.log('2');
    resolve('ff');
  })

  .then(() => {
    console.log('3');
  });

  promisy.push(p1);
  return p1;
  //promisy.push(p2);
  
  return p2;
}

const p = z();
console.log('1');

promisy.forEach((promis, idx) => {
  if (promis === p) {
    console.log(`THIS IS IT ${idx}`);
    return;
  }
  console.log('noting');
});
*/

const prom = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Promise resolved');
    resolve('Hello');
  }, 1);
});

setTimeout(() => {
  console.log('register then handler');
  prom.then(result => {
    console.log(result);
  });
}, 1000);
