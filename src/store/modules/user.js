export default {
	namespaced: true,
	state: {
		user: {},
		post: ""
	},
	mutations: {
		SET_USER: (state, user) => (state.user = user),
		SET_POST: (state, post) => (state.post = post),
		CLEAR_USER: state => (state.user = {})
	},
	getters: {
		userIsLoggedIn: state => {
			const userObj = state.user;

			const userObjIsEmpty = Object.keys(userObj).length === 0 && userObj.constructor === Object;
			
			return userObjIsEmpty === false;
		},
		userGetPost: state => {
			const userPost = state.post;

			return userPost;
		},
	},
	actions: {
		async logout() {
			await this.$axios.post(`/logout`);
			localStorage.removeItem("token");
			location.reload();
		},
		async login({
			commit
		}, user) {
			commit("SET_USER", user);
		},
		async addPost({
			commit
		}, post) {
			commit("SET_POST", post);
		},
		async editData({
			commit,
			rootState,
			dispatch
		}, newData) {
			const formData = new FormData();

			Object.keys(newData).forEach(item => {
				formData.append(item, newData[item]);
			});

			try {
				const response = await this.$axios.post(`/${rootState.user.post}/edit`, formData);

				dispatch("tooltips/show", {
					text: response.data.message,
          type: "success",
				}, {root: true})

				commit("SET_USER", response.data.user);
			} catch (error) {
				dispatch("tooltips/show", {
					text: error.response.data.message,
          type: "error"
				}, {root: true})
			}
		},
	},
}