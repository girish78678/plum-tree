function openNav() {
    document.getElementById("mySidepanel").style.right = "0";
}

function closeNav() {
    document.getElementById("mySidepanel").style.right = "-250px";
}

window.onload = function() {
    var slideIndex = 0;
    showSlides();

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("slide");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 4000); // Change image every 2 seconds
    }

    document.getElementById("prevBtn").addEventListener("click", function() {
        slideIndex--;
        if (slideIndex < 0) {
            slideIndex = slides.length - 1;
        }
        showSlides();
    });

    document.getElementById("nextBtn").addEventListener("click", function() {
        slideIndex++;
        if (slideIndex > slides.length - 1) {
            slideIndex = 0;
        }
        showSlides();
    });
}