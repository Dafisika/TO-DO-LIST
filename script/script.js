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

function submitOngoingToDo() {
  const formToDo = document.getElementById("formToDo");
  formToDo.addEventListener("submit", (event) => {
    event.preventDefault();

    const tittle = document.getElementById("tittle");
    const tittleValue = tittle.value;
    console.log(tittleValue);

    localStorage.setItem("Userdata", tittle);
    const saveData = localStorage.getItem("userData");
    console.log(saveData);

    // const saveData = localStorage.getItem(userData);
    // saveData.innerText = saveData;

    const priority = document.getElementById("priority");
    const priorityValue = priority.value;
    console.log(priorityValue);

    const date = document.getElementById("date");
    const dateValue = date.value;
    console.log(dateValue);

    const time = document.getElementById("time");
    const timeValue = time.value;
    console.log(timeValue);

    const description = document.getElementById("description");
    const descriptionValue = description.value;
    console.log(descriptionValue);

    const closeModalWhileSubmit = document.getElementById("modal");
    closeModalWhileSubmit.classList.add("hidden");

    const enableScrollWhileSubmit = document.querySelector("body");
    enableScrollWhileSubmit.classList.remove("overflow-hidden");

    const ongoingToDo = document.getElementById("ongoingToDo");
    ongoingToDo.innerHTML = `<div class="">
                      <input type="checkbox" class="w-5 h-5 blue-500">
                      <div class=" flex flex-col border-1 rounded-md p-2 ">
                          <div class="flex justify-between items-center mb-4">
                              <p>Werkudoro</p>
                              <p class="bg-red-700 px-2">High</p>
                          </div>
                          <div class="flex flex-col py-2 gap-4">
                              <p>07.00 - 08.00</p>
                              <label for="">To Do</label>
                              <input class="border rounded-md
                          p-4" type="text">
                          </div>
                          <div class="flex flex-col gap-2 pt-2">
                              <button class="border-1  bg-red-700 rounded-md text-white w-full">Delete</button>
                          </div>
                      </div>
                  </div>`;
  });
}

function saveData() {}
