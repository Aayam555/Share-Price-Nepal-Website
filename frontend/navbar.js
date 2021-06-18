const navBarContainer = document.getElementById("navBar");

if (document.title == "Share Price Nepal"){
  navBarContainer.innerHTML = `<header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                                  <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                                  <img height="50" width="50" src="/favicon.png" alt="logo" class="mx-2">
                                  <span class="fs-4" id="logo">Share Price Nepal</span>
                                  </a>

                                  <ul class="nav nav-pills">
                                    <li class="nav-item"><a href="/index.html" class="nav-link active" aria-current="page">Home</a></li>
                                    <li class="nav-item"><a href="/pages/todaySharePrice/todaySharePrice.html" class="nav-link">Today's Share Price</a></li>
                                    <li class="nav-item"><a href="/pages/liveSharePrice/liveSharePrice.html" class="nav-link">Live Share Price</a></li>
                                  </ul>
                                </header>`;
} else if (document.title == "Today's Share Price"){
  navBarContainer.innerHTML = `<header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                                  <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                                  <img height="50" width="50" src="/favicon.png" alt="logo" class="mx-2">
                                  <span class="fs-4" id="logo">Share Price Nepal</span>
                                  </a>

                                  <ul class="nav nav-pills">
                                    <li class="nav-item"><a href="/index.html" class="nav-link" aria-current="page">Home</a></li>
                                    <li class="nav-item"><a href="/pages/todaySharePrice/todaySharePrice.html" class="nav-link active">Today's Share Price</a></li>
                                    <li class="nav-item"><a href="/pages/liveSharePrice/liveSharePrice.html" class="nav-link">Live Share Price</a></li>
                                  </ul>
                                </header>`;
} else if (document.title == "Live Share Price"){
  navBarContainer.innerHTML = `<header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                                  <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                                  <img height="50" width="50" src="/favicon.png" alt="logo" class="mx-2">
                                  <span class="fs-4" id="logo">Share Price Nepal</span>
                                  </a>

                                  <ul class="nav nav-pills">
                                    <li class="nav-item"><a href="/index.html" class="nav-link" aria-current="page">Home</a></li>
                                    <li class="nav-item"><a href="/pages/todaySharePrice/todaySharePrice.html" class="nav-link">Today's Share Price</a></li>
                                    <li class="nav-item"><a href="/pages/liveSharePrice/liveSharePrice.html" class="nav-link active">Live Share Price</a></li>
                                  </ul>
                                </header>`;
}
