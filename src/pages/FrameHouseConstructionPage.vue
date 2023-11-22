<template>
    <div class="grey">
        <div style="margin-left: 8%; margin-right: 8%;">
            <div class="card">
        <DataView :value="products"
                paginator
                :rows="8"
                :layout="layout">

            <template #grid="slotProps">
                <div class="col-12 sm:col-6 lg:col-9 xl:col-3 p-2" >
                    <div class="p-2 border-1 surface-border surface-card border-round" >
                        <div class="flex flex-column align-items-center">
                            <img class="w-12 shadow-2" :src="`img500/${slotProps.data.image}`" :alt="slotProps.data.name" />
                            <div class="ratio-box"></div>
                        </div>
                        <div class="text-2xl align-items-left" style="color: black;">{{ slotProps.data.name }}</div>
                        <div class="catalog_card__table">
                            <div class="catalog">
                                <span class="catalog_card__word">Характеристика 1:</span>
                                <span class="catalog_card__definition">знач.</span>
                            </div>
                            <div class="catalog">
                                <span class="catalog_card__word">Характеристика 2:</span>
                                <span class="catalog_card__definition">знач.</span>
                            </div>
                        </div>
                        <div class="text-2xl align-items-left" style="color: black;">{{ slotProps.data.price }} 000 ₽</div>
                        <div class="flex align-items-center justify-content-between">
                            <Button label="Подробнее" ></Button>
                            <a class="text-1xl font-semibold" href="https://www.example.com">Заказать проект</a>
                        </div>
                    </div>
                </div>
            </template>

        </DataView>
    </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { ProductService } from '../service/ProductService.js';

onMounted(() => {
    ProductService.getProducts().then((data) => (products.value = data.slice(0, 12)));
});

const products = ref();
const layout = ref('grid');

const getSeverity = (product) => {
    switch (product.inventoryStatus) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warning';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
}
</script>

<style scoped>

.catalog_card__table {
    flex-direction: column;
    margin-top: 1em;
    display: flex;
    flex-wrap: wrap;
}
.catalog {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: .375em;
    border-bottom: 1px solid #ececec;
}
.catalog_card__word {
    /* font-family: "RFDewiExtended",sans-serif; */
    font-size: .875em;
    line-height: 1.4285714286em;
    font-weight: 600;
    color: #6a6a6a;
}
.catalog_card__definition {
    /* font-family: "RFDewiExtended",sans-serif; */
    font-size: .875em;
    line-height: 1.4285714286em;
    font-weight: 600;
    color: #000;
}

</style>