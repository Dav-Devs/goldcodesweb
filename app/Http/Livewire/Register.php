<?php

namespace App\Http\Livewire;

use Livewire\Component;

class Register extends Component
{

    public $name;
    public $email;
 
    protected $rules = [
        'name' => 'required|min:4',
        'email' => 'required|email',
    ];
 
    public function updated($propertyName)
    {
        $this->validateOnly($propertyName);
    }
 
    public function signup()
    {
        $validatedData = $this->validate();
 
        Contact::create($validatedData);
    }

    public function render()
    {
        return view('livewire.register');
    }
}
