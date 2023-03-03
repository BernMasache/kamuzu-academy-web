import { withRouter } from 'next/router';
import React from 'react';
import MainPage from "../../components/layouts/main.layout"
import AboutPage from '../../components/pages/aboutPage';
function Page(props) {
    return (
        <div className=''>
            <AboutPage/>
        </div>
    );
}


const PageWithRouter = withRouter(Page);
PageWithRouter.getLayout = function getLayout(page) {
  return <MainPage>{page}</MainPage>;
};
export default PageWithRouter;