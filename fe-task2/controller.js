var turn = 0;

function change_icon(clicked_id) {
    if (turn == 0) {
        document.getElementById(clicked_id).src = "images/x.png";
        document.getElementById(clicked_id).name = 'x';
        document.getElementById(clicked_id).disabled = true;
		turn = 1;
	}
    else {
		document.getElementById(clicked_id).src = "images/o.png";
        document.getElementById(clicked_id).name = 'o';
		document.getElementById(clicked_id).disabled = true;
		turn = 0;
	}
}

function check() {
    var b1, b2, b3, b4, b5, b6, b7, b8, b9;
	b1 = document.getElementById("b1").name;
	b2 = document.getElementById("b2").name;
	b3 = document.getElementById("b3").name;
	b4 = document.getElementById("b4").name;
    b5 = document.getElementById("b5").name;
	b6 = document.getElementById("b6").name;
	b7 = document.getElementById("b7").name;
	b8 = document.getElementById("b8").name;
	b9 = document.getElementById("b9").name;

    if ((b1 == 'x' && b2 == 'x' && b3 == 'x') || 
    (b4 == 'x' && b5 == 'x' && b6 == 'x') || (b7 == 'x' && b8 == 'x' && b9 == 'x') ||
    (b1 == 'x' && b4 == 'x' && b7 == 'x') || (b2 == 'x' && b5 == 'x' && b8 == 'x') ||
    (b3 == 'x' && b6 == 'x' && b9 == 'x') || (b1 == 'x' && b5 == 'x' && b9 == 'x') ||
    (b3 == 'x' && b5 == 'x' && b7 == 'x')) {

        for(var i = 1; i <= 9; i++) {
            document.getElementById('b'+i).disabled = true;
        }

        document.getElementById('Xwon').style.display = "block";

        setTimeout(() => {
            location.reload();
        }, 4000);
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
        
        setTimeout(() => {
            location.reload();
        }, 4000);
    }
}
