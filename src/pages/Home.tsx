import {Box} from "@mui/material";
import {CardCompteur} from "../components/CardCompteur.tsx";
import { type CardProps} from "../models/model.ts";
import { useState,useEffect} from "react";
import Haribo_rest from "../api/Haribo_rest.ts";


/*
"https://btsastier.alwaysdata.net"
Chamallows	        2.28	    100	        g	    ./images/chamallows.jpg
Fraise tagada	    5.79	    120	        g	    ./images/fraise_tagada.jpg
Dragibus	        1.64	    300	        g	    ./images/dragibus.jpg
wasser	            1.64	    300	        g	    ./images/wasser.jpg
*/

export const Home = () => {


    const [haribo, setHaribo] = useState<CardProps[]>([])
    console.table(haribo)

    useEffect(() => {
        Haribo_rest.getAll()
            .then(bonbons=>{
                const bonbonsRecus = bonbons ?? []
                setHaribo(bonbonsRecus)
            })
    }, []);


    return (
        <Box
            sx={{
                display: "grid",
                gap: { xs: 2, sm: 3, md: 4 },
                gridTemplateColumns: "repeat(auto-fill, minmax(250px, 250px))",
            }}
        >
            {haribo.map((haribo) => (
                <CardCompteur
                    {...haribo} //“prends toutes les propriétés de l’objet et transforme-les en props React”.
                />
            ))}
        </Box>
    );
}
