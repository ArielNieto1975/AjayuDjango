import { Atrapas } from "./Atrapas"
import Disenos from "./Atrapas/disenos"
import Frascos from "./Atrapas/frascos"
import Home from "./Home"
import { useState } from "react";

export const Body = (props)=> {

    const {
        principal,
        atrapaPage,
        frascosPage,
        disenhosPage,
        accesos
    } = props;
    const [question, setQuestion] = useState(false);

    const showWhat = () => {
        setQuestion(true);
        console.log(question);
      };

    return <section className="body">
        {principal ? <Home /> : <></>}
        {atrapaPage ? (
        <Atrapas showWhat={showWhat} question={question} />
        ) : (
        <></>
        )}
        {frascosPage ? <Frascos showWhat={showWhat} /> : <></>}
        {disenhosPage ? <Disenos showWhat={showWhat} /> : <></>}
    </section>
}