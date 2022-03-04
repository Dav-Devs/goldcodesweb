<?php

namespace App\Http\Livewire;

use Livewire\Component;
use Livewire\WithFileUploads;

class FileUpload extends Component
{

    use WithFileUploads;
 
    public $photo;
 
    public function updatedPhoto()
    {
        $this->validate([
            'photo' => 'image|max:816200',
        ]);
    }
 
    public function save()
    {
        // ...
    }

    public function render()
    {
        return view('livewire.file-upload');
    }
}
