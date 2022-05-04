import { chakra } from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';

export const BoxAnimate = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
});
