import { ChevronRight } from '@mui/icons-material';
import { Box, Link, Typography, useTheme } from '@mui/material';
import React, { useCallback, useState } from 'react';
import type { Project } from './pages/projects';

type Props = Project;

export const InteractiveCard: React.FunctionComponent<Props> = (props) => {
  const theme = useTheme();
  const [isHover, setIsHover] = useState(false);

  const handleMouseOver = useCallback(() => {
    setIsHover(true);
  }, []);

  const handleMouseOut = useCallback(() => {
    setIsHover(false);
  }, []);

  return (
    <Link
      href={props.showMoreLink}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      sx={{
        alignItems: 'center',
        borderRadius: theme.shape.borderRadius,
        display: 'flex',
        margin: '0 auto 50px auto',
        maxWidth: '1000px',
        padding: theme.spacing(),
        width: '100%',
        boxShadow: theme.shadows[3],
        ':hover': {
          boxShadow: theme.shadows[5],
          cursor: 'pointer',
        },
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column',
        },
      }}
    >
      <img style={{ maxWidth: '400px' }} src={props.imgSrc} />
      <div style={{ margin: theme.spacing() }} />
      <Box sx={{ alignSelf: 'flex-start', flex: 1 }}>
        <Typography variant="h4">{props.title}</Typography>
        <Typography variant="h5">{props.subtitle}</Typography>
        <Typography variant="body1">{props.description}</Typography>
      </Box>
      <ChevronRight
        sx={{
          fontSize: 40,
          margin: '0 10px',
          transition: 'transform 0.3s ease',
          transform: isHover ? 'translateX(10px)' : undefined,
          [theme.breakpoints.down('sm')]: {
            display: 'none',
          },
        }}
      />
    </Link>
  );
};
