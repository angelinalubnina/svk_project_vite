<template>
  <div class="grey">
    <img src="../../img/one2.png" alt="Коллаж" style="max-width: 100%" />
    <p class="custom-font1">Проектируйте просто, комфортно и быстро c</p>
    <div class="componyAndButton">
      <p class="custom-font2">BIM Project</p>
      <button class="orderBtn" @click="goToOrgerPage">Связаться с нами</button>
    </div>
</div>
<div class="card flex justify-content-center">
    <Dialog :draggable="false" :blockScroll="false" dismissableMask="true" modal v-model:visible="visible" header=" " style="width: 50%;" :breakpoints="{ '960px': '100vw', '641px': '100vw' }">
        <div id="card" class="card p-4 shadow-2 border-round w-full lg:w-6" >
          <div class="text-center mb-5">
            <img
              src="../../img/White.svg"
              alt="Image"
              height="80"
              class="mb-3"
            />
          </div>

          <label for="email1" class="block font-medium mb-2"
            >Предпочитаемый вид связи</label
          >
          <div class="card flex mb-2">
            <MultiSelect v-model="selectedTypeOfCommunication" display="chip" :options="typeOfCommunication" optionLabel="name" placeholder="Выберите из списка"
                :maxSelectedLabels="4" class="w-full md:w-20rem" />
          </div>
          <div>
            <div >
              <label for="contacts" class="block font-medium mb-2"
              >Номер телефона</label>
              <InputMask v-model="userPhone" date="phone" mask="+7(999) 999-9999" placeholder="+7(999) 999-9999" />
              <label for="contacts" class="block font-medium mb-2"
              >Почта</label>
              <span class="p-float-label">
                  <InputText class="mail" id="username" v-model="userMail" />
              </span>
              <label for="password1" class="block font-medium mb-2"
                >Ваш вопрос или предложение</label
              >
            </div>
            <div class="card flex justify-content-center">
              <Textarea
                id="textarea"
                v-model="text"
                autoResize
                rows="5"
                cols="100"
              />
            </div>
              <Button 
                v-if="checkTheCorrectnessOfFilling"
                id="bеnSend"
                label="Отправить"
                class="w-full"
                @click="doNotShow"
              ></Button>
              <Button v-else id="bеnSend" label="Заполните пустые поля" class="w-full" severity="success" disabled/>
            </div>
        </div>
    </Dialog>
</div>
</template>

<script setup>
import moduleName from "module";
import { useRouter } from "vue-router";
import { MAKE_AN_ORDER_ROUTE } from "../utils/consts.ts";
import { ref, computed,  watch } from "vue";

const router = useRouter();

const visible = ref(false);
const text = ref('');
const userMail = ref('')
const userPhone = ref('')

function goToOrgerPage() {
  visible.value = true;
}

const selectedTypeOfCommunication = ref([]);
const typeOfCommunication = ref([
    { name: 'WhatsApp', code: 'TL' },
    { name: 'Telegram', code: 'TL' },
    { name: 'Почта', code: 'P' },
    { name: 'Звонок', code: 'TL' },
]);

const selectionCode = computed(() => {
  let arr = []
  if(selectedTypeOfCommunication.value.length === 0) {
    arr = []
    return 0
  } else if(selectedTypeOfCommunication.value.length === 1) {
    return selectedTypeOfCommunication.value[0].code
  } else {
    return 2
  }
})

watch(userPhone, (newUserPhone, oldUserPhone) => {
    console.log('UserPhone changed:', newUserPhone);
});

// функция для проверки валидности введеных данных
const checkTheCorrectnessOfFilling = computed(() => {
  let lengthSelectedTypeOfCommunication = selectedTypeOfCommunication.value.length
  let penElementCode = selectedTypeOfCommunication.value[0]

  if(lengthSelectedTypeOfCommunication === 1 && penElementCode.code === 'TL' && !isNaN(userPhone.value[15])) {
    return true
  } 
  if(lengthSelectedTypeOfCommunication === 1 && penElementCode.code === 'P' && userMail.value !== '') {
    return true
  }
  if(lengthSelectedTypeOfCommunication === 2 && userPhone.value !== '' && userMail.value !== '' && !isNaN(userPhone.value[15])) {
    return true
  }
  return false
})

const doNotShow = function() {
  visible.value = false
}

// надо написать функцию, которая будет отправлять на сервак данные, которые ввел пользователь


</script>

<style>
@font-face {
  font-family: "Orbitron-VariableFont_wght";
  src: url("../assets/fonts/Orbitron-VariableFont_wght.ttf") format("truetype");
}
.custom-font1 {
  font-size: 3.5rem;
  color: white;
  line-height: 2;
  margin-left: 8%;
  margin-right: 8%;
}
.componyAndButton {
  display: flex;
  justify-content: space-between;
}
.custom-font2 {
  font-family: "Orbitron-VariableFont_wght";
  font-size: 4rem;
  margin-left: 8%;
}
.orderBtn {
  font-size: 2rem;
  color: #000000;
  position: absolute;
  right: 8%;
  padding: 23px 71px;
  border: none;
  border-radius: 50px;
  background-color: #ff5b37;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s,
    box-shadow 0.3s;
}
.orderBtn:enabled:hover {
  background: #ff6e4e;
  color: #0e1315;
  border-color: #ff4e28;
}
.orderBtn:enabled:active {
  background: #ff4218;
  color: #0e1315;
  border-color: #ff4218;
}
.surface-card .p-4 .shadow-2 .border-round .w-full .lg:w-6 {
    background-color: #0e1315 !important;
}
#contacts, #textarea{
    font-size: 1.3rem !important;
}
#bеnSend {
    margin-top: 15px;
}
.p-dialog .p-dialog-content {
  display: flex;
  background-color:#0e1315 !important;
}
#card {
  background-color: #0e1315 !important; 
  color:rgb(255, 255, 255) !important;  
  width: 100% !important;
}
.p-dialog .p-dialog-header {
  background-color:#0e1315 !important;
}

</style>
