import { Switch, Route } from "react-router-dom";
import { ApolloProvider  } from "apollo-boost";

import client from "./graphQL/instance"
import Layout from "./components/Layout";
import Home from "./pages/Home";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import Login from "./pages/Login";

function App() {
    return (
        <ApolloProvider client={client}>
            <Layout>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/page-one">
                        <PageOne />
                    </Route>
                    <Route path="/page-two">
                        <PageTwo />
                    </Route>
                    <Route path="/page-three">
                        <PageThree />
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                </Switch>
            </Layout>
        </ApolloProvider>
    );
}

export default App;