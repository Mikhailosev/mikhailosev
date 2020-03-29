<template>
    <div class="theme-switch-wrapper">
        <label class="theme-switch" for="checkbox">
            <input @click="changeTheme" type="checkbox" id="checkbox" />
            <div class="slider round"></div>
        </label>
    </div>
</template>
<style>
.theme-switch-wrapper {
    margin: 0 10px 0 auto;
    align-self: center;
}

.theme-switch {
    display: inline-block;
    height: 34px;
    position: relative;
    width: 60px;
}

.theme-switch input {
    display: none;
}

.slider {
    background-color: var(--primaryColorLight);
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: 0.4s;
}

.slider:before {
    background-color: #fff;
    bottom: 4px;
    content: "";
    height: 26px;
    left: 4px;
    position: absolute;
    transition: 0.4s;
    width: 26px;
}

input:checked + .slider {
    background-color: var(--secondaryColorMainLight);
}

input:checked + .slider:before {
    transform: translateX(26px);
}

.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}
</style>
<script>
</script>
<script>
export default {
    methods: {
        changeTheme() {
            const toggleSwitch = document.querySelector(
                '.theme-switch input[type="checkbox"]'
            );

            function switchTheme(e) {
                if (e.target.checked) {
                    document.documentElement.setAttribute("data-theme", "dark");
                } else {
                    document.documentElement.setAttribute(
                        "data-theme",
                        "light"
                    );
                }
            }

            toggleSwitch.addEventListener("change", switchTheme, false);
        }
    }
};
</script>