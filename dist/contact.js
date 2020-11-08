

function NavBar() {
    return React.createElement(
        "nav",
        null,
        React.createElement(
            "div",
            { className: "companyname" },
            React.createElement(
                "h4",
                null,
                "Aha Media"
            )
        ),
        React.createElement(
            "ul",
            { className: "nav-links" },
            React.createElement(
                "li",
                null,
                React.createElement(
                    "a",
                    { className: "firstnav", target: "_blank", href: "/index.html" },
                    React.createElement("i", { className: "fas fa-home" }),
                    "Home"
                )
            ),
            React.createElement(
                "li",
                null,
                React.createElement(
                    "a",
                    { className: "firstnav", target: "_blank", href: "/html/about.html" },
                    React.createElement("i", { className: "fas fa-user" }),
                    "Profile"
                )
            ),
            React.createElement(
                "li",
                null,
                React.createElement(
                    "a",
                    { className: "firstnav", target: "_blank", href: "#" },
                    React.createElement("i", { className: "fas fa-clone" }),
                    "Services"
                ),
                " "
            ),
            React.createElement(
                "li",
                null,
                React.createElement(
                    "a",
                    { className: "firstnav", target: "_blank", href: "#" },
                    React.createElement("i", { className: "fas fa-tag" }),
                    "Pricing"
                )
            ),
            React.createElement(
                "li",
                null,
                React.createElement(
                    "a",
                    { className: "firstnav", target: "_blank", href: "/html/contact.html" },
                    React.createElement("i", { className: "fas fa-phone" }),
                    "Contact"
                )
            )
        ),
        React.createElement(
            "div",
            { className: "burger" },
            React.createElement("div", { className: "line1" }),
            React.createElement("div", { className: "line2" }),
            React.createElement("div", { className: "line3" })
        )
    );
}

function Form() {
    return React.createElement(
        "div",
        { id: "maininner" },
        React.createElement(
            "div",
            { className: "text" },
            React.createElement(
                "h2",
                { id: "touch" },
                "Let's get in touch"
            ),
            React.createElement(
                "form",
                null,
                React.createElement("input", { type: "text", placeholder: "Name", required: true }),
                React.createElement("input", { type: "email", id: "email", name: "email", placeholder: "Email Address", required: true, pattern: "^([a-zA-Z0-9_\\.]+)@([a-zA-Z0-9_\\.]+)\\.([A-Za-z]{3})$" }),
                React.createElement("input", { type: "website", placeholder: "Website(Optional)" }),
                React.createElement("textarea", { placeholder: "Message", id: "message" }),
                React.createElement(
                    "button",
                    { type: "submit", id: "button" },
                    "Send ",
                    React.createElement("i", { className: "far fa-arrow-alt-circle-right" })
                )
            )
        ),
        React.createElement(
            "div",
            { className: "picture" },
            React.createElement("img", { src: "/images/contact2.jpg" })
        )
    );
}
function Article() {
    return React.createElement(
        "div",
        { id: "contact" },
        React.createElement(
            "div",
            { className: "cont" },
            React.createElement("i", { className: "fas fa-map-marker-alt" }),
            React.createElement(
                "p",
                { className: "contact" },
                "Location"
            )
        ),
        React.createElement(
            "div",
            { className: "cont" },
            React.createElement("i", { className: "fas fa-phone-alt" }),
            React.createElement(
                "p",
                { className: "contact" },
                "Number"
            )
        ),
        React.createElement(
            "div",
            { className: "cont" },
            React.createElement("i", { className: "far fa-envelope" }),
            React.createElement(
                "p",
                { className: "contact" },
                "Email Address"
            )
        )
    );
}
function SocialMedia() {
    return React.createElement(
        "div",
        { id: "socialmedia" },
        React.createElement(
            "a",
            null,
            React.createElement("i", { className: "fab fa-facebook-f" })
        ),
        React.createElement(
            "a",
            null,
            React.createElement("i", { className: "fab fa-twitter" })
        ),
        React.createElement(
            "a",
            null,
            React.createElement("i", { className: "fab fa-instagram" })
        ),
        React.createElement(
            "a",
            null,
            React.createElement("i", { className: "fab fa-linkedin-in" })
        )
    );
}
ReactDOM.render(React.createElement(NavBar, null), document.getElementById("header"));
ReactDOM.render(React.createElement(Form, null), document.getElementById("main"));
ReactDOM.render(React.createElement(Article, null), document.getElementById("article"));
ReactDOM.render(React.createElement(SocialMedia, null), document.getElementById("article2"));

var NavSlide = function NavSlide() {

    var burger = document.querySelector(".burger");
    var nav = document.querySelector(".nav-links");
    var navlinks = document.querySelectorAll(".nav-links li");

    burger.addEventListener("click", function () {
        nav.classList.toggle("nav-active");

        navlinks.forEach(function (link, index) {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = "navLinkFade 0.5s ease forwards " + index / 7 + "s";
            }
        });

        burger.classList.toggle("newclass");
    });
};
NavSlide();