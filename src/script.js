var workersDetails   = [{
    name: "Joe Biden",
    image: "https://tinyurl.com/ms854m44",
    age: 30,
    startDate: "1.1.2022"
  },
  {
    name: "Elon Musk",
    image: "https://tinyurl.com/ms854m44",
    age: 25,
    startDate: "16.2.2022"
  },
  {
    name: "Yarden Paniry",
    image: "https://tinyurl.com/ms854m44",
    age: 29,
    startDate: "16.7.2022"
  }
];
var k = '<tbody>'
for (i = 0; i < workersDetails.length; i++) {
  k += '<tr>';
  k += '<td>' + workersDetails[i].name + '</td>';
  k += '<td><img src="' + workersDetails[i].image + '"></td>';
  k += '<td>' + workersDetails[i].age + '</td>';
  k += '<td>' + workersDetails[i].startDate + '</td>';
  k += '</tr>';
}
k += '</tbody>';
document.getElementById('tableData').innerHTML = k;
