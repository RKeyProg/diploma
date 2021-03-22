export default {
	namespaced: true,
	state: {
		componentsList: [
			{
				id: 1,
				name: "Материнская плата",
				isActive: true,
				desc:
					"Печатная плата, являющаяся основой построения модульного устройства, например - компьютера. Системная плата содержит основную часть устройства, процессор и оперативную память дополнительные же или взаимозаменяемые платы называются платами расширений.",
				specifications: {},
				acitveSpecificationId: "",
				specificationsPattern: "Производитель / Модель / Сокет / Тип оперативной памяти / Чипсет / Форм-фактор",
				activeExample: "",
				placeholder: "Выберите материнскую плату",
				object: "motherboard",
				request: "object/mother",
			},
			{
				id: 2,
				name: "Оперативная память",
				isActive: false,
				desc:
					"Энергозависимая часть системы компьютерной памяти, в которой во время работы компьютера хранится выполняемый машинный код (программы), а также входные, выходные и промежуточные данные, обрабатываемые процессором. Оперативное запоминающее устройство (ОЗУ) — техническое устройство, реализующее функции оперативной памяти. ОЗУ может изготавливаться как отдельный внешний модуль или располагаться на одном кристалле с процессором, например, в однокристальных ЭВМ или однокристальных микроконтроллерах.",
				specifications: {},
				acitveSpecificationId: "",
				specificationsPattern: "Производитель / Модель / Тип памяти / Объем / Частота",
				activeExample: "",
				placeholder: "Выберите оперативную память",
				object: "ram",
				request: "object/ram",
			},
			{
				id: 3,
				name: "Процессор",
				isActive: false,
				desc:
					"Электронный блок либо интегральная схема, исполняющая машинные инструкции (код программ), главная часть аппаратного обеспечения компьютера или программируемого логического контроллера. Иногда называют микропроцессором или просто процессором.",
				specifications: {},
				acitveSpecificationId: "",
				specificationsPattern: "Производитель / Модель / Сокет / Частота",
				activeExample: "",
				placeholder: "Выберите процессор",
				object: "CPU",
				request: "object/cpu",
			},
			{
				id: 4,
				name: "Блок питания",
				isActive: false,
				desc:
					"Устройство, предназначенное для формирования напряжений питания компьютерных систем. В некоторой степени блок питания также выполняет функции стабилизации и защиты от незначительных помех питающего напряжения.",
				specifications: {},
				acitveSpecificationId: "",
				specificationsPattern: "Производитель / Модель / Форм-фактор / Мощность",
				activeExample: "",
				placeholder: "Выберите блок питания",
				object: "powerBlock",
				request: "object/power-supply",
			},
			{
				id: 5,
				name: "Видеокарта",
				isActive: false,
				desc:
					"Устройство, преобразующее графический образ, хранящийся как содержимое памяти компьютера (или самого адаптера), в форму, пригодную для дальнейшего вывода на экран монитора.",
				specifications: {},
				acitveSpecificationId: "",
				specificationsPattern: "Производитель / Модель / Тип памяти / Объем памяти / Частота",
				activeExample: "",
				placeholder: "Выберите видеокарту",
				object: "videoCard",
				request: "object/graphics",
			},
			{
				id: 6,
				name: "Корпус",
				isActive: false,
				desc:
					"Физически представляет собой базовую несущую конструкцию (шасси), которая предназначена для последующего наполнения аппаратным обеспечением с целью создания компьютера.",
				specifications: {},
				acitveSpecificationId: "",
				specificationsPattern: "Производитель / Модель / Тип корпуса / Форм-фактор",
				activeExample: "",
				placeholder: "Выберите корпус",
				object: "body",
				request: "object/case",
			},
		],
		isComplited: false,
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