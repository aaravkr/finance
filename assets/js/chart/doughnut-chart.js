var doughnutchart = {
	type: 'doughnut',
	data: {
		datasets: [
			{
				data: [80, 10, 10],
				backgroundColor: [
					"#5472d2",
					"#fff",
					"#fff"
				],
				hoverBackgroundColor: [
					"#5472d2",
					"#fff",
					"#fff"
				],
				borderWidth: 5,
				borderColor: "#fff",
				hoverBorderColor: "#fff"
			},
			{
				data: [20,10,70],
				backgroundColor: [
					"#5472d2",
					"#fe6c61",
					"#f7be68",
				],
				hoverBackgroundColor: [
					"#5472d2",
					"#fe6c61",
					"#f7be68"
				],
				borderWidth: 0,
			}
		],
		labels: [
			"Stock",
			"Bound",
			"Fund",
		]
	},
	options: {
		responsive: true,
		title: {
			display: false
		},
		legend: {
			display: false,
		},
		rotation: 1,
	}
};

window.onload = function() {
	var doughnut = document.getElementById("doughnutchart").getContext("2d");
	window.mydoughnut = new Chart(doughnut, doughnutchart);
};