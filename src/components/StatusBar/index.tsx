import React from 'react';
import {StatusBar as RNStatusBar} from 'react-native';

interface StatusBarProps {
  color: string;
  translucent?: boolean;
  hidden?: boolean;
}

export function StatusBar({
  color,
  translucent = true,
  hidden = false,
  ...rest
}: StatusBarProps) {
  return (
    <RNStatusBar
      barStyle="light-content"
      backgroundColor={color}
      translucent={translucent}
      hidden={hidden}
      {...rest}
    />
  );
}
