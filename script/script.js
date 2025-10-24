const add = document.getElementById("add");
add.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "instant" });
  const addModal = document.querySelector("#modal");
  addModal.classList.remove("hidden");
  const disableScroll = document.querySelector("body");
  disableScroll.classList.add("overflow-hidden");
});

const close = document.getElementById("closeModal");
close.addEventListener("click", () => {
  const closeModal = document.querySelector("#modal");
  closeModal.classList.add("hidden");
  const enableScroll = document.querySelector("body");
  enableScroll.classList.remove("overflow-hidden");
});

function setAndGetValue(elementId, setItemKey) {
  const getElement = document.getElementById(elementId);
  const getElementValue = getElement.value;
  localStorage.setItem(setItemKey, getElementValue);
  const getData = localStorage.getItem(setItemKey);
  return getData;
}

function submitOngoingToDo() {
  const formToDo = document.getElementById("formToDo");
  formToDo.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = setAndGetValue("title", "titleData");
    console.log(title);
    const priority = setAndGetValue("priority", "priorityData");
    const date = setAndGetValue("date", "dateData");
    const time = setAndGetValue("time", "timeData");
    const description = setAndGetValue("description", "descriptionData");

    let priorityStyle = "";
    if (priority == "High") {
      priorityStyle = "bg-red-700";
    } else if (priority == "Medium") {
      priorityStyle = "bg-yellow-500";
    } else if (priority == "Low") {
      priorityStyle = "bg-green-500";
    }

    // const arr = [];
    // const arrPush = arr.push([
    //   {
    //     title: setAndGetValue("title", "titleData"),
    //     priority: setAndGetValue("priority", "priorityData"),
    //     date: setAndGetValue("date", "dateData"),
    //     time: setAndGetValue("time", "timeData"),
    //     description: setAndGetValue("description", "descriptionData"),
    //   },
    // ]);

    // const dataArr = localStorage.setItem("data", { arrPush });
    // const getDataArr = localStorage.getItem("data");
    // console.log(JSON.stringify(getDataArr));

    // const priority = document.getElementById("priority");
    // const priorityValue = priority.value;
    // console.log(priorityValue);

    // const date = document.getElementById("date");
    // const dateValue = date.value;

    // const time = document.getElementById("time");
    // const timeValue = time.value;

    // const description = document.getElementById("description");
    // const descriptionValue = description.value;

    const closeModalWhileSubmit = document.getElementById("modal");
    closeModalWhileSubmit.classList.add("hidden");

    const enableScrollWhileSubmit = document.querySelector("body");
    enableScrollWhileSubmit.classList.remove("overflow-hidden");

    const ongoingToDo = document.getElementById("ongoingToDo");
    ongoingToDo.innerHTML = ` <div class="">
                    <input type="checkbox" class="w-5 h-5 blue-500">
                    <div class="flex flex-col border-1 rounded-md p-2 ">
                        <div class="flex justify-between items-center mb-4">
                            <b class="text-xl font-DMSans">${title}</b>
                            <p class="${priorityStyle} px-2">${priority}</p>
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
                                    </g>
                                </svg>
                                <p>${date}</p>
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
                                <p>${time}</p>
                            </div>

                            <label for="">To Do:</label>
                            <textarea class="border rounded-md
                        p-1" type="text" rows="4">${description}
                        </textarea>
                        </div>
                        <div class="flex flex-col gap-2 pt-2">
                            <button class="border-1  bg-red-800 rounded-md text-white w-full">Delete</button>
                        </div>
                    </div>
                </div>`;
  });
}

function saveData() {}
