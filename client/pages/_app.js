import 'bootstrap/dist/css/bootstrap.css';
import SiteNavbar from '../components/SiteNavbar';
import ErrorBoundary from '../components/ErrorBoundary';

const AppComponent = ({ Component, pageProps }) => {
  return (
    <div>
      <SiteNavbar currentUser={null} />
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </div>
  );
};

export default AppComponent;
