import React, { useMemo } from 'react';
import { LinkedIn, GitHub } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useAnalyticsEvent } from '../../hooks/useAnalyticsEvent';

type Props = {
  icon: 'LinkedIn' | 'GitHub';
  iconSize: 'small' | 'medium' | 'large';
  fontSize: 'small' | 'medium' | 'large';
} & React.ComponentProps<typeof IconButton>;

export const AppIconButton: React.FunctionComponent<Props> = ({
  icon,
  iconSize,
  fontSize,
}) => {
  const gaEventTracker = useAnalyticsEvent('Icon Button');

  const { MUIIcon, href } = useMemo(() => {
    switch (icon) {
      case 'LinkedIn':
        return {
          MUIIcon: <LinkedIn />,
          href: 'https://www.linkedin.com/in/adin-geist/',
        };
      case 'GitHub':
        return {
          MUIIcon: <GitHub />,
          href: 'https://github.com/adingeist',
        };
    }
  }, []);

  const IconWithProps = React.cloneElement(MUIIcon, { fontSize });

  return (
    <IconButton
      onClick={() => gaEventTracker(icon)}
      size={iconSize}
      href={href}
      target="_blank"
      referrerPolicy="no-referrer"
    >
      {IconWithProps}
    </IconButton>
  );
};
