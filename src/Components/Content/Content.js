import React, { useContext } from "react";
import "./Content.css";
import { ThemeContext } from "../../Context/ThemeContext";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: 325,
    margin: 10,
    minHeight: 580,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  title: {
    color:'#FFC300 ',
    fontSize:'48px',
    marginTop: '50px',
    textAlign: 'start'
  },
  media: {
    height: 300,
  },
});

export default function Content() {
  const { theme } = useContext(ThemeContext);
  const classes = useStyles();
  return (
    <>
      <div className="header"></div>
      <div className={theme ? "content light" : "content dark"}>
        <div>
        <h1 className={classes.title}>Découvrez la sélection de la semaine</h1>
        </div>
        <div className="content">
          <div>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="images/cremant-de-bourgogne-blanc-vitteaut-alberti.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h3">
                  Crémant de Bourgogne Vitteaut Alberti Blanc - 2019
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                   Frais et léger, tout en conservant une structure vineuse et fruitée, ce Crémant de Bourgogne blanc s'épanouit dans un palais tout en fraicheur et en raffinement, enveloppé dans une fine effervescence. 

Une valeur sure de l'Appellation.


                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
              <Button size="small" color="primary">
                  Partager
                </Button>
                <Button size="small" color="primary">
                  Lire plus
                </Button>
              </CardActions>
            </Card>
          </div>
          <div>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image='images/limoux-blanc-chateau-martinolles-2018.jpg'
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h3">
                  Château de Martinolles Vieilles Vignes Blanc - 2018
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                   Sa robe jaune paille offre un joli nez ouvert de pain brioché et de noisettes fraîches. En bouche, ce vin présente un bel équilibre, plein,  avec de la fraîcheur. 
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
              <Button size="small" color="primary">
                  Partager
                </Button>
                <Button size="small" color="primary">
                  Lire plus
                </Button>
              </CardActions>
            </Card>
          </div>
          <div>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image='images/vin3.png'
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h3">
                  Misiones de Rengo Chili - 2020
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                   Robe grenat sombre reflets violine, limpide et brillante. Nez ouvert sur des notes de coulis de fraises des bois, de chocolat noir et de café torréfié, gourmand et assez complexe. Attaque souple, fruitée, de la tension, du plein. Finale fruitée, croquante, pointe acidulée, caractère sur les fruits rouges en coulis. Assez courte mais franche.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Partager
                </Button>
                <Button size="small" color="primary">
                  Lire plus
                </Button>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
