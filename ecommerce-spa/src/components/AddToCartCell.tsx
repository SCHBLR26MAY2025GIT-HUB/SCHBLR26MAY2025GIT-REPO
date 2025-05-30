import React from 'react';
import { GridCellProps } from '@progress/kendo-react-grid';
import { Product } from '../models/product';

interface AddToCartCellProps extends GridCellProps {
  onAddToCart: (product: Product) => void;
  isInCart?: boolean;
}

const AddToCartCell: React.FC<AddToCartCellProps> = ({ dataItem, onAddToCart, isInCart }) => {
  return (
    <td>
      <button
        onClick={() => onAddToCart(dataItem)}
        disabled={isInCart}
        style={{
          padding: '4px 8px',
          borderRadius: 4,
          border: 'none',
          backgroundColor: isInCart ? '#6c757d' : '#007bff',
          color: 'white',
          cursor: isInCart ? 'not-allowed' : 'pointer',
        }}
        aria-label={isInCart ? `${dataItem.name} is already in the cart` : `Add ${dataItem.name} to cart`}
      >
        {isInCart ? 'Added' : 'Add'}
      </button>
    </td>
  );
};

export default AddToCartCell;
