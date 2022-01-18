        <div class="container">
            <div class="navbar-header">
                <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#custom-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a href="{{ url('/') }}">
                    <img src="/assets/img/logos/ddlogo.png" alt="Gold Codes Web" />
                    {{ str_replace('_', ' ', config('app.name', 'Gold_Codes_Web')) }}
                </a>
            </div>
            <div class="collapse navbar-collapse" id="custom-collapse">
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#">Home</a>
                    <li><a href="#">Pages</a>
                    </li>
                </ul>
            </div>
        </div>
