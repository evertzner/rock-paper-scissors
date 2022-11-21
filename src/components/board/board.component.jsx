import Card from "../card/card.component";
import CardSelection from "../card-selection/card-selection.component";

import { ReactComponent as Triangle } from "../../assets/bg-triangle.svg";
import { ReactComponent as Pentagon } from "../../assets/bg-pentagon.svg";

import "./board.styles.scss";

const originalPlayMode = ["rock", "paper", "scissors"];
const bonusPlayMode = ["rock", "paper", "scissors", "spock", "lizard"];

const Board = ({ playMode, selectedCard, onSelectCard }) => {
	const onSelectCardHandler = (option) => {
		onSelectCard(option);
	};

	const onPlayAgainHandler = () => {
		onSelectCard("");
	};

	return (
		<>
			{selectedCard !== "" ? (
				<CardSelection
					selectedCard={selectedCard}
					playMode={playMode}
					onClick={onPlayAgainHandler}
				/>
			) : (
				<div className={`board__selection ${playMode}`}>
					{playMode === "original" ? (
						<>
							<figure className="triangle">
								<Triangle />
							</figure>
							{originalPlayMode.map((item) => (
								<Card
									key={item}
									customClass={`${playMode}__${item}`}
									option={item}
									onClick={onSelectCardHandler}
								/>
							))}
						</>
					) : (
						<>
							<figure className="pentagon">
								<Pentagon />
							</figure>
							{bonusPlayMode.map((item) => (
								<Card
									key={item}
									customClass={`${playMode}__${item}`}
									option={item}
									onClick={onSelectCardHandler}
								/>
							))}
						</>
					)}
				</div>
			)}
		</>
	);
};

export default Board;
