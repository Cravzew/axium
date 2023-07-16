import {createStore} from 'vuex';

export default createStore({
    state: {
        isScrollBlocked: false
    },
    getters: {},
    mutations: {
        toggleScrollBlocking(state) {
            state.isScrollBlocked = !state.isScrollBlocked;

            if (state.isScrollBlocked) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        }
    },
    actions: {},
    modules: {},
});
