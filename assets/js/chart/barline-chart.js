var ctx = document.getElementById("barlinechart");

var chartInstance = new Chart(ctx, {
	type: 'bar',    // set the default type
	data: {
		labels: ["A", "B", "C", "D", "E", "F"],
		datasets: [{
			type: 'line',
			label: 'Average',
			backgroundColor: "transparent",
			pointBackgroundColor: "#fff",
			data: [2, 4.1, 4, 1.9, 2.3, 6.1],
			borderColor: '#3f56b4',
			borderWidth: 2,
		},	{
			type: 'bar',
			label: 'Stoke',
			backgroundColor: "rgba(63,86,180,1)",
			data: [2, 3.5, 6.8, 4.5, 8, 4],
			borderWidth: 2        
		}, {
			type: 'bar',
			label: 'Bound',
			backgroundColor: "rgba(255,174,54,1)",
			data: [2.8, 5.8, 4.5, 6.2, 5.8, 7]
		},	{
			type: 'bar',
			label: 'Fund',
			backgroundColor: "rgba(140,154,210,1)",
			data: [1.8, 4.8, 2.5, 5.9, 2.8, 4.8]
		}],
	},
	options: {
		responsive: true,
		title: {
			display: false
		},
		legend: {
			display: true,
			position: 'bottom',
		},
		scales: {
			xAxes: [{
				gridLines : {
					zeroLineColor: "rgba(0, 0, 0, 0.1)"
				},
			}],
			yAxes: [{
				ticks : {
					display: true,
					beginAtZero:true
				},
				gridLines : {
					zeroLineColor: "rgba(0, 0, 0, 0.1)"
				},
			}]
		}
	}
});