// Paginación
var btns = document.querySelectorAll('.btn');
var paginationWrapper = document.querySelector('.pagination-wrapper');
var bigDotContainer = document.querySelector('.big-dot-container');
var littleDot = document.querySelector('.little-dot');

for(var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', btnClick);
}

function btnClick() {
  if(this.classList.contains('btn--prev')) {
    paginationWrapper.classList.add('transition-prev');
  } else {
    paginationWrapper.classList.add('transition-next');  
  }
  
  var timeout = setTimeout(cleanClasses, 500);
}

function cleanClasses() {
  if(paginationWrapper.classList.contains('transition-next')) {
    paginationWrapper.classList.remove('transition-next')
  } else if(paginationWrapper.classList.contains('transition-prev')) {
    paginationWrapper.classList.remove('transition-prev')
  }
}

// Acordeón
$(function() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        var links = this.el.find('.link');
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
        var $this = $(this),
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
        }
    }    

    var accordion = new Accordion($('#accordion'), false);
});

// Venetian Blinds
var options = {
    imgSrc1: "https://example.com/image1.jpg",
    imgSrc2: "https://example.com/image2.jpg",
    containerName: "placeholder",
    columns: 16,
    margin: 3
}

function VenetianBlinds(defaults) {
    // ... (El resto del código de Venetian Blinds que proporcionaste)
}

VenetianBlinds(options);

// Checkbox functionality
document.querySelectorAll('.checkbox-input').forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            this.parentElement.querySelector('.checkbox-tile').classList.add('checked');
        } else {
            this.parentElement.querySelector('.checkbox-tile').classList.remove('checked');
        }
    });
});

// Aquí puedes agregar más funcionalidades según sea necesario
