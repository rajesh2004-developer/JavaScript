function callbackHell(callback) {
  setTimeout(() => {
    let data = 'Inside callback function';
    console.log(data);
    callback(data);
  }, 2000);
}

function firstFunc(data, callback) {
  setTimeout(() => {
    let Processeddata = data + ' - inside First';
    console.log('Inside First Func');
    callback(Processeddata);
  }, 1000);
}

function secondFunc(data, callback) {
  setTimeout(() => {
    let Processeddata = data + ' - inside second';
    console.log('Inside Second Func');
    callback(Processeddata);
  }, 1000);
}

callbackHell((data) => {
  firstFunc(data, (Processeddata1) => {
    secondFunc(Processeddata1, (Processeddata2) => {
      console.log(Processeddata2);
    });
  });
});
