<script>
export default {
    data() {
        return {
            header: 'The Italian Stallions'
        }
    }
}
</script>

<template>
    <div class="header-wrapper">
        <h1>{{ header }}</h1>
        <img id="logo" src="../assets/kock-färg.png" alt="logo" />
    </div>
</template>

<style>
.header-wrapper {
    background-color: #b2c7a9;
    margin-bottom: 20px;
    height: 350px;
    width: 100%;
    overflow: hidden;
    position: relative;
}

@media screen and (max-width: 1460px) {
    .header-wrapper {
        margin-bottom: 0px;
    }
}

.header-wrapper img {
    display: block;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    width: 300px;
    height: 300px;
}

#logo {
    position: absolute;
    top: 40px;
    right: 40px;
    height: 16rem;
    width: 16rem;
    margin-top: -15px;
}

.header-wrapper h1 {
    font-family: 'Dancing Script', cursive;
    font-size: 100px;
    text-align: center;
    color: #f5f5f5;
    margin-top: 110px;
}

@media screen and (max-width: 1280px) {

    #logo {
        display: none;
    }
}


@media screen and (max-width: 768px) {
    .header-wrapper {
        height: 200px;
    }

    .header-wrapper h1 {
        font-size: 50px;
        margin-top: 50px;
    }
}


@media screen and (max-width: 425px) {
    .header-wrapper {
        height: 150px;
    }

    .header-wrapper h1 {
        font-size: 30px;
        margin-top: 50px;
    }
}</style>