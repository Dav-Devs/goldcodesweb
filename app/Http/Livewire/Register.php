<?php

namespace App\Http\Livewire;

use App\Models\User;
use Livewire\Component;

class Register extends Component
{

    public $name;
    public $email;

    public $current_page = 1;

    public $pages = [
        1 => [
            'heading' => 'Main details first...',
        ],

        2 => [
            'heading' => 'Set your password next...',
        ],
    ];
 
    protected $rules = [
        'name' => 'required|min:4',
        'email' => 'required|email',
    ];

    public function next_page()
    {
        $this->current_page++;
    }

    public function prev_page()
    {
        $this->current_page--;
    }
 
    public function updated($propertyName)
    {
        $this->validateOnly($propertyName, $this->rules);
    }
 
    public function signup()
    {
        $validatedData = $this->validate();
 
        User::create($validatedData);
    }

    public function render()
    {
        return view('livewire.register');
    }
}
