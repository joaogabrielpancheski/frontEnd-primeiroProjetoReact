import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/32856374?s=460&u=de0dd39ff212623a025de9a1cf3b8c01d0631a89&v=4"
            alt="João Gabriel"
          />
          <div>
            <strong>rocketset/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/32856374?s=460&u=de0dd39ff212623a025de9a1cf3b8c01d0631a89&v=4"
            alt="João Gabriel"
          />
          <div>
            <strong>rocketset/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/32856374?s=460&u=de0dd39ff212623a025de9a1cf3b8c01d0631a89&v=4"
            alt="João Gabriel"
          />
          <div>
            <strong>rocketset/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/32856374?s=460&u=de0dd39ff212623a025de9a1cf3b8c01d0631a89&v=4"
            alt="João Gabriel"
          />
          <div>
            <strong>rocketset/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/32856374?s=460&u=de0dd39ff212623a025de9a1cf3b8c01d0631a89&v=4"
            alt="João Gabriel"
          />
          <div>
            <strong>rocketset/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
