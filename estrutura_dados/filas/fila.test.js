const Queue = require('./fila-obj.js');


test('adicionar elementos na fila', () => {
  let fila = new Queue()
  fila.enqueue(1)  
  fila.enqueue(2)
  fila.enqueue(3)

  expect(fila.isEmpty()).toBe(false);
  expect(fila.dequeue()).toBe(1)
  expect(fila.dequeue()).toBe(2)
  expect(fila.dequeue()).toBe(3)
});

test('remover elementos da fila vazia', () => {
    let fila = new Queue()
    expect(fila.dequeue()).toBe(undefined)
});

test('remover elementos da fila', () => {
    let fila = new Queue()
    fila.enqueue(1)  
    fila.enqueue(2)
    fila.enqueue(3)
  
    expect(fila.dequeue()).toBe(1)
    expect(fila.dequeue()).toBe(2)
    expect(fila.dequeue()).toBe(3)
  });

  test('primeiro da fila', () => {
    let fila = new Queue
    fila.enqueue(1)
    fila.enqueue(2)
    fila.enqueue(3)
    expect(fila.nextElement()).toBe(1)
    fila.dequeue()
    expect(fila.nextElement()).toBe(2)
    fila.dequeue()
    expect(fila.nextElement()).toBe(3)
  })


