export default {
	namespaced: true,
	state: {
		currentTask: {},
		activeTask: null,
		isTeacherClick: false,
	},
	mutations: {
		SET_TASK: (state, task) => (state.currentTask = task),
		SET_ACTIVE_TASK: (state, task) => (state.activeTask = task),
		EDIT_ACTIVE_TASKS: () => {

		},
		CHANGE_IS_TEACHER_CLICK: (state) => {
			state.isTeacherClick = !state.isTeacherClick;
		},
	},
	actions: {
		setCurrentTask({
			commit
		}, task) {
			commit("SET_TASK", task);
		},
		setActiveTask({
			commit
		}, task) {
			commit("SET_ACTIVE_TASK", task);
		},
		async sendAnswer({
			commit,
			dispatch
		}, answer) {
			const formData = new FormData();

			Object.keys(answer).forEach(item => {
				formData.append(item, answer[item]);
			});

			try {
				const response = await this.$axios.post("/task/send/answer", formData);

				dispatch("tooltips/show", {
					text: response.data.message,
          type: "success",
				}, {root: true})

				commit("EDIT_ACTIVE_TASKS", response);
			} catch (error) {
				dispatch("tooltips/show", {
					text: error.response.data.message,
          type: "error"
				}, {root: true})
			}
		},
		changeIsTeacherClick({
			commit
		}) {
			commit("CHANGE_IS_TEACHER_CLICK");
		}
	}
};