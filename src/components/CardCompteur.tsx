import {type CardProps} from "../models/model.ts";
import {Card,CardMedia,CardContent} from "@mui/material";
import {API_URL_BASE} from "../models/model.ts";

export  const CardCompteur = (cardProps:CardProps) => {
    return(
        <Card elevation={8} sx={{width: "100%", maxWidth: 250, height: "auto", borderRadius: 4,pt: 2}}>
            <CardMedia
                component="img"
                height="140"
                image={`${API_URL_BASE}/${cardProps.img}`}
                alt={cardProps.nom}
            />
            <CardContent>
                {cardProps.nom}
            </CardContent>
        </Card>
    )
  
}