import "./Keyboard.scss"

function Keyboard( { clickEventHandle } ) {
	return (
		<div className="keyboard_container">
			<div className="keyboard_row row1">
				<button className="keyboard_key keyq" onClick={() => clickEventHandle({ key: "q" } )}>Q</button>
				<button className="keyboard_key keyw" onClick={() => clickEventHandle({ key: "w" } )}>W</button>
				<button className="keyboard_key keye" onClick={() => clickEventHandle({ key: "e" } )}>E</button>
				<button className="keyboard_key keyr" onClick={() => clickEventHandle({ key: "r" } )}>R</button>
				<button className="keyboard_key keyt" onClick={() => clickEventHandle({ key: "t" } )}>T</button>
				<button className="keyboard_key keyy" onClick={() => clickEventHandle({ key: "y" } )}>Y</button>
				<button className="keyboard_key keyu" onClick={() => clickEventHandle({ key: "u" } )}>U</button>
				<button className="keyboard_key keyi" onClick={() => clickEventHandle({ key: "i" } )}>I</button>
				<button className="keyboard_key keyo" onClick={() => clickEventHandle({ key: "o" } )}>O</button>
				<button className="keyboard_key keyp" onClick={() => clickEventHandle({ key: "p" } )}>P</button>

			</div>
			<div className="keyboard_row row2">
				<button className="keyboard_key keya" onClick={() => clickEventHandle({ key: "a" } )}>A</button>
				<button className="keyboard_key keys" onClick={() => clickEventHandle({ key: "s" } )}>S</button>
				<button className="keyboard_key keyd" onClick={() => clickEventHandle({ key: "d" } )}>D</button>
				<button className="keyboard_key keyf" onClick={() => clickEventHandle({ key: "f" } )}>F</button>
				<button className="keyboard_key keyg" onClick={() => clickEventHandle({ key: "g" } )}>G</button>
				<button className="keyboard_key keyh" onClick={() => clickEventHandle({ key: "h" } )}>H</button>
				<button className="keyboard_key keyj" onClick={() => clickEventHandle({ key: "j" } )}>J</button>
				<button className="keyboard_key keyk" onClick={() => clickEventHandle({ key: "k" } )}>K</button>
				<button className="keyboard_key keyl" onClick={() => clickEventHandle({ key: "l" } )}>L</button>

			</div>
			<div className="keyboard_row row3">
				<button className="keyboard_key enter" onClick={() => clickEventHandle({ key: "Enter" })}>Enter</button>
				<button className="keyboard_key keyz" onClick={() => clickEventHandle({ key: "z" } )}>Z</button>
				<button className="keyboard_key keyx" onClick={() => clickEventHandle({ key: "x" } )}>X</button>
				<button className="keyboard_key keyc" onClick={() => clickEventHandle({ key: "c" } )}>C</button>
				<button className="keyboard_key keyv" onClick={() => clickEventHandle({ key: "v" } )}>V</button>
				<button className="keyboard_key keyb" onClick={() => clickEventHandle({ key: "b" } )}>B</button>
				<button className="keyboard_key keyn" onClick={() => clickEventHandle({ key: "n" } )}>N</button>
				<button className="keyboard_key keym" onClick={() => clickEventHandle({ key: "m" } )}>M</button>
				<button className="keyboard_key backspace" onClick={() => clickEventHandle( {key:"Backspace"})}> {"<"} </button>
			</div>
		</div>
	);
}

export default Keyboard;
