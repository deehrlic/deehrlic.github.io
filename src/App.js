//modified from mui-treasury card example by Siriwatknp
//https://mui-treasury.com/components/card/

import React from 'react';
import cx from 'clsx';
import Color from 'color';
import GoogleFontLoader from 'react-google-font-loader';
import NoSsr from '@material-ui/core/NoSsr';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';
import { Row, Item } from '@mui-treasury/components/flex';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

const useGridStyles = makeStyles(({ breakpoints }) => ({
  root: {
    overflow: 'auto',
    [breakpoints.down('md')]: {
      '& > *:not(:first-child)': {
        paddingLeft: 0,
      },
      visibility: 'hidden',
    },
    [breakpoints.up('sm')]: {
      justifyContent: 'center',
    },
  },
}));

const useSmallStyles = makeStyles(({ breakpoints }) => ({
  root: {
    [breakpoints.only('xs')]: {
      display: 'none',
    },
  },
}));

const useStyles = makeStyles(({ palette, breakpoints }) => ({
  color: ({ color }: { color: string }) => ({
    '&:before': {
      backgroundColor: Color(color)
        .darken(0.3)
        .desaturate(0.2)
        .toString(),
    },
  }),
  root: {
    position: 'relative',
    borderRadius: '1rem',
    minWidth: 320,
    '&:before': {
      transition: '0.2s',
      position: 'absolute',
      width: '100%',
      height: '100%',
      content: '""',
      display: 'block',
      borderRadius: '1rem',
      zIndex: 0,
      bottom: 0,
    },
    '&:hover': {
      '& $logo': {
        transform: 'scale(1.1)',
      },
      '& $cover': {
        transform: 'scale(1.1)',
      },
    },
  },
  cover: {
    borderRadius: '1rem',
  },
  content: ({ color }: { color: string }) => ({
    position: 'relative',
    zIndex: 1,
    borderRadius: '1rem',
    boxShadow: `0 6px 16px 0 ${Color(color).fade(0.5)}`,
    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      left: 0,
      top: 0,
      zIndex: 0,
      width: '100%',
      height: '100%',
      clipPath:
        'polygon(0% 100%, 0% 35%, 0.3% 33%, 1% 31%, 1.5% 30%, 2% 29%, 2.5% 28.4%, 3% 27.9%, 3.3% 27.6%, 5% 27%,95% 0%,100% 0%, 100% 100%)',
      borderRadius: '1rem',
      background: `linear-gradient(to top, ${color}, ${Color(color)
        .rotate(24)
        .lighten(0.12)})`,
    },
  }),
  title: {
    fontFamily: 'Fjalla One',
    fontSize: '1.25rem',
    color: '#fff',
    margin: 0,
  },
  logo: {
    transition: '0.3s',
    width: 100,
    height: 100,
    boxShadow: '0 4px 12px 0 rgba(0,0,0,0.24)',
    borderRadius: '1rem',
  },
  team: {
    fontFamily: 'Sen',
    fontSize: '0.75rem',
    color: palette.text.hint,
  },
  date: {
    fontFamily: 'Sen',
    color: '#fff',
    backgroundColor: palette.text.hint,
    opacity: 0.72,
    fontSize: '0.75rem',
    padding: '0 0.5rem',
    borderRadius: 12,
  },
  hide: {
    [breakpoints.only('xs')]: {
      visibility:'hidden',
    }
  },
}));

const CustomCard = ({ styles, cover, logo, title, brand, date }) => {
  const mediaStyles = useCoverCardMediaStyles();
  return (
    <Box className={cx(styles.root, styles.color)} pt={20}>
      <CardMedia image={cover} className={styles.cover} classes={mediaStyles} />
      <Box className={styles.content} p={2}>
        <Box position={'relative'} zIndex={1}>
          <Row p={0} gap={2}>
            <Item>
              <Avatar className={styles.logo} src={logo} />
            </Item>
            <Item position={'bottom'}>
              <h2 className={styles.title}>{title}</h2>
            </Item>
          </Row>
          <Row mt={4} alignItems={'center'}>
            <Item>
              <div className={styles.team}>{brand}</div>
            </Item>
            <Item position={'right'}>
              <div className={styles.date}>{date}</div>
            </Item>
          </Row>
        </Box>
      </Box>
    </Box>
  );
};

export const HighlightCardDemo = React.memo(function HighlightCard() {
  const styles1 = useStyles({ color: '#2657a6' });
  const styles2 = useStyles({ color: '#E36D73' });
  const styles3 = useStyles({ color: '#987D56' });
  const styles4 = useStyles({ color: '#EE1C23' });
  const styles5 = useStyles({ color: '#947FC5' });
  const styles6 = useStyles({ color: '#12A10D' });
  const styles7 = useStyles({ color: '#65449D' });
  const styles8 = useStyles({ color: '#B0B3b8' });
  const styles9 = useStyles({ color: '#FF5F15' });
  const styles10 = useStyles({ color: '#72ABD5' });
  
  const gridStyles = useGridStyles();
  return (
    <div>
        <Box display={{ xs: 'block', sm: 'block', md: 'block', lg:'none', xl:'none' }} href="https://www.devpost.com/deehrlic/">
          <a style={{fontSize:'50px', position: 'absolute', textAlign: 'center', fontFamily:'Tahoma, sans-serif'}} href="https://www.devpost.com/deehrlic/">This site is not optimized for smaller screens. Click on this text to see my Devpost profile, which highlights most of my work. Thanks!</a>
        </Box>
      <div style={{position:'relative', left:'-30px'}}>
        <Typography classes={gridStyles} style={{fontSize:'50px', position: 'relative', textAlign: 'center', fontFamily:'Tahoma, sans-serif'}}>
          Drew Ehrlich
        </Typography>
        <Typography classes={gridStyles} style={{fontSize:'20px', position: 'relative', textAlign: 'center', fontFamily:'Tahoma, sans-serif'}}>
          computational media masters student, creative coding lab, baskin school of engineering, university of california santa cruz
        </Typography>
        <Typography classes={gridStyles} style={{fontSize:'20px', position: 'relative', textAlign: 'center', fontFamily:'Tahoma, sans-serif'}}>
          computer science BS + film and digital media BA, university of california santa cruz, 2021
        </Typography>
        <Typography classes={gridStyles} style={{fontSize:'20px', position: 'relative', textAlign: 'center', fontFamily:'Tahoma, sans-serif'}}>
          aspiring interactive media researcher, maker, and engineer
        </Typography>
        <Typography classes={gridStyles} style={{fontSize:'20px', position: 'relative', textAlign: 'center', fontFamily:'Tahoma, sans-serif'}}>
          deehrlic at ucsc dot edu
        </Typography>
        <Toolbar classes={gridStyles}>
          <div onClick={()=> window.open("https://www.linkedin.com/in/drew-ehrlich/", "_blank")} style={{position: 'absolute', left: '44vw'}}>
            <img style={{height: '40px'}} src={
                process.env.PUBLIC_URL + '/linkedin.svg'}></img>
          </div>
          <div onClick={()=> window.open("https://www.github.com/deehrlic", "_blank")} style={{position: 'absolute', left: '49vw'}}>
            <img style={{height: '40px'}} src={
                process.env.PUBLIC_URL + '/gitlogo.png'}></img>
          </div>
          <div onClick={()=> window.open("https://www.devpost.com/deehrlic", "_blank")} style={{position: 'absolute', left: '54vw'}}>
            <img style={{height: '40px'}} src={
                process.env.PUBLIC_URL + '/devposticon.png'}></img>
          </div>
        </Toolbar>
      </div>
      <NoSsr>
        <GoogleFontLoader
          fonts={[{ font: 'Fjalla One' }, { font: 'Sen', weights: [500] }]}
        />
      </NoSsr>
      <Grid
        style={{ padding: 16 }}
        classes={gridStyles}
        wrap={'nowrap'}
        container
        spacing={4}
      >
        <Grid item onClick={()=> window.open("https://drive.google.com/file/d/1BFQWNHs-XVyKZ3Vz2PIHbbSYyFL8h5OM/view?usp=sharing", "_blank")}>
          <CustomCard
            styles={styles9}
            brand={'Undergraduate Thesis'}
            date={'Spring 2021'}
            cover={
              process.env.PUBLIC_URL + '/sparse_example.PNG'
            }
            logo={
              process.env.PUBLIC_URL + '/bsoe.PNG'
            }
            title={
              <>
                <div style={{'fontSize': '20px'}}>
                  Printing the Polyphorm
                </div>
                <div style={{'fontSize': '15px'}}>
                  Supervised by Angus Forbes
                  <br /> CSE 195: Senior Thesis
                </div>
              </>
            }
          />
        </Grid>
        <Grid item onClick={()=> window.open("https://film.ucsc.edu/works-and-ideas/drew_ehrlich_kitchen_table_magic", "_blank")}>
          <CustomCard
            styles={styles8}
            brand={'Thesis Film'}
            date={'Spring 2021'}
            cover={
              process.env.PUBLIC_URL + '/drew_still.PNG'
            }
            logo={
              process.env.PUBLIC_URL + '/website.png'
            }
            title={
              <>
                <div style={{'fontSize': '24px'}}>
                  Kitchen Table Magic
                </div>
                <div style={{'fontSize': '15px'}}>
                  Narrative Short Film
                  <br />  FILM 196A: Narrative Senior Exit
                </div>
              </>
            }
          />
        </Grid>
        <Grid item onClick={()=> window.open("https://devpost.com/software/v-controller", "_blank")}>
          <CustomCard
            styles={styles1}
            brand={'Hackathon Project'}
            date={'November 2020'}
            cover={
              process.env.PUBLIC_URL + '/rangelogo.PNG'
            }
            logo={process.env.PUBLIC_URL + '/liquidlogo.PNG'}
            title={
              <>
                <div style={{'fontSize': '35px'}}>
                  R.A.N.G.E.
                </div>
                <div style={{'fontSize': '15px'}}>
                  First Place
                  <br /> LiquidHacks 2020
                </div>
              </>
            }
          />
        </Grid>
        
        <Grid item onClick={()=> window.open("https://devpost.com/software/pi-heating-doohickey", "_blank")}>
          <CustomCard
            styles={styles7}
            brand={'Hackathon Project'}
            date={'January 2021'}
            cover={
              process.env.PUBLIC_URL + '/archie.PNG'
            }
            logo={
              process.env.PUBLIC_URL + '/cruzhacks21.png'
            }
            title={
              <>
                <div style={{'fontSize': '20px'}}>
                  Archie, Warmer of Snacks
                </div>
                <div style={{'fontSize': '15px'}}>
                  Pinnacle Prize Winner
                  <br />  CruzHacks 2021
                </div>
              </>
            }
          />
        </Grid>
        <Grid item onClick={()=> window.open("https://devpost.com/software/owie", "_blank")}>
          <CustomCard
            styles={styles2}
            brand={'Hackathon Project'}
            date={'August 2020'}
            cover={
              process.env.PUBLIC_URL + '/owiecorey.png'
            }
            logo={process.env.PUBLIC_URL + '/owiemlhlogo.PNG'}
            title={
              <>
                <div style={{'fontSize': '35px'}}>
                  owie
                </div>
                <div style={{'fontSize': '15px'}}>
                  Most Complicated Hack
                  <br />  To The Moon And Hack
                </div>
              </>
            }
          />
        </Grid>
      </Grid>
      <Grid
        style={{ padding: 16 }}
        classes={gridStyles}
        wrap={'nowrap'}
        container
        spacing={4}
      >
        <Grid item onClick={()=> window.open("https://github.com/deehrlic/bar-boy", "_blank")}>
          <CustomCard
            styles={styles3}
            brand={'Personal Project'}
            date={'2019/2020'}
            cover={
              process.env.PUBLIC_URL + '/barpic.PNG'
            }
            logo={
              process.env.PUBLIC_URL + '/barlogo.PNG'
            }
            title={
              <>
                <div style={{'fontSize': '35px'}}>
                  bar-boy
                </div>
                <div style={{'fontSize': '15px'}}>
                  Web Controlled Drink Maker
                  <br />  Raspberry Pi & Flask API
                </div>
              </>
            }
          />
        </Grid>
        <Grid item onClick={()=> window.open("https://devpost.com/software/is-my-food-ready", "_blank")}>
          <CustomCard
            styles={styles4}
            brand={'Hackathon Project'}
            date={'August 2020'}
            cover={
              process.env.PUBLIC_URL + '/hack20background.PNG'
            }
            logo={
              process.env.PUBLIC_URL + '/hack20logo.PNG'
            }
            title={
              <>
                <div style={{'fontSize': '25px'}}>
                  Is My Food Ready?
                </div>
                <div style={{'fontSize': '15px'}}>
                  $1000 1517 Grant Prize
                  <br />  Hack '20 by Dubhacks
                </div>
              </>
            }
          />
        </Grid>
        <Grid item onClick={()=> window.open("https://devpost.com/software/ecobay", "_blank")}>
          <CustomCard
            styles={styles6}
            brand={'Hackathon Project'}
            date={'February 2020'}
            cover={
              process.env.PUBLIC_URL + '/ecobayimg.PNG'
            }
            logo={
              process.env.PUBLIC_URL + '/hacktechlogo.jpg'
            }
            title={
              <>
                <div style={{'fontSize': '35px'}}>
                  ecoBay
                </div>
                <div style={{'fontSize': '15px'}}>
                  Best Sustainability Hack
                  <br />  HackTech 2020
                </div>
              </>
            }
          />
        </Grid>
        <Grid item onClick={()=> window.open("https://devpost.com/software/twitchplaystoaster", "_blank")}>
          <CustomCard
            styles={styles5}
            brand={'Hackathon Project'}
            date={'January 2020'}
            cover={
              process.env.PUBLIC_URL + '/toaster.jpg'
            }
            logo={
              process.env.PUBLIC_URL + '/cruzhackslogo.PNG'
            }
            title={
              <>
                <div style={{'fontSize': '25px'}}>
                  TwitchPlaysToaster
                </div>
                <div style={{'fontSize': '15px'}}>
                  Chat Controlled RC Toaster
                  <br />  CruzHacks 2020
                </div>
              </>
            }
          />
        </Grid>
        <Grid item onClick={()=> window.open("https://youtu.be/i8dNV2cmqfk", "_blank")}>
          <CustomCard
            styles={styles10}
            brand={'Short Film'}
            date={'Spring 2020'}
            cover={
              '/172.webp'
            }
            logo={
              process.env.PUBLIC_URL + '/arts.PNG'
            }
            title={
              <>
                <div style={{'fontSize': '35px'}}>
                  Home Life
                </div>
                <div style={{'fontSize': '15px'}}>
                  A Video Letter from Quarantine
                  <br />  FILM 172: Narrative Workshop
                </div>
              </>
            }
          />
        </Grid>
      </Grid>
      </div>
  );
});

export default HighlightCardDemo;