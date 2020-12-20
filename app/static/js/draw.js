var nums = [];
var mySound;
mySound = new sound("/static/sounds/trumpet.mp3");

function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
  this.restart = function(){
    this.sound.currentTime = 0;
  }
}

var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  mySound.stop();
  mySound.restart();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


function drawNext() {
    var tot = $('#numguests').val();

    if ($('#gavin')[0].checked) {
        if ($('#guest' + (nums.length + 1)).val().toLowerCase() == "gavin") {
            next = tot;
        }
        else {
            var next = Math.floor(Math.random() * (tot-1)) + 1;
            while (nums.includes(next)) {
                next = Math.floor(Math.random() * (tot-1)) + 1;
            }
        }
    }
    else {
        var next = Math.floor(Math.random() * tot) + 1;
        while (nums.includes(next)) {
            next = Math.floor(Math.random() * tot) + 1;
        }
    }

    nums.push(next);

    if (next == tot) {
        // congratulations
        modal.style.display = "block";
        mySound.play();
    }

    $('#players-table td:last').html(next)

    // add a new row
    if (nums.length < tot) {
        $('#players-table tr:last').after(
            `<tr>
                <td>
                    <input type="text" id="guest${nums.length + 1}", placeholder="Jane Doe">
                </td>
                <td>
                    <button onclick="drawNext()">Draw</button>
                </td>
            </tr>`);
    }
}

function deleteRow() {
    if (nums.length > 0) {
        if (nums.length < $('#numguests').val()) {
            $('#players-table tr:last').remove()
        }
        $('#players-table tr:last').remove()
        nums.pop();
        console.log(nums.length)

        $('#players-table tr:last').after(
            `<tr>
                <td>
                    <input type="text" id="guest${nums.length + 1}", placeholder="Jane Doe">
                </td>
                <td>
                    <button onclick="drawNext()">Draw</button>
                </td>
            </tr>`);
    }
}

function clearAll() {
    while ($('#players-table tr').length > 1) {
        $('#players-table tr:last').remove()
        nums.pop()
    }
    $('#players-table tr:last').after(
            `<tr>
                <td>
                    <input type="text" id="guest${nums.length + 1}", placeholder="Jane Doe">
                </td>
                <td>
                    <button onclick="drawNext()">Draw</button>
                </td>
            </tr>`);

}

