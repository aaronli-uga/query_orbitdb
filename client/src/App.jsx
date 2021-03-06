import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { AppContextProvider } from './store/app-context'

import Navbar from './layout/Navbar'
import BasicQuery from './views/BasicQuery'
import AgeQuery from './views/AgeQuery'
import InfiniteQuery from './views/InfiniteQuery'
import PaginatedQuery from './views/PaginatedQuery'
import CreateUser from './views/CreateUser'
import EditUser from './views/EditUser'
import DataRequestor from './views/DataRequestor'
// import { create } from 'ipfs-http-client'


function App() {
  // Create a client
  const queryClient = new QueryClient()

  return (
    <React.Fragment>
      <header>
        <Navbar />
      </header>
      <main className="container p-4 mx-auto mt-8 lg:w-screen-lg">
        <QueryClientProvider client={queryClient}>
          <AppContextProvider>
            <Switch>
              <Route path="/" exact>
                <BasicQuery />
              </Route>
              <Route exact path="/ageOldThan/:age"
              render={(props) => (
                <AgeQuery age={props.match.params.age}/>
              )}/>
              <Route path="/paginated">
                <PaginatedQuery />
              </Route>
              <Route path="/requestor">
                <DataRequestor />
              </Route>
              <Route path="/infinite">
                <InfiniteQuery />
              </Route>
              <Route path="/user/create">
                <CreateUser />
              </Route>
              <Route path="/user/edit/:id">
                <EditUser />
              </Route>
            </Switch>
          </AppContextProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </main>
    </React.Fragment>
  )
}

export default App
