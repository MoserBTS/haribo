import {Link} from 'react-router-dom';
import page_en_construction from '../assets/page_en_construction.gif';
import {Box, Typography} from "@mui/material";

export const PageNotBuild = () => {

    return (
        <p>
            <div className="center">
                <Box
                    component="img"
                    src={page_en_construction}
                    alt="Page non trouvée"
                    sx={{width: "30%", maxWidth: "100%", height: "auto"}}
                />
                <Typography variant="h5" sx={{textAlign: "center"}}>
                    Hey, cette page n'existe pas encore !
                </Typography>
                <Link to="/" className="waves-effect waves-teal btn-flat">
                    <Typography variant="subtitle1" sx={{textAlign: "center"}}>
                        Retourner à l'accueil
                    </Typography>
                </Link>
            </div>
        </p>)
};
