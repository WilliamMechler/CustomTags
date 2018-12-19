// Create a new object based of the HTMLElement prototype
var Xheader = Object.create(HTMLElement.prototype);

// Set up the element.
Xheader.createdCallback = function() {
    // Create a Shadow Root
    var shadow = this.createShadowRoot();

    // Create a standard img element and set it's attributes.
   // var img = document.createElement('img');
   // img.alt = this.getAttribute('data-name');
   // img.src = this.getAttribute('data-img');
   // img.width = '150';
   // img.height = '150';
   // img.className = 'product-img';

    // Add the image to the Shadow Root.
   // shadow.appendChild(img);

    // Add an event listener to the image.
   // img.addEventListener('click', function(e) {
     //   window.location = this.getAttribute('data-url');
   // });
    
    // adding div for background
    
    var bg = document.createElement('div');
    var img = document.createElement('img');
    img.src = this.getAttribute('back');
    
    shadow.appendChild(img);
    shadow.appendChild(bg);
    
    // adding main text
    var m = document.createElement('h1');
    m.innerText = this.getAttribute('main');
    m.className = 'header-main';
    
    shadow.appendChild(m);
  
    //trying to add a break
    var br = document.createElement('hr');
    shadow.appendChild(br);
  
   // adding sub text
    var s = document.createElement('h3');
    s.innerText = this.getAttribute('sub');
    s.className = 'header-sub';
    
    shadow.appendChild(s);
  
    
    // Create a link to the product.
   // var link = document.createElement('a');
   // link.innerText = this.getAttribute('data-name');
   // link.href = this.getAttribute('data-url');
   // link.className = 'product-name';

    		// Add the link to the Shadow Root.
    //shadow.appendChild(link);
};

// Register the new element.
var Xheaeder = document.registerElement('x-header', {
    prototype: Xheader
});
