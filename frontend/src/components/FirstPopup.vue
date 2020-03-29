<template>
    <div class="popup--container">
        <div class="popup--content">
            <h1 class="heading--1">HELLOOOO</h1>
        </div>
    </div>
</template>
<style>
.popup--container {
    position: absolute;
    overflow: hidden;
    top: 0px;
    opacity: 0.5;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: var(--fontBlack);
}
.heading--1 {
    color: red;
}
.popup--content {
    width: 33vw;
    height: 33vh;
    background-color: white;
    border-radius: 8px;
    background: #55b9f3;
    box-shadow: inset 20px 20px 60px #489dcf, inset -20px -20px 60px #62d5ff;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>