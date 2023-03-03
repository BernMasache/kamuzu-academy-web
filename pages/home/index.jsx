import { withRouter } from 'next/router';
import React from 'react';
import MainPage from "../../components/layouts/main.layout"
import HomePage from '../../components/pages/home';
function Page(props) {
    return (
        <div>
            <HomePage/>
        </div>
    );
}


const PageWithRouter = withRouter(Page);
PageWithRouter.getLayout = function getLayout(page) {
  return <MainPage>{page}</MainPage>;
};
export default PageWithRouter;