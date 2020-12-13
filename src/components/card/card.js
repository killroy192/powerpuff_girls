import classNames from 'classnames';

export const Card = props => {
  const { 
    className,
    title,
    subTitle,
    mainContent,
  } = props;
  const cardClasses = classNames(
    'card',
    className,
  )
  return (
    <div class={cardClasses}>
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{subTitle}</h6>
        <div class="card-text">{mainContent}</div>
      </div>
    </div>
  )
}