import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const projects = [
  {
    title: 'order app',
    imgPath: '/frontfolio/images/order-app-image.png',
    info: 'Online Shopping at Bayanas for the best cell phones, electronics & more products. Promotions on clothing, electronics, sports and more. Check out all the deals. Download App. Join Online. Safe Payment.',
    link: 'https://yehudabayana.github.io/my-order/#/',
    codeLink: 'https://github.com/YehudaBayana/my-order.git',
  },
  {
    title: 'challenge app',
    imgPath: '/frontfolio/images/challenge-app-image.png',
    info: 'this app just build for the challenge and fot practice, I took the challege from frontendmentor.io',
    link: 'https://yehudabayana.github.io/challenge-web/',
    codeLink: 'https://github.com/YehudaBayana/challenge-web.git',
  },
  {
    title: 'S.T.F.T.B',
    imgPath: '/frontfolio/images/login-app-image.png',
    info: 'sdfsd fsdf sdfasewq rtrh gfhgf cvl. sdfsd fsdf sdfasewq rtrh gfhgf cvl. sdfsd fsdf sdfasewq rtrh gfhgf cvl. sdfsd fsdf sdfasewq rtrh gfhgf cvl. sdfsd fsdf sdfasewq rtrh gfhgf cvl. ',
    link: 'https://yehudabayana.github.io/app-with-login/',
    codeLink: 'https://github.com/YehudaBayana/app-with-login.git',
  },
];

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 160,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <>
      {projects.map((project) => {
        return (
          <Card style={{ marginBottom: '50px' }} className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={project.imgPath}
                title='Contemplative Reptile'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  {project.title}
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  {project.info}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size='large' color='primary'>
                <a href={project.link} target='_blank' rel='noreferrer'>
                  {' '}
                  open app
                </a>
              </Button>
              <Button size='large' color='primary'>
                <a href={project.codeLink} target='_blank' rel='noreferrer'>
                  Source code
                </a>
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </>
  );
}
