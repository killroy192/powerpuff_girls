import { Nav } from 'components/nav'
import { Card } from 'components/card'
import classNames from 'classnames';
import showStyles from './show.module.scss'

function Show() {
  return (
    <>
      <header className="h1 text-center pt-4 px-1 pb-0">The Powerfull girls</header>
      <div className="d-flex justify-content-center px-1 py-2">
        <Nav className="d-inline-flex"/>
      </div>
      <main className={classNames("d-flex p-5 justify-content-between m-auto", showStyles['show'])}>
        <div className={showStyles['show__img']}>
          <img 
            src="http://static.tvmaze.com/uploads/images/medium_portrait/60/151357.jpg" 
            alt="The Powerfull girls"
          />
        </div>
        <div className="d-flex flex-wrap justify-content-between pl-4">
          <div className={showStyles['show__content']}>
        The city of Townsville may be a beautiful, bustling metropolis, but don't be fooled! There's evil afoot! And only three things can keep the bad guys at bay: Blossom, Bubbles and Buttercup, three super-powered little girls, known to their fans (and villains everywhere) as The Powerpuff Girls. Juggling school, bedtimes, and beating up giant monsters may be daunting, but together the Powerpuff Girls are up to the task. Battling a who's who of evil, they show what it really means to "fight like a girl."
          </div>
          <div className={showStyles['show__card']}>
            <Card 
              title="Card title"
              subTitle="Caed subtitle"
              mainContent="Some quick example text to build on the card title and make up the bulk of the card's content."
              className="w-100"
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default Show;
