<template>
    <div class="grey">
        <div class="parent" style="margin-left: 8%; margin-right: 8%;">
            <div class="foto_and_text" v-motion
                    :initial="{opacity: 0, y: 0,}"
                    :enter="{opacity: 1, y: 0,}"
                    :visible-once="{opacity: 1, x: 0}"
                    :delay="300"
                >
                <img src="img\rooms.png">
                <div id="text"  style="width: 50%">
                    <h1 style="text-align: center;">Помещения и пространства</h1>
                    <p>
                        Создание плагинов для выполнения манипуляций с помещениями и пространствами в Revit открывает широкие возможности для оптимизации процессов проектирования и управления строительством. Ревит, как интегрированное программное обеспечение для проектирования зданий, предоставляет непревзойденные возможности в создании устойчивых и эффективных архитектурных решений.
                    </p>
                    <p>
                        Создание плагинов для манипуляций с помещениями и пространствами в Revit предоставляет инструменты для персонализации рабочего процесса, повышения производительности и создания уникальных решений, соответствующих конкретным потребностям проекта.
                    </p>
                    <!-- <p>
                        Первый шаг в создании таких плагинов - это обозрение API Revit, предоставляющего программный интерфейс для взаимодействия с элементами проекта. Разработчики могут использовать этот интерфейс для доступа к помещениям и пространствам, а также для изменения их свойств.
                    </p> -->
                </div>
            </div>
            <div class="foto_and_text" v-motion
                    :initial="{opacity: 0, y: 0,}"
                    :enter="{opacity: 1, y: 0,}"
                    :visible-once="{opacity: 1, x: 0}"
                    :delay="600"
                >
                <div id="text"  style="width: 50%">
                    <h1 style="text-align: center;">Наши предложения</h1>
                    <p>
                        Добро пожаловать в мир передовых технологий в области проектирования помещений и пространств в Revit! Наша команда предлагает вам уникальные решения, разработанные с использованием передовых технологий, чтобы сделать ваш опыт в Revit более эффективным и интуитивным. Мы создаем инновационные плагины, которые автоматизируют рутинные задачи, улучшают точность проектирования и ускоряют весь процесс работы. Исследуйте новые горизонты проектирования с нашими инструментами и перейдите на следующий уровень в управлении помещениями и пространствами в Revit. Вместе мы делаем будущее проектирования более интеллектуальным и инновационным!
                    </p>
                    <p>
                    </p>
                    <!-- <p>
                        Первый шаг в создании таких плагинов - это обозрение API Revit, предоставляющего программный интерфейс для взаимодействия с элементами проекта. Разработчики могут использовать этот интерфейс для доступа к помещениям и пространствам, а также для изменения их свойств.
                    </p> -->
                </div>
                <img src="img\rooms2.png" alt="">
            </div>
            <div class="foto_and_text" v-motion
                    :initial="{ opacity: 0, x: 0}"
                    :visible="{ opacity: 1, x: 0}"
                    :visibleOnce="{opacity: 0, x: 0}"
                    :delay="600"
                >
                <img src="img\rooms.png">
                <div id="text"  style="width: 50%">
                    <h1 style="text-align: center;">Помещения и пространства</h1>
                    <p>
                        Создание плагинов для выполнения манипуляций с помещениями и пространствами в Revit открывает широкие возможности для оптимизации процессов проектирования и управления строительством. Ревит, как интегрированное программное обеспечение для проектирования зданий, предоставляет непревзойденные возможности в создании устойчивых и эффективных архитектурных решений.
                    </p>
                    <p>
                        Создание плагинов для манипуляций с помещениями и пространствами в Revit предоставляет инструменты для персонализации рабочего процесса, повышения производительности и создания уникальных решений, соответствующих конкретным потребностям проекта.
                    </p>
                    <!-- <p>
                        Первый шаг в создании таких плагинов - это обозрение API Revit, предоставляющего программный интерфейс для взаимодействия с элементами проекта. Разработчики могут использовать этот интерфейс для доступа к помещениям и пространствам, а также для изменения их свойств.
                    </p> -->
                </div>
            </div>
            <div class="foto_and_text" v-motion
                    :initial="{ opacity: 0, x: 0}"
                    :visible="{ opacity: 1, x: 0}"
                    :visibleOnce="{opacity: 0, x: 0}"
                    :delay="900"
                >
                <div id="text"  style="width: 50%">
                    <h1 style="text-align: center;">Наши предложения</h1>
                    <p>
                        Добро пожаловать в мир передовых технологий в области проектирования помещений и пространств в Revit! Наша команда предлагает вам уникальные решения, разработанные с использованием передовых технологий, чтобы сделать ваш опыт в Revit более эффективным и интуитивным. Мы создаем инновационные плагины, которые автоматизируют рутинные задачи, улучшают точность проектирования и ускоряют весь процесс работы. Исследуйте новые горизонты проектирования с нашими инструментами и перейдите на следующий уровень в управлении помещениями и пространствами в Revit. Вместе мы делаем будущее проектирования более интеллектуальным и инновационным!
                    </p>
                    <p>
                    </p>
                    <!-- <p>
                        Первый шаг в создании таких плагинов - это обозрение API Revit, предоставляющего программный интерфейс для взаимодействия с элементами проекта. Разработчики могут использовать этот интерфейс для доступа к помещениям и пространствам, а также для изменения их свойств.
                    </p> -->
                </div>
                <img src="img\rooms2.png" alt="">
            </div>
            
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { ProductService } from '../service/ProductService.js';


</script>

<style scoped>

@font-face {
  font-family: "Orbitron-VariableFont_wght";
  src: url("../assets/fonts/OpenSans-VariableFont.ttf") format("truetype");
}
.foto_and_text {
    padding-top: 1%;
    width: 100%;
    height: 45vh;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    /* border: 5px solid #ececec; */
}

img {
    max-width: 100%;
    max-height: 100%;
    
}

#text {
    text-align: left;
    font-family: "OpenSans-VariableFont";
}

h1 {
    padding-bottom: 2%;
}

p {
    padding-top: 1%;
    text-indent: 2em;
    margin: 0 auto; 
    text-align: justify;
  }








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