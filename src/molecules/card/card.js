import { memo } from 'react';
import classNames from 'classnames';
import { CardPropTypes, CardDefaultProps } from './card.props';

const Card = props => {
  const { 
    className,
    title,
    mainContent,
  } = props;
  const cardClasses = classNames(
    'card',
    className,
  )
  return (
    <div className={cardClasses}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <div className="card-text pb-1">{
          mainContent.map(
            ({ name, value }) => (
              <div className="pb-2" key={name}>
                <span className="font-weight-bold">{name}</span>{` ${value}`}
              </div>
            )
          )
        }</div>
      </div>
    </div>
  )
}

Card.propTypes = CardPropTypes;
Card.defaultProps = CardDefaultProps;

export default memo(Card);