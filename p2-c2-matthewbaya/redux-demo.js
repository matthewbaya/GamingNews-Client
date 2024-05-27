import { createSlice, configureStore } from "@reduxjs/toolkit";

// 3. membuat slice -> return reducer dan action
const counterSlice = createSlice({
  //name -> untuk ngasih nama buat slice nya. kalau gaada nama, gimana cara manggil nya?
  name: "counter",
  // initialState -> adalah state awal, contoh -> const [contoh, setContoh] = useState("")
  initialState: {
    value: 0,
    count: 0,
  },
  // reducers -> kumpulan sebuah action yang akan melakukan proses terhadap state
  // reducer harus pure function, contoh ada pure function dibawah
  reducers: {
    // increment -> nambahin counter
    // immer hanya membantu menghilangkan 1 syarat pure function yaitu immutable
    increment: (state) => {7\5































      
      state.value += 1;
      state.count += 10;
    },
    // decrement -> ngurangin counter
    decrement: (state) => {
      state.value -= 1;
      state.count -= 10;
    },
    incrementCountOnly: (state) => {
      state.count += 100;
    },
  },
});

// 4. ambil action dan reducer yang dibutuhkan
const { increment, decrement, incrementCountOnly } = counterSlice.actions;
const counterReducer = counterSlice.reducer;
console.log(counterReducer);

//1. kita butuh untuk membuat store
const store = configureStore({
  //2. reducer -> adalah sebuah function yang akan melakukan suatu proses, bakal ada action2 didalamnya (cth: update state, dll.)
  //untuk membuat reducer, dibutuhkan slice. untuk membuat slice buat function dari createSlice punyanya redux toolkit (diatas)
  reducer: counterSlice.reducer,
});

// 5. untuk mendapatkan state, gunakan getState()
console.log(store.getState(), "<<< Default state value");
// 6. untuk melakukan action, gunakan dispatch
store.dispatch(increment());
console.log(store.getState(), "<<< INCREMENT");
store.dispatch(increment());
console.log(store.getState());
store.dispatch(increment());
console.log(store.getState());

store.dispatch(decrement());
console.log(store.getState(), "<<< DECREMENT");

store.dispatch(incrementCountOnly());
console.log(store.getState(), "<<< nambah count doang");

// PURE FUNCTION EXAMPLE
// - harus predictable
// - tidak bisa async atau fetch data dari API, tidak predictable karena jika serer API error harus catch
// - immutable // jangan ada side effects
// - mutable tidak boleh di redux
