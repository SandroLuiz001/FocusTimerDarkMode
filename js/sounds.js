import {
    cardForest,
    cardRain,
    cardCoffeeShop,
    cardFireplace,
    inputForestVolume,
    inputRainVolume,
    inputCoffeeShopVolume,
    inputFireplaceVolume
} from "./elements.js"

export default function() {
    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
    const bgAudioForest = new Audio("https://github.com/SandroLuiz001/sounds/blob/main/som-de-floresta-ssyoutube.online.mp3?raw=true")
    const bgAudioRain = new Audio("https://github.com/SandroLuiz001/sounds/blob/main/som-de-chuva-pt.15-ssyoutube.online.mp3?raw=true")
    const bgAudioCoffeeShop = new Audio("https://github.com/SandroLuiz001/sounds/blob/main/-coffitivity-som-de-cafeteria-para-aumentar-a-criatividade-e-trabalhar-melhor-shorts-coffee-ssyoutube.online.mp3?raw=true")
    const bgAudioFireplace = new Audio("https://github.com/SandroLuiz001/sounds/blob/main/som-de-lareira-com-estalar-de-fogo-ssyoutube.online.mp3?raw=true")

    bgAudioForest.loop = true
    bgAudioRain.loop = true
    bgAudioCoffeeShop.loop = true
    bgAudioFireplace.loop = true

    function pressButton() {
        buttonPressAudio.play()
    }

    function timeEnd() {
        kitchenTimer.play()
    }

    function audioForest() {
        cardForest.classList.contains('active')
        ? bgAudioForest.play()
        : bgAudioForest.pause()
    }

    function audioRain() {
        cardRain.classList.contains('active')
        ? bgAudioRain.play()
        : bgAudioRain.pause()
    }

    function audioCoffeeShop() {
        cardCoffeeShop.classList.contains('active')
        ? bgAudioCoffeeShop.play()
        : bgAudioCoffeeShop.pause()
    }

    function audioFireplace() {
        cardFireplace.classList.contains('active')
        ? bgAudioFireplace.play()
        : bgAudioFireplace.pause()
    }

    function setAudioVolume() {
        bgAudioForest.volume = inputForestVolume.value
        bgAudioRain.volume = inputRainVolume.value
        bgAudioCoffeeShop.volume = inputCoffeeShopVolume.value
        bgAudioFireplace.volume = inputFireplaceVolume.value
    }

    function resetForestVolume() {
        inputForestVolume.value = 0.5
    }

    function resetRainVolume() {
        inputRainVolume.value = 0.5
    }

    function resetCoffeeShopVolume() {
        inputCoffeeShopVolume.value = 0.5
    }

    function resetFireplaceVolume() {
        inputFireplaceVolume.value = 0.5
    }

    return {
        pressButton,
        timeEnd,
        audioForest,
        audioRain,
        audioCoffeeShop,
        audioFireplace,
        setAudioVolume,
        resetForestVolume,
        resetRainVolume,
        resetCoffeeShopVolume,
        resetFireplaceVolume
    }
}