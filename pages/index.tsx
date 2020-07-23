import Link from 'next/link';
import Layout from '../components/Layout';
import { LoginComponent } from '../generated/apolloComponents';

const IndexPage = () => (
  <Layout title='Virtual Dojo Vienna'>
    <h1>hello Next.js 👋</h1>
    <p>
      <Link href='/about'>
        <a>About</a>
      </Link>
    </p>
    <LoginComponent>
      {mutate => (
        <button
          onClick={async () => {
            const response = await mutate({
              variables: { email: 'test@test.com ', password: 'password' },
            });
            if (response && response?.data) {
              response.data.login;
            }

            console.log(response);
          }}
        >
          call login mutation
        </button>
      )}
    </LoginComponent>
  </Layout>
);

export default IndexPage;
