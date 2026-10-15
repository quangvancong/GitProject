
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");
    const backToTop = document.getElementById("backToTop");
    const navbar = document.getElementById("mainNavbar");

    // Form tư vấn minh họa, không gửi dữ liệu lên máy chủ
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            if (!contactForm.checkValidity()) {
                contactForm.reportValidity();
                return;
            }

            formMessage.textContent =
                "Thông tin hợp lệ! Đây là bản demo nên dữ liệu chưa được gửi đi.";
            formMessage.className = "form-message success";
        });

        contactForm.addEventListener("input", function () {
            formMessage.textContent = "";
            formMessage.className = "form-message";
        });
    }

    // Hiện nút về đầu trang khi cuộn xuống
    function updateBackToTop() {
        if (window.scrollY > 350) {
            backToTop.classList.add("visible");
        } else {
            backToTop.classList.remove("visible");
        }
    }

    window.addEventListener("scroll", updateBackToTop);
    updateBackToTop();

    // Đóng menu Bootstrap sau khi chọn liên kết trên điện thoại
    document.querySelectorAll("#mainNavbar .nav-link, #mainNavbar .btn")
        .forEach(function (link) {
            link.addEventListener("click", function () {
                if (
                    window.innerWidth < 992 &&
                    navbar.classList.contains("show")
                ) {
                    if (window.jQuery) {
                        window.jQuery(navbar).collapse("hide");
                    }
                }
            });
        });
});
