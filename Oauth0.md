npm install @auth0/auth0-react


```JSX
import { Auth0Provider } from '@auth0/auth0-react';
```


```JSX
   <Auth0Provider
      domain="dev-ebvwwchz4olpyt1p.us.auth0.com"
      clientId="2HsTXPfZUR1QAnIQYA6X6hjoAu11aJYu"
      redirectUri={window.location.origin}>
      <App />
    </Auth0Provider>
```

## It must be configured

(in auth0 web site)


Allowed callbacks URLs: http://localhost:3000

Allowed Logout URLs: http://localhost:3000

Allowed Web Origin: http://localhost:3000