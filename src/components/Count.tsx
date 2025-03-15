import { useCounterStore } from '../store/useCounterStore'

const Count = () => {
  const count = useCounterStore(state => state.count)

  const increment = useCounterStore(state => state.increment)
  const decrement = useCounterStore(state => state.decrement)

  const incrementBy = useCounterStore(state => state.incrementBy)
  const decrementBy = useCounterStore(state => state.decrementBy)
  return (
    <>
      <h1>Count: {count}</h1>

      <div>
        <button onClick={decrement} style={{ marginRight: "10px" }}>
          ➖ Decrement
        </button>
        <button onClick={increment}>➕ Increment</button>
      </div>

      <div>
        <button onClick={() => decrementBy(2)} style={{ marginRight: "10px" }}>
          ➖ Decrement By 2
        </button>
        <button onClick={() => decrementBy(5)} style={{ marginRight: "10px" }}>
          ➖ Decrement By 5
        </button>
        <button onClick={() => decrementBy(7)} style={{ marginRight: "10px" }}>
          ➖ Decrement By 7
        </button>
      </div>

      <div>
        <button onClick={() => incrementBy(2)} style={{ marginRight: "10px" }}>
          ➕ Increment By 2
        </button>
        <button onClick={() => incrementBy(5)} style={{ marginRight: "10px" }}>
          ➕ Increment By 5
        </button>
        <button onClick={() => incrementBy(7)} style={{ marginRight: "10px" }}>
          ➕ Increment By 7
        </button>
      </div>
    </>
  )
}

export default Count