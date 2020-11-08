


function NavBar(){
    return(
        <nav>
            <div className ="companyname">
                <h4>Aha Media</h4>
            </div>
            <ul className ="nav-links">
                <li><a className ="firstnav"  target = "_blank" href = "/index.html"><i className  = "fas fa-home"></i>Home</a></li>
                <li><a className ="firstnav" target = "_blank"  href = "/html/about.html"><i className  = "fas fa-user"></i>Profile</a></li>
                <li><a className ="firstnav"  target = "_blank" href = "#"><i className  = "fas fa-clone"></i>Services</a> </li>
                <li><a className ="firstnav" target = "_blank"  href = "#"><i className  = "fas fa-tag"></i>Pricing</a></li>
                <li><a className ="firstnav" target = "_blank"  href = "/html/contact.html"><i className  = "fas fa-phone"></i>Contact</a></li>
            
            </ul>
            <div className  = "burger">
                <div className ="line1"></div>
                <div className ="line2"></div>
                <div className ="line3"></div>
            </div>
        </nav>
    )
}

function Form(){
    return(
        <div id = "maininner">
            <div className = "text">
                <h2  id = "touch">Let's get in touch</h2>
                <form>
                    <input type = "text" placeholder="Name" required/>
                    <input type="email" id="email" name="email" placeholder= "Email Address" required pattern = "^([a-zA-Z0-9_\.]+)@([a-zA-Z0-9_\.]+)\.([A-Za-z]{3})$" />
                    <input type = "website" placeholder="Website(Optional)"/>
                    <textarea placeholder = "Message" id = "message" />
                    <button type="submit" id = "button">Send <i className = "far fa-arrow-alt-circle-right"></i></button>
                </form>
            </div>
            <div className = "picture">
                <img src = "/images/contact2.jpg" />
            </div>
        </div>
    )
}
function Article(){
    return(
        <div id = "contact" >
            <div className = "cont" ><i className = "fas fa-map-marker-alt"></i><p className = "contact" >Location</p></div>
            <div className = "cont" ><i className = "fas fa-phone-alt"></i><p className = "contact" >Number</p></div>
            <div className = "cont" ><i className = "far fa-envelope"></i><p className = "contact" >Email Address</p></div>
        </div>
    )
}
function SocialMedia(){
    return(
        <div id = "socialmedia">
            <a><i className = "fab fa-facebook-f"></i></a>
            <a><i className = "fab fa-twitter"></i></a>
            <a><i className = "fab fa-instagram"></i></a>
           <a><i className = "fab fa-linkedin-in"></i></a> 
        </div>
    )
}
ReactDOM.render(<NavBar/>, document.getElementById("header"));
ReactDOM.render(<Form/>, document.getElementById("main"));
ReactDOM.render(<Article/>, document.getElementById("article"));
ReactDOM.render(<SocialMedia/>, document.getElementById("article2"));



   
const NavSlide = () => {
    
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navlinks = document.querySelectorAll(".nav-links li");

    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
        
        navlinks.forEach((link,index) => {
            if(link.style.animation){
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7}s`
            }
        })


        burger.classList.toggle("newclass");
    });

    
}
NavSlide();