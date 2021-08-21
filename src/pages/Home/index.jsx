import { Fragment, useEffect, useState } from 'react';
import HomeTitle from './components/HomeTitle';

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const handleChange = (data) => {
    setIsVisible(data);
  };

  // Execute a função quando alguma dependencia do array mudar

  useEffect(() => {
    console.log('ola');
  }, [isVisible]);

  return (
    <Fragment>
      {isVisible ? <HomeTitle content="True" /> : <HomeTitle content="False" />}
      <button onClick={() => handleChange(!isVisible)}>Clique</button>
    </Fragment>
  );
}

export default Home;
