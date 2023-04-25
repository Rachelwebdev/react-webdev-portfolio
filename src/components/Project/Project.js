/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import { CgBrowser } from 'react-icons/cg';
// import { BiCodeBlock } from 'react-icons/bi';
import './Project.scss';

function Project({ projects }) {
  return (
    <>
      {projects.map((project) => {
        const { id, name, image, liveLink, sourceCode } = project;

        return (
          <Card key={id} sx={{ maxWidth: 345 }} className="project-card">
            <CardMedia
              className="project-image"
              component="img"
              alt="green iguana"
              height="140"
              image={image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {/* {miniDescription} */}
              </Typography>
            </CardContent>
            <CardActions>
              <Button href={sourceCode} size="small">
                Source
              </Button>
              <Button href={liveLink} size="small">
                Live
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </>
  );
}

Project.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      liveLink: PropTypes.string.isRequired,
      sourceCode: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Project;
