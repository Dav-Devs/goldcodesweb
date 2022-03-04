@section('logout_modal')

    {{-- <div class="modal modal-alert fade"  tabindex="-1"  aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-body ">

      </div>
      <div class="modal-footer flex-nowrap p-0">
        <button type="button" class="btn btn-lg btn-outline-danger fs-6 text-decoration-none col-6 m-0 rounded-0 border-right" 
              onclick="event.preventDefault();document.getElementById('logout-form').submit();">
            <strong>{{ __('Yes, logout') }}</strong>
        </button>
        <button type="button" class="btn btn-lg btn-outline-secondary fs-6 text-decoration-none col-6 m-0 rounded-0" data-bs-dismiss="modal">
           <strong>{{ __('No, cancel') }}</strong>
        </button>
      </div>
    </div>
  </div>
</div> --}}

    {{-- <div class="modal fade" id="logout_modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="logoutModal" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content rounded-4 shadow">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body p-4 text-center">
                    <h5 class="mb-0">{{ __('Log Out') }}</h5>
                    <p class="mb-0">{{ __('Are you sure you want to log out?') }}</p>
                </div>
                <div class="modal-footer flex-nowrap p-0">
                    <button type="button"
                        class="btn btn-lg btn-danger fs-6 text-decoration-none col-6 m-0 rounded-0 border-right"
                        onclick="event.preventDefault();document.getElementById('logout-form').submit();">
                        <strong>{{ __('Yes, logout') }}</strong>
                    </button>
                    <button type="button" class="btn btn-lg btn-secondary fs-6 text-decoration-none col-6 m-0 rounded-0"
                        data-bs-dismiss="modal">
                        <strong>{{ __('No, cancel') }}</strong>
                    </button>
                </div>
            </div>
        </div>
    </div> --}}

    

@endsection
