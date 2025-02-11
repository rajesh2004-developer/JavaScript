function MyClass(publicData, privateData, protectedData) {
  this.publicData = publicData;
  const _privateData = privateData;
  const _protectedData = privateData;

  this.publicMethod = function () {
    return `Public data : ${this.publicData}`;
  };

  function privateMethod() {
    return `Private data : ${_privateData}`;
  }

  function protectedMethod() {
    return `Protected data : ${_protectedData}`;
  }

  this.accessProtectedMethod = function () {
    return protectedMethod();
  };
}

const myObj = new MyClass('public data', 'private data', 'protected data');

console.log(myObj.publicData);
console.log(myObj._privateData);
console.log(myObj._protectedData);
console.log(myObj.publicMethod());
console.log(myObj.privateMethod());
console.log(myObj.protectedMethod());
console.log(myObj.accessProtectedMethod());
