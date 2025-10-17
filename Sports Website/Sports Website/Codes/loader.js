document.addEventListener("DOMContentLoaded", function() {
    const loader = document.getElementById("loader");

    // Function to show the loader
    function showLoader() {
        loader.classList.add("active");
    }

    // Function to hide the loader
    function hideLoader() {
        loader.classList.remove("active");
    }

    // Show loader before the page unloads
    window.addEventListener("beforeunload", function() {
        showLoader();
    });

    // Hide loader after the page fully loads
    window.addEventListener("load", function() {
        setTimeout(hideLoader, 1000);
    });



    // Handling anchor link clicks
    const anchors = document.querySelectorAll("a");
    anchors.forEach(function(anchor) {
        anchor.addEventListener("click", function(event) {
            const href = anchor.getAttribute("href");

            // Prevent default behavior if the link is not a hash link
            if (href && !href.startsWith("#")) {
                event.preventDefault();
                showLoader();

                setTimeout(function() {
                    window.location.href = href;
                }, 500);
            }
        });
    });
});
