export default {
    namespaced: true,
    state: {
       skills: []
    },
    mutations: {
        //SET_USER: (state, user) => (state.data = user),
    },
    actions: {
        add() {
            console.log('add');
        },
        remove() {
            console.log('remove');
        },
        edit() {
            console.log('edit');
        }
    }
}