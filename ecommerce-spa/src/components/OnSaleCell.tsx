import React from 'react';
import { GridCellProps } from '@progress/kendo-react-grid';

const OnSaleCell = (props: GridCellProps) => {
  const onSale = props.dataItem.onSale;
  return (
    <td style={{ color: onSale ? 'red' : 'inherit', fontWeight: onSale ? 'bold' : 'normal' }}>
      {onSale ? '🔥 On Sale!' : 'No'}
    </td>
  );
};

export default OnSaleCell;
