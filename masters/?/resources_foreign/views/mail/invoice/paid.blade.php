@component('mail::message')
# Introduction

Welcome Mr. {{ $user->name }},
Your Invoice has been delivered successfully
<br>
{{ $body }}

@component('mail::button', ['url' => $url,'color' => 'green'])
Click here to Show Details
@endcomponent

@component('mail::panel')
This is the panel content.
@endcomponent

@component('mail::table')
| Laravel       | Table         | Example  |
| ------------- |:-------------:| --------:|
| Col 2 is      | Centered      | $10      |
| Col 3 is      | Right-Aligned | $20      |
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
