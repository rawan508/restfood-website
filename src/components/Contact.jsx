import React from 'react'

export default function Contact() {
    return (
        <div className="contacts">
            <h2>CONTACTS</h2>
            <div className="contact">
                <div className="loc">
                    <h4><i class="fa-solid fa-location-dot"></i> Location</h4>
                    
                    <p>Cairo, Egypt</p>
                </div>
                <div className="loc">
                    <h4><i class="fa-solid fa-phone-flip"></i> Phone</h4>
                    
                    <p>0100 399 4008</p>
                </div>
                <div className="loc">
                    <h4><i class="fa-solid fa-envelope"></i>  Email</h4>
                    
                    <p>info@gmail.com</p>
                </div>
                <div className="ico">
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-youtube"></i>
                </div>
            </div>
        </div>
    )
}
