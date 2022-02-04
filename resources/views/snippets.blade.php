
                        <li class="dropdown" style="text-transform: none !important;">
                            <a class="dropdown-toggle" style="font-size: 15px !important; letter-spacing: 0.5px !important;"
                                href="javascript:void(0);" data-toggle="dropdown">
                                <img src="{{ Avatar::create(Auth::user()->email)->toBase64(); }}" width="26" height="26" 
                                    alt="{{ Auth::user()->name }}" title="{{ Auth::user()->name }}" />
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <a href="#" style="font-size: 13px !important; text-transform: uppercase;">{{ Auth::user()->name }}</a>
                                </li>
                                <li><a href="{{ url('/' . str_replace(' ', '-', Auth::user()->name)) }}"
                                        style="font-size: 13px !important;">
                                        {{ __('Profile') }}
                                    </a>
                                </li>
                                <li>
                                    <a href="{{ route('logout') }}" style="font-size: 13px !important;"
                                        onclick="event.preventDefault();document.getElementById('logout-form').submit();">
                                        {{ __('Log out') }}
                                    </a>
                                </li>
                                <form id="logout" action="{{ route('logout') }}" method="POST"
                                    class="hidden">
                                    {{ csrf_field() }}
                                </form>
                            </ul>
                        </li>