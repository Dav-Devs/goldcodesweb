<meta name="robots" content="index, follow" />
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="goldenrod">
<meta name="author" content="David Gold">

<meta property="og:url" content="{{ url('/') }}">
<meta property="og:locale" content="en_US" />
<meta property="og:type" content="website, blog, cms" />
<meta property="og:site_name" content="GoldCodesWeb BETA">
<meta property="og:title" content="Spread positive knowledge wider">
<meta property="og:description" content="Spread positive knowledge, resources... and more; in any positive way">
<meta property="og:image" content="{{ asset('favicons/svg/GCW-48x48.svg') }}">
<meta property="og:image:type" content="image/png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="1200">
<meta property="og:image" content="{{ asset('favicons/svg/GCW-48x48.svg') }}">
<meta property="og:image:type" content="image/png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="620">
<meta property="og:image" content="{{ asset('favicons/svg/GCW-48x48.svg') }}">
<meta property="og:image:type" content="image/png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="620">

<meta property="twitter:site" content="{{ url('/') }}">
{{-- <meta property="twitter:site:id" content="13334762"> --}}
<meta property="twitter:creator" content="GoldCodesWeb">
{{-- <meta property="twitter:creator:id" content="13334762"> --}}
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:title" content="GoldCodesWeb BETA">
<meta property="twitter:description"
    content="Spread positive knowledge, resources... and more; in any positive way">
<meta property="twitter:image:src" content="{{ asset('favicons/svg/GCW-48x48.svg') }}">
<meta property="twitter:image:width" content="1200">
<meta property="twitter:image:height" content="1200">

<!-- Web Application Manifest -->
<link rel="manifest" href="{{ route('laravelpwa.manifest') }}">
<!-- Chrome for Android theme color -->
<meta name="theme-color" content="{{ $config['theme_color'] }}">

<!-- Add to homescreen for Chrome on Android -->
<meta name="mobile-web-app-capable" content="{{ $config['display'] == 'standalone' ? 'yes' : 'no' }}">
<meta name="application-name" content="{{ $config['short_name'] }}">
<link rel="icon" sizes="{{ data_get(end($config['icons']), 'sizes') }}" href="{{ data_get(end($config['icons']), 'src') }}">

<!-- Add to homescreen for Safari on iOS -->
<meta name="apple-mobile-web-app-capable" content="{{ $config['display'] == 'standalone' ? 'yes' : 'no' }}">
<meta name="apple-mobile-web-app-status-bar-style" content="{{  $config['status_bar'] }}">
<meta name="apple-mobile-web-app-title" content="{{ $config['short_name'] }}">
<link rel="apple-touch-icon" href="{{ data_get(end($config['icons']), 'src') }}">

<link rel="apple-touch-icon" sizes="57x57" href="{{ url('/favicons/svg/apple-icon-57x57.svg') }}">
<link rel="apple-touch-icon" sizes="60x60" href="{{ url('/favicons/svg/apple-icon-60x60.svg') }}">
<link rel="apple-touch-icon" sizes="72x72" href="{{ url('/favicons/svg/apple-icon-72x72.svg') }}">
<link rel="apple-touch-icon" sizes="76x76" href="{{ url('/favicons/svg/apple-icon-76x76.svg') }}">
<link rel="apple-touch-icon" sizes="114x114" href="{{ url('/favicons/svg/apple-icon-114x114.svg') }}">
<link rel="apple-touch-icon" sizes="120x120" href="{{ url('/favicons/svg/apple-icon-120x120.svg') }}">
<link rel="apple-touch-icon" sizes="144x144" href="{{ url('/favicons/svg/apple-icon-144x144.svg') }}">
<link rel="apple-touch-icon" sizes="152x152" href="{{ url('/favicons/svg/apple-icon-152x152.svg') }}">
<link rel="apple-touch-icon" sizes="180x180" href="{{ url('/favicons/svg/apple-icon-180x180.svg') }}">

<link rel="icon" type="image/png" sizes="192x192" href="{{ url('/favicons/android-icon-192x192.png') }}">
<link rel="icon" type="image/png" sizes="32x32" href="{{ url('/favicons/favicon-32x32.png') }}">
<link rel="icon" type="image/png" sizes="96x96" href="{{ url('/favicons/favicon-96x96.png') }}">
<link rel="icon" type="image/png" sizes="16x16" href="{{ url('/favicons/favicon-16x16.png') }}">


<link href="{{ $config['splash']['640x1136'] }}" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
<link href="{{ $config['splash']['750x1334'] }}" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
<link href="{{ $config['splash']['1242x2208'] }}" media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)" rel="apple-touch-startup-image" />
<link href="{{ $config['splash']['1125x2436'] }}" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)" rel="apple-touch-startup-image" />
<link href="{{ $config['splash']['828x1792'] }}" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
<link href="{{ $config['splash']['1242x2688'] }}" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)" rel="apple-touch-startup-image" />
<link href="{{ $config['splash']['1536x2048'] }}" media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
<link href="{{ $config['splash']['1668x2224'] }}" media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
<link href="{{ $config['splash']['1668x2388'] }}" media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
<link href="{{ $config['splash']['2048x2732'] }}" media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />

<!-- Tile for Win8 -->
<meta name="msapplication-TileColor" content="{{ $config['background_color'] }}">
<meta name="msapplication-TileImage" content="{{ data_get(end($config['icons']), 'src') }}">

<script type="text/javascript">
    // Initialize the service worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('{{ url('/serviceworker.js') }}', {
            scope: '.'
        }).then(function (registration) {
            // Registration was successful
            console.log('G.C.W.: ServiceWorker registration successful with scope: ', registration.scope);
        }, function (err) {
            // registration failed :(
            console.error('G.C.W.: ServiceWorker registration failed: ', err);
        });
    }
</script>