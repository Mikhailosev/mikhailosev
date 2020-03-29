<template>
    <nav class="topbar--container">
        <svg
            version="1.1"
            id="Слой_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            class="logo"
            viewBox="0 0 64 64"
            xml:space="preserve"
        >
            <g>
                <path
                    class="svg"
                    d="M9.31,33V0h6.46l9.16,25.53L34.34,0h5.81v33h-4.39V6.2l-9.09,24.6h-4.52L13.33,6.13V33H9.31z"
                />
                <path
                    class="svg"
                    d="M49.13,4.39V0h4.39v4.39H49.13z M49.13,35.47V11.26h4.39l0.14,36.7L49.13,35.47z"
                />
            </g>
            <g>
                <path class="svg" d="M9.31,32.84h3.97v27.45l17.86,0.01l8.64,3.7H9.31V32.84z" />
                <path
                    class="svg"
                    d="M53.66,47.41c0,10.6-6.44,16.59-14.3,16.59c-8.13,0-13.84-6.68-13.84-16c0-9.77,6.08-16.17,14.3-16.17
		C48.23,31.84,53.66,38.28,53.66,47.41z M29.77,47.91c0,6.58,3.56,12.47,9.82,12.47c6.3,0,9.87-5.8,9.87-12.79
		c0-6.12-3.2-12.51-9.82-12.51C33.06,35.08,29.77,41.15,29.77,47.91z"
                />
            </g>
        </svg>
        <div class="topbar--item">
            Обо мне
            <div class="white--border">&nbsp;</div>
        </div>
        <div class="topbar--item">
            Портфолио
            <div class="white--border">&nbsp;</div>
        </div>
        <div class="topbar--item">
            Курсы
            <div class="white--border">&nbsp;</div>
        </div>
        <div class="topbar--item">
            Блог
            <div class="white--border">&nbsp;</div>
        </div>
        <div class="topbar--item">
            Войти
            <div class="white--border">&nbsp;</div>
        </div>
        <LangSwitch class="topbar--item"></LangSwitch>
    </nav>
</template>
<script>
import LangSwitch from "./LangSwitch";
export default {
    components: {
        LangSwitch
    }
};
</script>
<style>
.country--wrapper {
    display: flex;
    align-items: center;
    margin: 0 10px 0 auto !important;
}
.country {
    width: 24px;
    height: 24px;
    margin-right: 5px;
    cursor: pointer;
}
.logo {
    width: 30px;
    height: 30px;
}
[data-theme="dark"] .svg {
    fill: var(--fontWhite);
}
.svg {
    fill: var(--fontWhite);
}
.topbar--container {
    display: flex;
    position: sticky;
    width: 100%;
    height: 40px;
    align-items: center;
    justify-content: center;
}
@media (max-width: 757px) {
    .topbar--item {
        display: none;
    }
}
.white--border {
    position: absolute;
    display: none;
    bottom: 0;
    left: 0;
    width: 100%;
    transition: all 0.6s;
    background-color: var(--secondaryColorMainLight);
    border-radius: 5px;
    height: 5px;
}
.topbar--item {
    transition: all 0.6s;
    text-align: center;
    padding: 10px 10px 10px 10px;
    margin: 0px 15px 0 15px;
    position: relative;
    height: 100%;
    color: var(--fontHeavy);
    cursor: pointer;
    word-break: inherit;
}
.topbar--item:hover {
    background-color: var(--primaryColorLight);
    color: var(--secondaryColorMainLight);
}
.topbar--item:hover .white--border {
    transition: all 0.6s;

    display: block;
}
</style>