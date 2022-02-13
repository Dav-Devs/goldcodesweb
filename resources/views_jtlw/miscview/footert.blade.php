<footer class="bg-gray-800 py-20 mt-20">
    <div class="sm:grid grid-cols-3 w-4/5 pb-10 m-auto border-b-2 border-gray-700">
        <div>
            <h3 class="text-l sm:font-bold text-gray-100">
                Pages
            </h3>

            <ul class="py-4 sm:text-s pt-4 text-gray-400">
                <li class="pb-1">
                    <a class="no-underline hover:underline" href="{{ url('/') }}">Home</a>
                </li>
                <li class="pb-1">
                    <a class="no-underline hover:underline" href="{{ url('/blog') }}">Blog</a>
                </li>
                <li class="pb-1">
                    <a class="no-underline hover:underline" href="{{ url('/login') }}">Log In</a>
                </li>
                <li class="pb-1">
                    <a class="no-underline hover:underline" href="{{ url('/register') }}">Sign Up</a>
                </li>
            </ul>
        </div>

        <div>
            <h3 class="text-l sm:font-bold text-gray-100">
                Find Us
            </h3>

            <ul class="py-4 sm:text-s pt-4 text-gray-400">
                <li class="pb-1">
                    <a class="no-underline hover:underline" href="{{ url('#') }}">What we do</a>
                </li>
                <li class="pb-1">
                    <a class="no-underline hover:underline" href="{{ url('#') }}">Address</a>
                </li>
                <li class="pb-1">
                    <a class="no-underline hover:underline" href="{{ url('#') }}">Phone no.</a>
                </li>
                <li class="pb-1">
                    <a class="no-underline hover:underline" href="{{ url('#') }}">Contact us</a>
                </li>
            </ul>
        </div>

        <div>
            <h3 class="text-l sm:font-bold text-gray-100">
                Latest Posts
            </h3>

            <ul class="py-4 sm:text-s pt-4 text-gray-400">
                <li class="pb-1">
                    <a class="no-underline hover:underline" href="{{ url('#') }}">Computer Technology</a>
                </li>
                <li class="pb-1">
                    <a class="no-underline hover:underline" href="{{ url('#') }}">PHP Programming</a>
                </li>
                <li class="pb-1">
                    <a class="no-underline hover:underline" href="{{ url('#') }}">Best code editors 2021</a>
                </li>
                <li class="pb-1">
                    <a class="no-underline hover:underline" href="{{ url('#') }}">New features in laravel 8</a>
                </li>
            </ul>
        </div>
    </div>
    <p class="w-25 w-4/5 pb-3 m-auto text-xs text-gray-100 pt-6">
        Copyright &copy; <i>{{ date('Y') }}</i>  <b>Dav-Devs</b>. All Rights Reserved <sup>&reg;</sup>
    </p>
</footer>