import * as React from 'react';
import Page from '../components/Page';
import { HelloComponent } from '../generated/apolloComponents';

export default () => {
  return (
    <Page>
      <div className="flex py-20 justify-around align-middle bg-white">
        <HelloComponent>
          {({ data }) => (
            <div>{data && data.hello ? data.hello : 'loading...'}</div>
          )}
        </HelloComponent>
      </div>
    </Page>
  );
};
