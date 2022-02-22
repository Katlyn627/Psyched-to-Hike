import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';

// IMPORT COMPONENTS HERE!!!

// import Header from './components/Header/Header';
import Profile from './components/Profile';
// import CommentForm from './components/CommentForm/Comment';
// import CommentList from './components/CommentList/List';
// import HikeForm from './components/HikeForm/Hike';
import Home from './components/Home/home'
// import Dashboard from './components/Dashboard/dashboard'
import LogInForm from './components/LogInSignUp/LogInFrom';


const httpLink = createHttpLink({
    uri: '/graphql',
});


const authLink = setContext((_, { headers }) => {

    const token = localStorage.getItem('id_token');

    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});


/// ADD ROUTES TO ALL COMPONENTS HERE
function App() {
    return (
        <ApolloProvider client={client}>


            <Router>
                <div>

                    <Switch>


                        <Route path='/' component={Home} />
                        <Route path='/login' component={LogInForm} />
                        <Route path='/signup' component={SignUpForm} />
                    </Switch>
                </div>


            </Router>

        </ApolloProvider >
    );
}

export default App;