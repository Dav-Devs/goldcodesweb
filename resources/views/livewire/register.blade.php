@section('title') Sign Up @endsection

@section('extra_stylesheet')
<style>
    /* @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap"); */

    * {
        margin: 0;
        padding: 0;
    }

    .container {
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #e5e9f1;
    }

    .card {
        height: 420px;
        width: 330px;
        background-color: #fff;
        border-radius: 10px;
        padding: 10px 20px;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
    }

    .main {
        display: none;
    }

    .active {
        display: block !important;
    }

    .d-none {
        display: none !important;
    }

    .parent {
        margin-top: 20px;
        margin-bottom: 50px;
    }

    .card .top-div {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .top-div img {
        width: 20px;
        margin-right: 7px;
    }

    .content {}

    .content h2 {
        font-size: 22px;
    }

    .content p {
        font-size: 12px;
        color: #b4ae9c;
        font-weight: 600;
    }

    .input-text {
        position: relative !important;
        margin-top: 10px;
    }

    .input-text input:focus {
        border-bottom: 1px solid #ffd700 !important;
    }

    .input-text input {
        /* border: none !important; */
        box-shadow: none !important;
        background: none !important;
    }

    /* input[type="text"] {
        width: 100%;
        height: 40px;
        border: none;
        border: 1px solid #f8f7fa;
        outline: none;
        padding: 0 10px;
        box-sizing: border-box;
        font-size: 12px;
        border-radius: 5px;
    } */

    .radio-text {
        display: flex;
        gap: 20px;
    }

    input[type="radio"] {
        display: none;
    }

    .radio-text label {
        height: 125px;
        width: 100%;
        border: 1px solid #edf1f6;
        border-radius: 5px;
        padding: 5px 10px;
        box-sizing: border-box;
        cursor: pointer;
    }

    .radio-text label h5 {
        margin-top: 10px;
    }

    .radio-text label p {
        font-size: 12px;
        margin-top: 10px;
        font-weight: 600;
        color: #99a1b2;
    }

    #radio-button-1:checked~.radio-button-1,
    #radio-button-2:checked~.radio-button-2 {
        border-color: #a89af0;
    }

    #radio-button-1:checked~.radio-button-1 i,
    #radio-button-2:checked~.radio-button-2 i {
        color: blue;
    }

    .input-text span {
        position: absolute;
        left: 0;
        top: -16px;
        font-size: 11px;
        font-weight: 900;
        color: #000;
    }

    ::placeholder {
        color: #ffebb0
    }

    .valid {
        border-bottom: 2px solid #ffd700 !important;
    }

    .invalid {
        border-bottom: 2px solid red !important;
    }

    .button {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
    }

    .button button {
        height: 40px;
        width: 100%;
        background-color: #ffd700;
        font-size: 12px;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.5s;
    }

    .button button:hover {
        background-color: #daa520;
    }

    .btn_gap {
        gap: 20px;
    }

    .btn_gap1 {
        margin-top: 46px;
        gap: 20px;
    }

    .launch {
        margin-top: 75px;
    }

    .check_circle {
        stroke-dasharray: 166;
        stroke-dashoffset: 166;
        stroke-width: 2;
        stroke-miterlimit: 10;
        stroke: #ffd700;
        fill: none;
        animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
    }

    .checkmark {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        display: block;
        stroke-width: 2;
        stroke: #fff;
        stroke-miterlimit: 10;
        margin: 10% auto;
        box-shadow: inset 0px 0px 0px #7ac142;
        animation: fill 0.4s ease-in-out 0.4s forwards,
            scale 0.3s ease-in-out 0.9s both;
    }

    .check_tick {
        transform-origin: 50% 50%;
        stroke-dasharray: 48;
        stroke-dashoffset: 48;
        animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
    }

    @keyframes stroke {
        100% {
            stroke-dashoffset: 0;
        }
    }

    @keyframes scale {

        0%,
        100% {
            transform: none;
        }

        50% {
            transform: scale3d(1.1, 1.1, 1);
        }
    }

    @keyframes fill {
        100% {
            box-shadow: inset 0px 0px 0px 30px #7ac142;
        }
    }

</style>

@endsection

@section('extra_script')
@endsection

<div class="container">
    <div class="card">
        <div class="parent">
            <div class="top-div">
                <img src="{{ asset('images/svg/GCW-48x48.svg') }}" />
                <h3>{{ str_replace('_', ' ', config('app.name', 'Gold_Codes_Web')) }}</h3>
            </div>
        </div>
        <form>
            <div class="main active">
                <div class="content">
                    <h4>Sign Up</h4>
                    <p>You can always change them later.</p>
                </div>

                <div class="input-text form-floating">
                    <input id="name" type="text"
                        class="form-control border-0 border-bottom @error('name') is-invalid @enderror" name="name"
                        value="{{ old('name') }}" placeholder="Name..." minlength="3" required autocomplete="name"
                        autofocus>
                    <label for="name">Name... </label>

                    @error('name')
                    <span class="invalid-tooltip" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>

                <div class="input-text form-floating">
                    <input id="email" type="email"
                        class="form-control border-0 border-bottom @error('email') is-invalid @enderror" name="email"
                        value="{{ old('email') }}" placeholder="gold@codes.web..." minlength="3" required
                        autocomplete="email">
                    <label for="email">Email address... </label>

                    @error('email')
                    <span class="invalid-tooltip" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>

                <div class="button">
                    <button class="nc">Next</button>
                </div>

            </div>
        </form>
        <div class="main">
            <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                <circle class="check_circle" cx="26" cy="26" r="25" fill="none" />
                <path class="check_tick" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
            </svg>
            <div class="content">
                <h2>Congratulations! <span id="shown_name">User123</span></h2>
                <p>You can start using the site or <a href="http://" target="_blank"
                        rel="noopener noreferrer">Contribute to Project G.C.W.</a> </p>
            </div>
            <div class="button launch"><button>{{ __('Go to the dashboard') }}</button></div>
        </div>
    </div>
</div>
