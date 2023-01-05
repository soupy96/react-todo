import styled from 'styled-components';
import { Helmet } from 'react-helmet';

function NoPage() {
  return (
    <div>
      <Helmet>
        <title>Skull Split | 404</title>
      </Helmet>
      <Text>404 Page</Text>
    </div>
  );
}

const Text = styled.div`
  text-align: center;
  margin: 25% 0px;
`;

export default NoPage;
