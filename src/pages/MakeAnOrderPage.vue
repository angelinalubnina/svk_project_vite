<template>
    <div class="grey">
        <div class="container">
            <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
                <div class="text-center mb-5">
                    <img src="../../img/White.svg" alt="Image" height="50" class="mb-3">
                    <div class="text-900 text-3xl font-medium mb-3">Опишите задачу</div>
                    <!-- <span class="text-900 font-medium line-height-3">Мы свяжемся с вами</span> -->
                    <!-- <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</a> -->
                </div>
        
                <div>
                    <label for="email1" class="block text-900 font-medium mb-2">Email</label>
                    <InputText id="email1" type="text" class="w-full mb-3" />
        
                    <label for="password1" class="block text-900 font-medium mb-2">Password</label>
                    <div class="card flex justify-content-center">
                        <Textarea id="textarea" v-model="value" autoResize rows="5" cols="100" />
                    </div>
                    <Button id="bеnSend" label="Sign In" icon="pi pi-user" class="w-full"></Button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');

</script>

<style scoped>

.surface-card {
    background-color: #0e1315 !important;
}
.text-900 {
    color:#ffffff !important
}
#email1, #textarea{
    font-size: 1.3rem !important;
}
#bеnSend {
    margin-top: 15px;
}
</style>