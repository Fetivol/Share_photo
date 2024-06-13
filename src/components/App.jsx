import { NavLink, Route, Routes } from 'react-router-dom';
import { Wrapper } from 'components/Wrapper';
import { Images } from '../pages/Images/Images';
import { Home } from '../pages/Home/Home';

export const App = () => {
  return (
    <Wrapper>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home page</NavLink>
          </li>
          <li>
            <NavLink to="/images">Images</NavLink>
          </li>
          <li></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/images" element={<Images title="Images" />} />
      </Routes>
    </Wrapper>
  );
};
