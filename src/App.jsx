import React, { useState, useEffect, useCallback, useRef } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";

import "./App.scss";
import Keyboard from "./Components/Keyboard/Keyboard";
import { getRandomWord, checkAnswer } from "./functions";
import NYTimesLogo from "./Images/nytimes-logo.png";
import GithubLogo from "./Images/github-logo.png";

const canvasStyles = {
	position: "fixed",
	pointerEvents: "none",
	width: "100%",
	height: "100%",
	top: 0,
	left: 0,
	zIndex: 5,
};

function App() {
	const [currentRow, setCurrentRow] = useState(0);
	const [currentColumn, setCurrentColumn] = useState(0);
	const [correctWord, setCorrectWord] = useState("balls");
	const [gameWon, setGameWon] = useState("not yet");

	const [tiles] = useState([
		"0-0", "0-1", "0-2", "0-3", "0-4",
		"1-0", "1-1", "1-2", "1-3", "1-4",
		"2-0", "2-1", "2-2", "2-3", "2-4", 
		"3-0", "3-1", "3-2", "3-3", "3-4",
		"4-0", "4-1", "4-2", "4-3", "4-4",
		"5-0", "5-1", "5-2", "5-3", "5-4",
	]);

	const showMessage = (message) => {
		document.querySelector(".message").textContent = message;
		document.querySelector(".message").classList.add("show");

		setTimeout(hideMessage, 2000);
	};

	const hideMessage = () => {
		document.querySelector(".message").classList.remove("show");
	};

	const showDetailedMessage = (type) => {
		document.querySelector(".detailed_message").classList.add("show");
		if (type === "win") {
			document.querySelector(".detailed_screen_top").textContent =
				"You win! Wanna play again?";
		} else if (type === "lose") {
			document.querySelector(".detailed_screen_top").textContent =
				"You lose! It's ok try again.";
		}
	};

	const hideDetailedMessage = () => {
		document.querySelector(".detailed_message").classList.remove("show");
	};

	const handleKeyPress = (event) => {
		if (event.key === "Backspace") {
			if (gameWon === "not yet") {
				if (currentColumn === 0) {
					document.querySelector(
						`.tile${currentRow}${currentColumn}`
					).textContent = "";
					return;
				} else if (currentColumn > 0) {
					if (
						document.querySelector(
							`.tile${currentRow}${currentColumn}`
						).textContent
					) {
						document.querySelector(
							`.tile${currentRow}${currentColumn}`
						).textContent = "";
					} else {
						setCurrentColumn(currentColumn - 1);
					}
					return;
				}
			}
		} else if ("abcdefghijklmnopqrstuvwxyz".includes(event.key)) {
			if (gameWon === "not yet") {
				if (currentColumn < 5) {
					document.querySelector(
						`.tile${currentRow}${currentColumn}`
					).textContent = event.key.toUpperCase();

					if (currentColumn < 4) setCurrentColumn(currentColumn + 1);
				}
			}
		} else if (event.key === "Enter") {
			if (gameWon === "not yet") {
				if (
					currentColumn === 4 &&
					document.querySelector(`.tile${currentRow}${currentColumn}`)
						.textContent
				) {
					const letters_array = [];
					for (let i = 0; i < 5; i++) {
						letters_array.push(
							document
								.querySelector(`.tile${currentRow}${i}`)
								.textContent.toLowerCase()
						);
					}

					let [indications, error] = checkAnswer(
						[...correctWord],
						letters_array
					);

					if (error) {
						showMessage(error);
						return;
					}

					for (let i = 0; i < indications.length; i++) {

						(function (i) {
							setTimeout(() => {
								document.querySelector(
									`.tile${currentRow}${i}`
								).style.backgroundColor =
									indications[i] === "g"
										? "#3d8b34"
										: indications[i] === "y"
										? "#9b9715"
										: "#8d3333";

								document.querySelector(
									`.tile${currentRow}${i}`
								).style.borderColor =
									indications[i] === "g"
										? "#3d8b34"
										: indications[i] === "y"
										? "#9b9715"
										: "#8d3333";

								document.querySelector(
									`.keyboard_key.key${letters_array[i]}`
								).style.backgroundColor =
									indications[i] === "g"
										? "#3d8b34"
										: indications[i] === "y"
										? "#9b9715"
										: "#8d3333";

							}, 200 * i);
						})(i);
					}

					if (indications.join("") === "ggggg") {
						setTimeout(() => {
							document.querySelector(".word_label").textContent =
								correctWord;
							document.querySelector(
								".word_link_open"
							).href = `https://www.google.com/search?q=${correctWord}`;
							document.querySelector(
								".word_link_open"
							).textContent = correctWord;
							showDetailedMessage("win");
							setGameWon(true);
							fire();
							return;
						}, 1500);
					} else if (
						indications.join("") != "ggggg" &&
						currentRow == 5
					) {
						setTimeout(() => {
							setGameWon(false);
							document.querySelector(".word_label").textContent =
								correctWord;
							document.querySelector(
								".word_link_open"
							).href = `https://www.google.com/search?q=${correctWord}`;
							document.querySelector(
								".word_link_open"
							).textContent = correctWord;
							showDetailedMessage("lose");
						}, 1500);
					} else {
						setCurrentRow(currentRow + 1);
						setCurrentColumn(0);
					}
				} else {
					showMessage("Fill all the letters");
				}
			}
		}
	};

	useEffect(() => {
		setCorrectWord(getRandomWord());
		document.querySelector(".app").focus();
	}, []);

	// ------------ confetti code

	const refAnimationInstance = useRef(null);

	const getInstance = useCallback((instance) => {
		refAnimationInstance.current = instance;
	}, []);

	const makeShot = useCallback((particleRatio, opts) => {
		refAnimationInstance.current &&
			refAnimationInstance.current({
				...opts,
				origin: { y: 0.7 },
				particleCount: Math.floor(200 * particleRatio),
			});
	}, []);

	const fire = useCallback(() => {
		makeShot(0.25, {
			spread: 26,
			startVelocity: 10,
		});

		makeShot(0.2, {
			spread: 60,
		});

		makeShot(0.35, {
			spread: 100,
			decay: 0.91,
			scalar: 0.8,
		});

		makeShot(0.1, {
			spread: 120,
			startVelocity: 45,
			decay: 0.92,
			scalar: 1.2,
		});

		makeShot(0.1, {
			spread: 120,
			startVelocity: 35,
		});
	}, [makeShot]);

	return (
		<div
			className="app"
			tabIndex="0"
			onKeyDown={(event) => handleKeyPress(event)}
		>
			<ReactCanvasConfetti
				refConfetti={getInstance}
				style={canvasStyles}
			/>

			<div className="message">You won!</div>

			<div className="detailed_message">
				<p className="detailed_screen_top">
					You win! Wanna play again?
				</p>

				<div className="close_btn" onClick={hideDetailedMessage}>
					X
				</div>
				<div className="word">
					<h2>Current word</h2>
					<h4 className="word_label">balls</h4>
				</div>
				<div className="meaning">
					<h4>
						Know the meaning of{" "}
						<a
							className="word_link_open app-link"
							href={`https://www.google.com/search?q=balls`}
							target="_blank"
						>
							{" "}
							balls{" "}
						</a>
					</h4>
				</div>

				<button
					className="replay_btn"
					onClick={() => {
						window.location.reload();
					}}
				>
					replay
				</button>
			</div>

			<main className="app-main">
				<div className="app-header">
					<i>
						<a
							href="https://www.nytimes.com/games/wordle/index.html"
							target="_blank"
							className="logo nytimes-logo"
							title="Play the original Wordle"
						>
							<img src={NYTimesLogo} alt="nytimes" />
						</a>
						<i className="Wordle">
							Wordle Ripoff by{" "}
							<a
								href="https://www.github.com/sabzdotpy"
								target="_blank"
								className="app-link"
							>
								Sabz
							</a>
						</i>
						<a
							href="https://www.github.com/sabzdotpy/WordleButWorse"
							target="_blank"
							className="logo github-logo"
						>
							{" "}
							<img
								src={GithubLogo}
								alt="github"
								title="source code?"
							/>{" "}
						</a>
					</i>
				</div>

				<div className="tiles-container">
					{tiles.map((val, i) => {
						return (
							<button
								className={
									"tile tile" +
									val[0] +
									val[2] +
									(`${currentRow}-${currentColumn}` === val
										? " active"
										: "")
								}
								key={i}
								tabIndex="0"
							>
								{""}
							</button>
						);
					})}
				</div>

				<Keyboard
					className="keyboard"
					clickEventHandle={handleKeyPress}
				/>
			</main>
		</div>
	);
}

export default App;
