

document.querySelector('body').addEventListener('mouseover', (event) => {
    event.target.onmousedown = function(e) {
        let coords = getCoords(event.target);
        let shiftX = e.pageX - coords.left;
        let shiftY = e.pageY - coords.top;
        
        document.body.appendChild(event.target);
        moveAt(e);
        
        event.target.style.zIndex = 1000; 
        
        function moveAt(e) {
            event.target.style.left = e.pageX - shiftX + 'px';
            event.target.style.top = e.pageY - shiftY + 'px';
        }
        
        document.onmousemove = function(e) {
            moveAt(e);
        };
        
        event.target.onmouseup = function() {
            document.onmousemove = null;
            event.target.onmouseup = null;
            event.target.style.border = '2px dashed #000000'
        };
        
    }
    
    event.target.ondragstart = function() {
        return false;
    };
    
    function getCoords(elem) {  
        event.target.style.border = 'none'   
        let box = elem.getBoundingClientRect();
        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        };
    }
})


