export default {
	namespaced: true,
	state: {
		task: {},
	},
	mutations: {
		SET_TASK: (state, task) => (state.task = task),
	},
	actions: {
		setVisualTask({
			commit
		}, task) {
			commit("SET_TASK", task);
		},
	}
};