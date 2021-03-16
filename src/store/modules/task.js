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
			console.log(task);
			commit("SET_TASK", task);
		},
		setActiveTask({
			commit
		}, task) {
			console.log(task);
			commit("SET_ACTIVE_TASK", task);
		},
		async sendAnswer({
			commit
		}, answer) {
			const formData = new FormData();

			console.log(answer);

			Object.keys(answer).forEach(item => {
				formData.append(item, answer[item]);
			});

			try {
				const response = await this.$axios.post("/task/send/answer", formData);

				commit("EDIT_ACTIVE_TASKS", response);

				console.log(response);
			} catch (error) {
				console.log("error");
			}
		},
		changeIsTeacherClick({
			commit
		}) {
			commit("CHANGE_IS_TEACHER_CLICK");
		}
	}
};