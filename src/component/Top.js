import { Header } from 'semantic-ui-react';
import Gnb from './Gnb';
// import Image from 'next/image';

export default function Top() {
  return (
    <div>
      <div style={{ display: 'flex', paddingTop: 20 }}>
        <div style={{ flex: '100px 0 0' }}>
          <img
            src="/images/Medium.png"
            alt="logo"
            style={{ display: 'block', width: 80 }}
          />
        </div>

        <Header as="h1">민수</Header>
      </div>
      <Gnb />
    </div>
  );
}
