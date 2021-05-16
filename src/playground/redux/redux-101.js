import { createStore } from 'redux';


const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: "INCREMENT",
    incrementBy
});

const decrementCount = ({ decrement = 1 } = {}) => ({
    type: "DECREMENT",
    decrement
})

const setCount = ({ count }) => ({
    type: "SET",
    count
});

const resetCount = () => ({
    type: "RESET"
});

const Reducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case "INCREMENT":
            return ({
                count: state.count + action.incrementBy
            });
        case "DECREMENT":
            return ({
                count: state.count - action.decrement
            });
        case "RESET": return ({
            count: 0
        });
        case "SET": return ({
            count: action.count
        })

        default: return (state);
    }
}
const store = createStore(Reducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

// store.dispatch({
//     type: "INCREMENT",
//     incrementBy:5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrement: 10 }));

store.dispatch(setCount({ count: -901 }));
