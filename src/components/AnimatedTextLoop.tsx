import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { styled } from '@mui/material';
import { Typography } from '@mui/material/styles/createTypography';
import AnimatedText from 'react-animated-text-content';
import { animated } from '@react-spring/web';
import { useSpring } from 'react-spring';

type Props = {
  durationTillNext?: number;
  durationOfFadeOut?: number;
  tag: Typography | React.ElementType;
  textOptions: string[];
} & React.ComponentProps<typeof AnimatedText>;

export const AnimatedTextLoop: React.FunctionComponent<Props> = ({
  textOptions,
  durationOfFadeOut = 1000,
  durationTillNext = 5000,
  ...animationProps
}) => {
  if (textOptions.length === 0) {
    return <></>;
  }

  const [index, setIndex] = useState(0);

  const [springs, api] = useSpring(() => ({
    from: { opacity: 1 },
  }));

  const fadeOut = useCallback(() => {
    api.start({
      from: { opacity: 1 },
      to: { opacity: 0 },
      config: { duration: durationOfFadeOut },
    });
    setTimeout(() => {
      api.start({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: durationOfFadeOut },
      });
    }, durationOfFadeOut);
  }, []);

  const StyledAnimatedText = useMemo(
    () =>
      styled(AnimatedText)(
        // Overlapping types h1, h2, etc. confirmed but TS fails to accept these
        // valid values to parse 'theme.typography'.
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ({ theme }) => theme.typography[animationProps.tag]
      ),
    []
  );

  const displayNextText = useCallback(() => {
    setIndex((prev) => (prev + 1) % textOptions.length);
  }, []);

  useEffect(() => {
    let fadeOutInterval: NodeJS.Timer;
    let cycleInterval: NodeJS.Timer;

    setTimeout(() => {
      fadeOut();
      fadeOutInterval = setInterval(fadeOut, durationTillNext);
    }, durationTillNext - durationOfFadeOut);

    setTimeout(() => {
      displayNextText();
      cycleInterval = setInterval(displayNextText, durationTillNext);
    }, durationTillNext);

    return () => {
      clearInterval(cycleInterval);
      clearInterval(fadeOutInterval);
    };
  }, []);

  return (
    <>
      <animated.div style={{ ...springs }}>
        <StyledAnimatedText {...animationProps}>
          {textOptions[index]}
        </StyledAnimatedText>
      </animated.div>
    </>
  );
};
