import React from "react";

import "./Contact.css"

function Contact() {

  return (
    <>
      <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div class="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe width="100%" height="100%" title="map" class="absolute inset-0" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+Solent&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" />
      <div class="bg-gray-400 relative flex flex-wrap py-6 rounded shadow-md">
        <div class="lg:w-1/2 px-6">
          <h2 class="title-font font-semibold text-white tracking-widest text-xs">ADDRESS</h2>
          <p class="mt-1">Solent University</p>
        </div>
        <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 class="title-font font-semibold text-white tracking-widest text-xs">EMAIL</h2>
          <a class="text-gray-700 leading-relaxed">soarj03@solent.ac.uk</a>
          <h2 class="title-font font-semibold text-white tracking-widest text-xs mt-4">PHONE</h2>
          <p class="leading-relaxed">123-456-7890</p>
        </div>
      </div>
    </div>
    <div class="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 class="text-black text-lg mb-1 font-medium title-font">Contact</h2>
      <p class="leading-relaxed mb-5">Feek free to leave a message!</p>
      <div class="relative mb-4">
        <label for="name" class="leading-7 text-sm text-gray-400">Name</label>
        <input type="text" id="name" name="name" class="w-full bg-gray-400 rounded border border-gray-700 focus:border-gray-500 focus:ring-2 focus:ring-gray-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-400">Email</label>
        <input type="email" id="email" name="email" class="w-full bg-gray-400 rounded border border-gray-700 focus:border-gray-500 focus:ring-2 focus:ring-gray-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="message" class="leading-7 text-sm text-gray-400">Message</label>
        <textarea id="message" name="message" class="w-full bg-gray-400 rounded border border-gray-700 focus:border-gray-500 focus:ring-2 focus:ring-gray-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button class="text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg">Send</button>
      <p class="text-xs text-gray-400 text-opacity-90 mt-3">All contacts requests will be answered in 48h</p>
    </div>
  </div>
    </>
  )
}

export default Contact;
