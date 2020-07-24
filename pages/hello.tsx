import * as React from 'react';
import { HelloComponent } from '../generated/apolloComponents';
import Page from '../components/Page';

export default () => {
  return (
    <Page>
      <HelloComponent>
        {({ data }) => (
          <div>{data && data.hello ? data.hello : 'loading...'}</div>
        )}
      </HelloComponent>
    </Page>
  );
};
