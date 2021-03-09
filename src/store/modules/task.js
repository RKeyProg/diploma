export default {
	namespaced: true,
	state: {
		currentTask: {}
	},
	mutations: {
		SET_TASK: (state, task) => (state.currentTask = task),
	},
	actions: {
		setCurrentTask({ commit }, task) {
      commit("SET_TASK", task);
    }
	}
};