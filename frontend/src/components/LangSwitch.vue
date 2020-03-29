<template>
    <div class="country--wrapper">
        <img class="country" @click="$i18n.locale='en'" src="../assets/uk.svg" />
        <img class="country" @click="$i18n.locale='ru'" src="../assets/russia.svg" />
        <theme-switcher></theme-switcher>
    </div>
</template>
<script>
import ThemeSwitcher from "./ThemeSwitcher.vue";

export default {
    components: {
        ThemeSwitcher
    }
};
</script>