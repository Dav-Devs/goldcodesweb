{{-- @section('extra_script') 

<script>

    document.addEventListener('alpine:init', () => {
        Alpine.data('progress', () => ({

    $nextTick(() => { 

        var pbar = setInterval(() => {

            $('div.progress-bar').attr('aria-valuenow', progress);
            $('div.progress-bar').css({ width: progress '%' });
            $('div.progress-bar').text(progress + '%');
        }, 50);

        if (progress == 100) {

            clearInterval(pbar);
        }

    })

        }))
    })

    // $nextTick(() => { 

    //     var pbar = setInterval(() => {

    //         $('div.progress-bar').attr('aria-valuenow', progress);
    //         $('div.progress-bar').css({ width: progress '%' });
    //         $('div.progress-bar').text(progress + '%');
    //     }, 50);

    //     if (progress == 100) {

    //         clearInterval(pbar);
    //     }

    // });

</script>

@endsection --}}

<form wire:submit.prevent="save">

<div
    x-data="{ isUploading: false, progress: 0 }"
    x-on:livewire-upload-start="isUploading = true"
    x-on:livewire-upload-finish="isUploading = false"
    x-on:livewire-upload-error="isUploading = false"
    x-on:livewire-upload-progress="progress = $event.detail.progress"
    x-init="$nextTick(() => { 

{{--         if (isUploading == true) {

 
            var pbar = setInterval(() => { --}}

                $('div.progress-bar').attr('aria-valuenow', progress);
                $('div.progress-bar').css({ width: progress + '%' });
                $('div.progress-bar').text(progress + '%');
{{--             }, 50);

            if (progress == 100) {

                clearInterval(pbar);
            }

        } --}}
        
      })"
>

    @if ($photo)
        Photo Preview:
        <img src="{{ $photo->temporaryUrl() }}" class="rounded border-3 goldenrod img-thumbnail w-25 h-25 mb-3">
        <br />
    @endif
 
    <input class="form-control form-control-sm mb-3" id="upload-photo" type="file" wire:model="photo">

    <div class="progress" x-show="isUploading">
        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100" x-bind:value="progress"></div>
    </div>
 
    @error('photo') <span class="error">{{ $message }}</span> @enderror
 
    <button class="btn btn-sm" type="submit">Save Photo</button>

</div>


</form>
