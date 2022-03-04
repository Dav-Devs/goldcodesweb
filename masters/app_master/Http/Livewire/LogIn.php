<?php

namespace App\Http\Livewire;

use Livewire\Component;

class LogIn extends Component
{

    public $name;
    public $email;
 
    protected $rules = [
        'name' => 'required|min:6',
        'email' => 'required|email',
    ];

    protected $messages = [
        'email.required' => 'This field cannot be empty!',
        'email.email' => 'This email is not valid!',
    ];
 
    public function updated($propertyName)
    {
        $this->validateOnly($propertyName);
    }
 
    public function saveContact()
    {
        $validatedData = $this->validate();
 
        Contact::create($validatedData);
    }

    public function render()
    {
        return view('livewire.log-in');
    }
}
