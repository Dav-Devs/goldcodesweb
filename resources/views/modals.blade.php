@section('logout_modal')

<div class="modal modal-alert position-static d-block bg-secondary py-5" tabindex="-1" role="dialog" id="modalChoice">
  <div class="modal-dialog" role="document">
    <div class="modal-content rounded-4 shadow">
      <div class="modal-body p-4 text-center">
        <h5 class="mb-0">{{ __('Log Out') }}</h5>
        <p class="mb-0">{{ __('Are you sure you want to log out?') }}</p>
      </div>
      <div class="modal-footer flex-nowrap p-0">
        <button type="button" class="btn btn-lg btn-link fs-6 text-decoration-none col-6 m-0 rounded-0 border-right"
        onclick="event.preventDefault();document.getElementById('logout-form').submit();">
            <strong>{{ __('Yes, logout') }}</strong>
        </button>
        <button type="button" class="btn btn-lg btn-link fs-6 text-decoration-none col-6 m-0 rounded-0" data-bs-dismiss="modal">
            {{ __('No, cancel') }}
        </button>
      </div>
    </div>
  </div>
</div>

@endsection