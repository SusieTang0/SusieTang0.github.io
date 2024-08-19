/*!
=========================================================
* Steller Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
	$(".nav-link").on('click', function(event) {

    	if (this.hash !== "") {

			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, function(){
				window.location.hash = hash;
			});
      	} 
    });
});

document.getElementById('downloadBtn').addEventListener('click', function() {
  const link = document.createElement('a');
  link.href = 'https://raw.githubusercontent.com/SusieTang0/JobTracking/main/My%20Resume.pdf'; 
  link.download = 'Resume_ShutingTang.pdf'; 
  link.click();
});
document.getElementById('downloadBtnNav').addEventListener('click', function() {
  const link = document.createElement('a');
  link.href = 'https://raw.githubusercontent.com/SusieTang0/JobTracking/main/My%20Resume.pdf'; 
  link.download = 'Resume_ShutingTang.pdf'; 
  link.click();
});

