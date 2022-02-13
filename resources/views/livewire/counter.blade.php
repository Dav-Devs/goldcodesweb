{{-- 

<div>
    <p>Standard Livewire Counter Component</p>
    <button wire:click="increment">+</button>
    <h1>{{ $count }}</h1>
</div> 

--}}

<div>
    <p> Livewire + Alpine Counter Component</p>
    <div x-data>
 
        <button class="btn" x-on:click="$wire.increment()">+</button>
        <h1 x-text="$wire.count"></h1>
    </div>
</div>