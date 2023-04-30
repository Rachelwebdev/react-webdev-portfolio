/* eslint-disable */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Project.scss';

function Project({ projects }) {
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      {projects.map((project) => {
        const { id, name, image, miniDescription, liveLink, sourceCode } =
          project;

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
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="project-title"
              >
                {name}
              </Typography>
              <h4 className="description">
                {readMore
                  ? miniDescription
                  : `${miniDescription.substring(0, 120)}...`}
              </h4>{' '}
              <span>
                <h5 className="readMore" onClick={() => setReadMore(!readMore)}>
                  {readMore ? 'show less' : 'read more'}
                </h5>
              </span>
            </CardContent>
            <CardActions>
              <Button className="project-btn" href={sourceCode} size="small">
                Source
              </Button>
              <Button className="project-btn" href={liveLink} size="small">
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
