<style>
    .wave-container {
        width: 200px;
        height: 200px;
        margin: 13em auto;
        position: relative
    }

    .wave-container .in_wave {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-animation: wave-form 4s infinite;
        animation: wave-form 4s infinite
    }

    .wave-container .in_wave:nth-child(1) {
        -webkit-animation-delay: 4s;
        animation-delay: 4s
    }

    .wave-container .in_wave:nth-child(2) {
        -webkit-animation-delay: 3.5s;
        animation-delay: 3.5s
    }

    .wave-container .in_wave:nth-child(3) {
        -webkit-animation-delay: 3s;
        animation-delay: 3s
    }

    .wave-container .in_wave:nth-child(4) {
        -webkit-animation-delay: 2.5s;
        animation-delay: 2.5s
    }

    .wave-container .in_wave:nth-child(5) {
        -webkit-animation-delay: 2s;
        animation-delay: 2s
    }

    .wave-container .in_wave:nth-child(6) {
        -webkit-animation-delay: 1.5s;
        animation-delay: 1.5s
    }

    .wave-container .in_wave:nth-child(7) {
        -webkit-animation-delay: 1s;
        animation-delay: 1s
    }

    .wave-container .in_wave:nth-child(8) {
        -webkit-animation-delay: 0.5s;
        animation-delay: 0.5s
    }

    .wave-container .img {
        position: absolute;
        top: 23%;
        left: 23%;
        -webkit-animation: fade-in-out 0.95s infinite;
        animation: fade-in-out 0.95s infinite
    }

    @-webkit-keyframes wave-form {
        0% {
            width: 0%;
            height: 0%;
            -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0)
        }

        20% {
            -webkit-box-shadow: 0 5px 60px 15px rgba(235, 220, 7, 0.4) inset;
            box-shadow: 0 5px 60px 15px rgba(235, 220, 7, 0.4) inset
        }

        40% {
            -webkit-box-shadow: 0 5px 60px 15px rgba(235, 220, 7, 0.2) inset;
            box-shadow: 0 5px 60px 15px rgba(235, 220, 7, 0.2) inset
        }

        100% {
            width: 200px;
            height: 200px;
            -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0) inset;
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0) inset
        }
    }

    @keyframes wave-form {
        0% {
            width: 0%;
            height: 0%;
            -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0)
        }

        20% {
            -webkit-box-shadow: 0 5px 60px 15px rgba(235, 220, 7, 0.4) inset;
            box-shadow: 0 5px 60px 15px rgba(235, 220, 7, 0.4) inset
        }

        40% {
            -webkit-box-shadow: 0 5px 60px 15px rgba(235, 220, 7, 0.2) inset;
            box-shadow: 0 5px 60px 15px rgba(235, 220, 7, 0.2) inset
        }

        100% {
            width: 200px;
            height: 200px;
            -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0) inset;
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0) inset
        }
    }

    @-webkit-keyframes fade-in-out {
        0% {
            -webkit-filter: brightness(0.2);
            filter: brightness(0.2);
            opacity: 0.2
        }

        25% {
            -webkit-filter: brightness(0.25);
            filter: brightness(0.25);
            opacity: 0.25
        }

        50% {
            -webkit-filter: brightness(0.5);
            filter: brightness(0.5);
            opacity: 0.5
        }

        75% {
            -webkit-filter: brightness(0.75);
            filter: brightness(0.75);
            opacity: 0.75
        }

        100% {
            -webkit-filter: brightness(1);
            filter: brightness(1);
            opacity: 1
        }
    }

    @keyframes fade-in-out {
        0% {
            -webkit-filter: brightness(0.2);
            filter: brightness(0.2);
            opacity: 0.2
        }

        25% {
            -webkit-filter: brightness(0.25);
            filter: brightness(0.25);
            opacity: 0.25
        }

        50% {
            -webkit-filter: brightness(0.5);
            filter: brightness(0.5);
            opacity: 0.5
        }

        75% {
            -webkit-filter: brightness(0.75);
            filter: brightness(0.75);
            opacity: 0.75
        }

        100% {
            -webkit-filter: brightness(1);
            filter: brightness(1);
            opacity: 1
        }
    }

    /* Make clicks pass-through */
    #nprogress {
        pointer-events: none;
    }

    #nprogress .bar {
        background: #dda222 !important;

        position: fixed;
        z-index: 1031;
        top: 0;
        left: 0;

        width: 100%;
        height: 3px;
        box-shadow: 0 0 10px #f8e8b7, 0 0 5px #dda222;
    }

    /* Fancy blur effect */
    #nprogress .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        opacity: 1.0;

        -webkit-transform: rotate(3deg) translate(0px, -4px);
        -ms-transform: rotate(3deg) translate(0px, -4px);
        transform: rotate(3deg) translate(0px, -4px);
    }

    /* Remove these to get rid of the spinner */
    #nprogress .spinner {
        display: block;
        position: fixed;
        z-index: 1031;
        top: 15px;
        right: 15px;
    }

    #nprogress .spinner-icon {
        width: 20px;
        height: 20px;
        box-sizing: border-box;

        border: solid 2px transparent;
        border-top-color: #dd9c22;
        border-left-color: #22bbdd;
        border-radius: 50%;
        box-shadow: 0 0 3px #f8e8b7, 0 0 3px #dda520;

        -webkit-animation: nprogress-spinner 400ms linear infinite;
        animation: nprogress-spinner 400ms linear infinite;
    }

    .nprogress-custom-parent {
        overflow: hidden;
        position: relative;
    }

    .nprogress-custom-parent #nprogress .spinner,
    .nprogress-custom-parent #nprogress .bar {
        position: absolute;
    }

    @-webkit-keyframes nprogress-spinner {
        0% {
            -webkit-transform: rotate(0deg);
        }

        100% {
            -webkit-transform: rotate(360deg);
        }
    }

    @keyframes nprogress-spinner {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }

</style>
