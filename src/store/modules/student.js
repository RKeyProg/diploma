export default {
	namespaced: true,
	state: {
		currentStudent: {}
	},
	mutations: {
		SET_STUDENT: (state, student) => (state.currentStudent = student),
	},
	actions: {
		setCurrentStudent({ commit }, student) {
      commit("SET_STUDENT", student);
    }
	}
};