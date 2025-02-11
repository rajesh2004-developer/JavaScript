function Counter() {
  let _count = 0;

  this.increment = () => {
    _count++;
  };
  this.decrement = () => {
    _count--;
  };
  this.getCount = () => {
    return _count;
  };
}

const counter = new Counter();

counter.increment();
console.log(counter.getCount());
