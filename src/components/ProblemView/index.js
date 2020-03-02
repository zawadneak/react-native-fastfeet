import React, { useMemo } from 'react';

import PropTypes from 'prop-types';
import { parseISO, format } from 'date-fns';
import { Box, LabelBox, Label, Date } from './styles';

export default function ProblemView({ item }) {
  const date = useMemo(() => parseISO(item.createdAt));

  const formatedDate = useMemo(() => format(date, 'dd/MM/yyyy'));

  return (
    <Box>
      <LabelBox>
        <Label>{item.description}</Label>
      </LabelBox>
      <Date>{formatedDate}</Date>
    </Box>
  );
}

ProblemView.propTypes = {
  item: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};
