const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask()
{
	if (inputBox.value === '')
		alert("you must write something");
	else
	{
		let li = document.createElement("li") 
		li.innerHTML = inputBox.value;
		var targetItem = listContainer.getElementsByClassName("checked");
		listContainer.insertBefore(li, targetItem[0]);
		let span = document.createElement("span");
		span.innerHTML = "\u00d7";
		li.appendChild(span);
	}
	inputBox.value = "";
	saveData(); 
}

listContainer.addEventListener("click", function(e) {
	if (e.target.tagName === "LI")
	{
		e.target.classList.toggle("checked"); 
		if (e.target.classList.contains("checked"))
		{
			e.target.parentElement.appendChild(e.target);
		}
		else
		{
			// let firstItem = listContainer.querySelector("li");
			var targetItems = listContainer.getElementsByClassName("checked");
			e.target.parentElement.insertBefore(e.target, targetItems[0]);
		}
		saveData();
	}
	else if (e.target.tagName === "SPAN")
	{
		e.target.parentElement.remove();
		saveData();
	}
}, false);

function saveData()
{
	localStorage.setItem("data", listContainer.innerHTML); 
}

function showTask()
{
	listContainer.innerHTML = localStorage.getItem("data"); 
}
showTask();










