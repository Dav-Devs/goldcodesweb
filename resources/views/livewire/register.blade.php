@section('title') Sign Up @endsection

@section('extra_stylesheet')
  <style>
    /* @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap"); */

    * {
        margin: 0;
        padding: 0;
    }

    hr {
      height: 2px !important;
      border-radius: 50% !important;
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
        margin-bottom: 5px;
    }

    .card .top-div {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .top-div img {
        width: 40px;
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
  </style>
@endsection

@section('extra_script')
@endsection

@slot('main')
  <div class="container">
      <div class="card">
          <div class="parent">
              <div class="top-div">
                  <img src="{{ asset('images/svg/GCW-48x48.svg') }}" />
                  <h3>{{ str_replace('_', ' ', config('app.name', 'Gold_Codes_Web')) }}</h3>
              </div>
          </div>

          <hr class="opacity-25">

          <div class="main active">
                <div class="content">
                    <h4>Sign Up</h4>
                    <p>{{ $pages[$current_page]['sub_heading'] }}</p>
                </div>

              @if ($current_page === 1)

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

              @elseif ($current_page === 'finish')
                <div class="content">
                    <h2>Congratulations! <span id="shown_name">User123</span></h2>
                    <p>You can start using the site or <a href="{{ url('/dashboard/#contribute') }}" target="_blank"
                            rel="noopener noreferrer">Contribute to Project G.C.W.</a> </p>
                </div>
                <div class="button launch"><button>{{ __('Go to the dashboard') }}</button></div>
              @endif
            </div>
            
      </div>
  </div>
@endslot
