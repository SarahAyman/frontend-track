var turn = 0;

function change_icon(clicked_id) {
    if (turn == 0) {
        document.getElementById(clicked_id).src = "x.png";
        document.getElementById(clicked_id).disabled = true;
        document.getElementById(clicked_id).alt = 'x';
		turn = 1;
	}
    else {
		document.getElementById(clicked_id).src = "o.png";;
		document.getElementById(clicked_id).disabled = true;
        document.getElementById(clicked_id).alt = 'o';
		turn = 0;
	}
}

function check() {
    var b1, b2, b3, b4, b5, b6, b7, b8, b9;
	b1 = document.getElementById("b1").alt;
	b2 = document.getElementById("b2").alt;
	b3 = document.getElementById("b3").alt;
	b4 = document.getElementById("b4").alt;
    b5 = document.getElementById("b5").alt;
	b6 = document.getElementById("b6").alt;
	b7 = document.getElementById("b7").alt;
	b8 = document.getElementById("b8").alt;
	b9 = document.getElementById("b9").alt;

    if ((b1 == 'x' && b2 == 'x' && b3 == 'x') || 
    (b4 == 'x' && b5 == 'x' && b6 == 'x') || (b7 == 'x' && b8 == 'x' && b9 == 'x') ||
    (b1 == 'x' && b4 == 'x' && b7 == 'x') || (b2 == 'x' && b5 == 'x' && b8 == 'x') ||
    (b3 == 'x' && b6 == 'x' && b9 == 'x') || (b1 == 'x' && b5 == 'x' && b9 == 'x') ||
    (b3 == 'x' && b5 == 'x' && b7 == 'x')) {

        for(var i = 1; i <= 9; i++) {
            document.getElementById('b'+i).disabled = true;
        }

        document.getElementById('Xwon').style.display = "block";
	}

    if ((b1 == 'o' && b2 == 'o' && b3 == 'o') || 
    (b4 == 'o' && b5 == 'o' && b6 == 'o') || (b7 == 'o' && b8 == 'o' && b9 == 'o') ||
    (b1 == 'o' && b4 == 'o' && b7 == 'o') || (b2 == 'o' && b5 == 'o' && b8 == 'o') ||
    (b3 == 'o' && b6 == 'o' && b9 == 'o') || (b1 == 'o' && b5 == 'o' && b9 == 'o') ||
    (b3 == 'o' && b5 == 'o' && b7 == 'o')) {

        for(var i = 1; i <= 9; i++) {
            document.getElementById('b'+i).disabled = true;
        }

        document.getElementById('Owon').style.display = "block";
    }
}
