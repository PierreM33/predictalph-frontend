import * as React from "react";
import { useContext, useState, useEffect } from "react";
import Card from "../Card/Card";
import ModalCard from "../Modal/ModalCard";
import { Game } from "../../domain/game";
import {Round} from "../../domain/round";
import ModalValidate from "../Modal/ModalValidate";
import {Historic} from "../OldFiles/historic";

type typeState = {
    choice: number | null,
    ThisServices: any,
}

const LayoutCard = ({ choice, ThisServices }: typeState) => {


    const [cardModal, setCardModal] = useState(false);
    const [thisGame, setThisGame] = useState<Game | null>(null);
    const [thisRound, setThisRound] = useState<Round | null>(null);
    const [validated, setValidated] = useState(false);
    const [game, setGame] = useState([]);

    useEffect(() => {
        fetchRoundData();
    }, [choice]);


    const fetchRoundData = async () => {
        try {
            const roundGames = ThisServices.bet.getGames().filter((state: Game) => {
                if (choice === 0) {
                    return state && (state.type === "PRICE" || state.type === "CHOICE");
                }
                if (choice === 1) {
                    return state && state.type === "MULTIPLE_CHOICE";
                }
                return false;
            });
            setGame(roundGames);
        } catch (error) {
            console.error("Une erreur s'est produite lors de la récupération du tour actuel :", error);
        }
    };

    const onClick = (event: Game) => {
        setThisGame(event);
    };

    const onClickThisRound = (event: Round) => {
        setThisRound(event);
    }

    useEffect( () => {
        console.log("Round", thisRound)
    }, [thisRound])

    return (
        <div className={"LayoutCard"}>
            {game && game.map((state, index) => (
                <Card
                    key={index}
                    game={state}
                    setCardModal={setCardModal}
                    setGame={event => onClick(event)}
                    setThisRound={event => onClickThisRound(event)}
                />
            ))}
            {thisGame && thisRound !== null &&
                <ModalCard
                    isVisible={cardModal}
                    game={thisGame}
                    setVisible={() => {
                        setCardModal(false);
                        setThisGame(null);
                    }}
                    round={thisRound}
                    setValidated={setValidated}
                />}
                <ModalValidate
                    open={validated}
                    handleClose={() => setValidated(false)}
                />

        </div>
    );

}

export default LayoutCard;
