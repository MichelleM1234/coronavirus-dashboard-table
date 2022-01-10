import './App.css';

function App() {

const api_url =
	'https://api.coronavirus.data.gov.uk/v1/data?' +
         'filters=areaType=nation;areaName=england&' +
         'structure={"date":"date","newCases":"newCasesByPublishDate","totalCases":"cumCasesByPublishDate","newDeaths":"newDeaths28DaysByPublishDate","totalDeaths":"cumDeaths28DaysByPublishDate"}'

async function getapi(url) {

	const response = await fetch(url);

	var result = await response.json();
	show(result);
}

getapi(api_url);

function show(result) {
	let tab =
		`<tr>
		<th>Date</th>
		<th>New Daily Cases</th>
		<th>Total Cases</th>
		<th>New Daily Deaths</th>
		<th>Total Deaths</th>
		</tr>`;

	for (let r of result.data) {
		tab += `<tr>
            <td>${r.date}</td>
            <td>${r.newCases}</td>
            <td>${r.totalCases}</td>
            <td>${r.newDeaths}</td>
            <td>${r.totalDeaths}</td>
        </tr>`;
	}

	document.getElementById("coronavirusTable").innerHTML = tab;
}

  return (
      <div>
          <h2>England Coronavirus Dashboard</h2>
          <table id="coronavirusTable"></table>
      </div>
  );
}

export default App;
