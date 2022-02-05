<footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div class="col-md-4 d-flex align-items-center">
      <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        <img src="@yield('logo_data_uri')" width="30" height="24" alt="G C W" />
      </a>
      <span class="text-muted">
         &nbsp; &copy; <i>{{ date("Y") }}</i> &nbsp;<b><a href="//github.com/Dav-Devs">Gold Codes Web</a></b>
      </span>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li class="ms-3">
          <a class="text-muted" href="//twitter.com/src_open">
            <svg class="bi" width="24" height="24">
                <use xlink:href="#twitter"></use>
            </svg>
        </a>
    </li>
      <li class="ms-3">
          <a class="text-muted" href="//github.com/Dav-Devs">
            <svg class="bi" width="24" height="24">
                <use xlink:href="#github"></use>
            </svg>
        </a>
    </li>
    </ul>
  </footer>
