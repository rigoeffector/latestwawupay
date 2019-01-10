

$(document).ready(function(){
	// retrieving for water char
	$.ajax({
		url:"http://localhost:8097/water/statics",
		dataType:"json",
		method:"get",
		cache:false,
		success:function(data){
			var months=[];
			var chashs=[];
			for(var i in data.RETURN_DATA.data){
				months.push(data.RETURN_DATA.data[i].month);
				chashs.push(data.RETURN_DATA.data[i].money);
			}
		var ctx3 = document.getElementById("water").getContext('2d');
		var water = new Chart(ctx3, {
		type: 'bar',
		data: {
			labels: months,
			datasets: [{
				label: 'Amount received',
				data: chashs,
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)',
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)'				
				],
				borderColor: [
					'rgba(255,99,132,1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)',
					'rgba(255,99,132,1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)'
				],
				borderWidth: 1
			}]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero:true
					}
				}]
			}
		}
	});
		}
	});
// end of water chart
    // for bus ticket chart
	$.ajax({
		url:"http://localhost:8097/water/statics",
		dataType:"json",
		method:"get",
		cache:false,
		success:function(data){
			var months=[];
			var chashs=[];
			for(var t in data.RETURN_DATA.data){
				months.push(data.RETURN_DATA.data[t].month);
				chashs.push(data.RETURN_DATA.data[t].money);
			}
		var ctx3 = document.getElementById("busTickets").getContext('2d');
		var water = new Chart(ctx3, {
		type: 'bar',
		data: {
			labels: months,
			datasets: [{
				label: 'Amount received',
				data: chashs,
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)',
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)'				
				],
				borderColor: [
					'rgba(255,99,132,1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)',
					'rgba(255,99,132,1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)'
				],
				borderWidth: 1
			}]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero:true
					}
				}]
			}
		}
	});
		}
	});
        // end of bus ticket
          // electricity
          $.ajax({
            url:"http://localhost:8097/electricity/statics",
            dataType:"json",
            method:"get",
            cache:false,
            success:function(data){
                var months=[];
                var chashs=[];
                for(var i in data.RETURN_DATA.data){
                    months.push(data.RETURN_DATA.data[i].month);
                    chashs.push(data.RETURN_DATA.data[i].money);
                }
            var ctx3 = document.getElementById("electricity").getContext('2d');
            var water = new Chart(ctx3, {
            type: 'bar',
            data: {
                labels: months,
                datasets: [{
                    label: 'Amount received',
                    data: chashs,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'				
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });
            }
        });

// end of electricity

// air time chart
$.ajax({
    url:"http://localhost:8097/totup/statics",
    dataType:"json",
    method:"get",
    cache:false,
    success:function(data){
        var months=[];
        var chashs=[];
        for(var i in data.RETURN_DATA.data){
            months.push(data.RETURN_DATA.data[i].month);
            chashs.push(data.RETURN_DATA.data[i].money);
        }
    var ctx3 = document.getElementById("airtime").getContext('2d');
    var water = new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: months,
        datasets: [{
            label: 'Amount received',
            data: chashs,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'				
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
    }
});
// end of airtime chart

// getting all airtime list


// end of getting all airtime list

});