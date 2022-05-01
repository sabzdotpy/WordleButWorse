import "./Keyboard.scss"

function Keyboard( { clickEventHandle } ) {
	return (
		<div className="keyboard_container">
			<div className="keyboard_row row1">
				<div className="keyboard_key keyq" onClick={() => clickEventHandle({ key: "q" } )}>Q</div>
				<div className="keyboard_key keyw" onClick={() => clickEventHandle({ key: "w" } )}>W</div>
				<div className="keyboard_key keye" onClick={() => clickEventHandle({ key: "e" } )}>E</div>
				<div className="keyboard_key keyr" onClick={() => clickEventHandle({ key: "r" } )}>R</div>
				<div className="keyboard_key keyt" onClick={() => clickEventHandle({ key: "t" } )}>T</div>
				<div className="keyboard_key keyy" onClick={() => clickEventHandle({ key: "y" } )}>Y</div>
				<div className="keyboard_key keyu" onClick={() => clickEventHandle({ key: "u" } )}>U</div>
				<div className="keyboard_key keyi" onClick={() => clickEventHandle({ key: "i" } )}>I</div>
				<div className="keyboard_key keyo" onClick={() => clickEventHandle({ key: "o" } )}>O</div>
				<div className="keyboard_key keyp" onClick={() => clickEventHandle({ key: "p" } )}>P</div>

			</div>
			<div className="keyboard_row row2">
				<div className="keyboard_key keya" onClick={() => clickEventHandle({ key: "a" } )}>A</div>
				<div className="keyboard_key keys" onClick={() => clickEventHandle({ key: "s" } )}>S</div>
				<div className="keyboard_key keyd" onClick={() => clickEventHandle({ key: "d" } )}>D</div>
				<div className="keyboard_key keyf" onClick={() => clickEventHandle({ key: "f" } )}>F</div>
				<div className="keyboard_key keyg" onClick={() => clickEventHandle({ key: "g" } )}>G</div>
				<div className="keyboard_key keyh" onClick={() => clickEventHandle({ key: "h" } )}>H</div>
				<div className="keyboard_key keyj" onClick={() => clickEventHandle({ key: "j" } )}>J</div>
				<div className="keyboard_key keyk" onClick={() => clickEventHandle({ key: "k" } )}>K</div>
				<div className="keyboard_key keyl" onClick={() => clickEventHandle({ key: "l" } )}>L</div>

			</div>
			<div className="keyboard_row row3">
				<div className="keyboard_key enter" onClick={() => clickEventHandle({ key: "Enter" })}>Enter</div>
				<div className="keyboard_key keyz" onClick={() => clickEventHandle({ key: "z" } )}>Z</div>
				<div className="keyboard_key keyx" onClick={() => clickEventHandle({ key: "x" } )}>X</div>
				<div className="keyboard_key keyc" onClick={() => clickEventHandle({ key: "c" } )}>C</div>
				<div className="keyboard_key keyv" onClick={() => clickEventHandle({ key: "v" } )}>V</div>
				<div className="keyboard_key keyb" onClick={() => clickEventHandle({ key: "b" } )}>B</div>
				<div className="keyboard_key keyn" onClick={() => clickEventHandle({ key: "n" } )}>N</div>
				<div className="keyboard_key keym" onClick={() => clickEventHandle({ key: "m" } )}>M</div>
				<div className="keyboard_key backspace" onClick={() => clickEventHandle( {key:"Backspace"})}> {"<"} </div>
			</div>
		</div>
	);
}

export default Keyboard;
