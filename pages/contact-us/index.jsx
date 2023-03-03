import { withRouter } from 'next/router';
import React from 'react';
import MainPage from "../../components/layouts/main.layout"
import ContactUsPage from '../../components/pages/contactUsPage';
function Page(props) {
    return (
        <div>
            <ContactUsPage/>
        </div>
    );
}


const PageWithRouter = withRouter(Page);
PageWithRouter.getLayout = function getLayout(page) {
  return <MainPage>{page}</MainPage>;
};
export default PageWithRouter;