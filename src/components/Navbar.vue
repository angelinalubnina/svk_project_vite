<template>
    <div class="card relative z-2">
        <Menubar :model="items">
            <template #start>
                <a href=link>
                    <img alt="logo" src="../../img/Color.svg" height="40" class="mr-2" />
                </a>
            </template>
        </Menubar> 
    </div>
</template>

<script setup>
import { ref } from "vue";
import {BASE_URL, HOME_ROUTE, FRAME_HOUSE_CONSTRUCTION_ROUTE, POW360_ROUTE, ROOMS_AND_SPACES_ROUTE} from '../utils/consts.ts';


const link = `${BASE_URL + HOME_ROUTE}`
console.log(link)

const buscketSum = '15 000 p'

const items = ref([
    {
        label: 'Плагины',
        // url: BASE_URL + PLAGINS_ROUTE,
        // icon: 'pi pi-fw pi-file',
        items: [
            {
                label: 'Каркасное  домостроение',
                url: BASE_URL + FRAME_HOUSE_CONSTRUCTION_ROUTE,
            },
            {
                label: 'Помещения и пространства',
                url: BASE_URL + ROOMS_AND_SPACES_ROUTE,
            },
            {
                separator: true
            },
            {
                label: 'Арматура',
            }
        ]
    },
    {
        label: 'Revit',
        items: [
            {
                label: 'Семейства',
            },
            {
                label: 'Автоматизация',
            },
            {
                label: 'Шаблоны',
            },
            {
                label: 'Стандарты',
            },
            {
                label: '2D > 3D',
            }
        ]
    },
    {
        label: 'POW-360',
        url: BASE_URL + POW360_ROUTE,
    },
    {
        label: 'Деятельность',
    },
    {
        icon: 'pi pi-shopping-cart',
        label: buscketSum
    },
]);
</script>

<style scoped>
.p-menubar {
    background-color: #201f1f;
    border: #201f1f;
    border-radius: 0;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding-left: 8%;
    padding-right: 8%;
}
</style>
