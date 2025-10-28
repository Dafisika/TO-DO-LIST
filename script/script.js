function resetForm() {
  const title = document.getElementById("title");
  const priority = document.getElementById("priority");
  const date = document.getElementById("date");
  const time = document.getElementById("time");
  const description = document.getElementById("description");

  title.value = "";
  priority.value = "";
  date.value = "";
  time.value = "";
  description.value = "";
}

function openModal() {
  resetForm();
  window.scrollTo({ top: 0, behavior: "instant" });
  const addModal = document.querySelector("#modal");
  addModal.classList.remove("hidden");
  const disableScroll = document.querySelector("body");
  disableScroll.classList.add("overflow-hidden");
}
function closeModal() {
  const closeModal = document.querySelector("#modal");
  closeModal.classList.add("hidden");
  const enableScroll = document.querySelector("body");
  enableScroll.classList.remove("overflow-hidden");
}

function getDataInput(id) {
  const title = document.getElementById("title");
  const priority = document.getElementById("priority");
  const date = document.getElementById("date");
  const time = document.getElementById("time");
  const description = document.getElementById("description");

  let value = {
    id: id,
    title: title.value,
    priority: priority.value,
    date: date.value,
    time: time.value,
    description: description.value,
    isDone: false,
  };

  return value;
}

function setId() {
  // Check Last Data
  let dataArray = JSON.parse(localStorage.getItem("tododata")) || [];
  let checkLastData = dataArray.length + 1;
  // Set Auto Increment Based on Last Data
  return checkLastData++;
}

function setValue(key, data) {
  let dataArray = JSON.parse(localStorage.getItem(key)) || [];
  dataArray.push(data);

  localStorage.setItem(key, JSON.stringify(dataArray));
}

function getValue(key) {
  const data = JSON.parse(localStorage.getItem(key)) ?? null;
  return data;
}

function priorityStyle(data) {
  let priorityStyle = "";
  if (data == "High") {
    priorityStyle = "bg-red-600";
  } else if (data == "Medium") {
    priorityStyle = "bg-yellow-500";
  } else if (data == "Low") {
    priorityStyle = "bg-green-500";
  }
  return priorityStyle;
}

function deleteData() {
  const buttons = document.getElementsByClassName("button-delete");

  console.log(buttons);
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
      const id = buttons[i].getAttribute("data-id");
      let data = getValue("tododata");
      const deleteItem = data.indexOf(id);
      console.log(deleteItem);
      data.splice(deleteItem, 1);
      localStorage.setItem("tododata", JSON.stringify(data));
      fetchDataToDo();
    });
  }
}
function moveToDoData() {
  const buttons = document.getElementsByClassName("button-done");

  console.log(buttons);
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("change", () => {
      const id = buttons[i].getAttribute("data-id");
      let data = getValue("tododata");
      const indexItem = data.indexOf(id);
      let dataDone = data.find((item) => item.id == id);
      dataDone.isDone = true;
      data.splice(indexItem, 1);

      data.push(dataDone);
      localStorage.setItem("tododata", JSON.stringify(data));
      fetchDataToDo();
      fetchDataDone();
    });
  }
}

function fetchDataDone() {
  const ongoingToDo = document.getElementById("doneToDo");
  const data = getValue("tododata");
  ongoingToDo.innerHTML = "";
  const priority = ["High", "Medium", "Low"];
  console.log(data);
  data
    .filter((item) => item.isDone == true)
    .sort(function (a, b) {
      let first = priority.indexOf(a.priority);
      let second = priority.indexOf(b.priority);
      return first - second;
    })
    .forEach((item, index) => {
      ongoingToDo.innerHTML += `<div class="" id="${index}">
                      
                    <div class="flex flex-col border-1 rounded-md p-2 w-[300px] h-[350px] ">
                        <div class="flex justify-between items-center mb-4">
                            <b class="line-through text-gray-500 text-xl font-DMSans">${item.title}</b>
                            <p class="bg-gray-500 line-through px-2">${item.priority}</p>
                        </div>
                        <div class="flex flex-col py-2 gap-4">
                            <div class="flex items-start gap-2">
                                <svg class="" width="15px" height="20px" viewBox="-0.5 0 15 15"
                                    xmlns="http://www.w3.org/2000/svg" fill="#000000">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path fill="#808080" fill-rule="evenodd"
                                            d="M61,154.006845 C61,153.45078 61.4499488,153 62.0068455,153 L73.9931545,153 C74.5492199,153 75,153.449949 75,154.006845 L75,165.993155 C75,166.54922 74.5500512,167 73.9931545,167 L62.0068455,167 C61.4507801,167 61,166.550051 61,165.993155 L61,154.006845 Z M62,157 L74,157 L74,166 L62,166 L62,157 Z M64,152.5 C64,152.223858 64.214035,152 64.5046844,152 L65.4953156,152 C65.7740451,152 66,152.231934 66,152.5 L66,153 L64,153 L64,152.5 Z M70,152.5 C70,152.223858 70.214035,152 70.5046844,152 L71.4953156,152 C71.7740451,152 72,152.231934 72,152.5 L72,153 L70,153 L70,152.5 Z"
                                            transform="translate(-61 -152)"></path>
                                    </g>300
                                </svg>
                                <p class="line-through text-gray-500">${item.date}</p>
                            </div>
                            <div class="flex items-center gap-2">
                                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z"
                                            fill="#808080"></path>
                                        <path
                                            d="M12 5C11.4477 5 11 5.44771 11 6V12.4667C11 12.4667 11 12.7274 11.1267 12.9235C11.2115 13.0898 11.3437 13.2343 11.5174 13.3346L16.1372 16.0019C16.6155 16.278 17.2271 16.1141 17.5032 15.6358C17.7793 15.1575 17.6155 14.5459 17.1372 14.2698L13 11.8812V6C13 5.44772 12.5523 5 12 5Z"
                                            fill="#808080"></path>
                                    </g>
                                </svg>
                                <p class="line-through text-gray-500">${item.time}</p>
                            </div>

                            <label class="line-through text-gray-500" for="">To Do:</label>
                            <textarea class="border rounded-md
                        p-1" type="text" rows="4" readonly>${item.description}
                        </textarea>
                        </div>
                        <div class="flex flex-col gap-2 pt-2">
                            <button  data-id="${item.id}" class="bg-gray-500 border-1 cursor-pointer  rounded-md text-white w-full button-delete" >Delete</button>
                        </div>
                    </div>
                </div>`;
    });

  deleteData();
}

function fetchDataToDo() {
  const ongoingToDo = document.getElementById("ongoingToDo");
  const data = getValue("tododata");
  ongoingToDo.innerHTML = "";
  const priority = ["High", "Medium", "Low"];
  console.log(data);
  data
    .filter((item) => item.isDone == false)
    .sort(function (a, b) {
      let first = priority.indexOf(a.priority);
      let second = priority.indexOf(b.priority);
      return first - second;
    })
    .forEach((item, index) => {
      ongoingToDo.innerHTML += `<div class="" id="${index}">
                    <input type="checkbox" class="w-5 h-5 blue-500 button-done" data-id="${
                      item.id
                    }">
                    <div class="flex flex-col border-1 rounded-md p-2 w-[300px] h-[350px] ">
                        <div class="flex justify-between items-center mb-4">
                            <b class="text-xl font-DMSans">${item.title}</b>
                            <p class="${priorityStyle(item.priority)} px-2">${
        item.priority
      }</p>
                        </div>
                        <div class="flex flex-col py-2 gap-4">
                            <div class="flex items-start gap-2">
                                <svg class="" width="15px" height="20px" viewBox="-0.5 0 15 15"
                                    xmlns="http://www.w3.org/2000/svg" fill="#000000">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path fill="#808080" fill-rule="evenodd"
                                            d="M61,154.006845 C61,153.45078 61.4499488,153 62.0068455,153 L73.9931545,153 C74.5492199,153 75,153.449949 75,154.006845 L75,165.993155 C75,166.54922 74.5500512,167 73.9931545,167 L62.0068455,167 C61.4507801,167 61,166.550051 61,165.993155 L61,154.006845 Z M62,157 L74,157 L74,166 L62,166 L62,157 Z M64,152.5 C64,152.223858 64.214035,152 64.5046844,152 L65.4953156,152 C65.7740451,152 66,152.231934 66,152.5 L66,153 L64,153 L64,152.5 Z M70,152.5 C70,152.223858 70.214035,152 70.5046844,152 L71.4953156,152 C71.7740451,152 72,152.231934 72,152.5 L72,153 L70,153 L70,152.5 Z"
                                            transform="translate(-61 -152)"></path>
                                    </g>300
                                </svg>
                                <p>${item.date}</p>
                            </div>
                            <div class="flex items-center gap-2">
                                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z"
                                            fill="#808080"></path>
                                        <path
                                            d="M12 5C11.4477 5 11 5.44771 11 6V12.4667C11 12.4667 11 12.7274 11.1267 12.9235C11.2115 13.0898 11.3437 13.2343 11.5174 13.3346L16.1372 16.0019C16.6155 16.278 17.2271 16.1141 17.5032 15.6358C17.7793 15.1575 17.6155 14.5459 17.1372 14.2698L13 11.8812V6C13 5.44772 12.5523 5 12 5Z"
                                            fill="#808080"></path>
                                    </g>
                                </svg>
                                <p>${item.time}</p>
                            </div>

                            <label for="">To Do:</label>
                            <textarea class="border rounded-md
                        p-1" type="text" rows="4" readonly>${item.description}
                        </textarea>
                        </div>
                        <div class="flex flex-col gap-2 pt-2">
                            <button data-id="${
                              item.id
                            }" class="border-1 cursor-pointer hover:bg-black bg-red-600 rounded-md text-white w-full button-delete" >Delete</button>
                        </div>
                    </div>
                </div>`;
    });

  deleteData();
  moveToDoData();
}

function submitOngoingToDo() {
  setValue("tododata", getDataInput(setId()));
  resetForm();
  closeModal();
  // location.reload();
  fetchDataToDo();
}

fetchDataToDo();
fetchDataDone();
