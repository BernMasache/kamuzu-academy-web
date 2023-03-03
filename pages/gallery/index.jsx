import { withRouter } from 'next/router';
import React from 'react';
import MainPage from "../../components/layouts/main.layout"
import GalleryPage from '../../components/pages/gallery';
import HomePage from '../../components/pages/home';
function Page(props) {
    return (
        <div>
            <GalleryPage/>
        </div>
    );
}


const PageWithRouter = withRouter(Page);
PageWithRouter.getLayout = function getLayout(page) {
  return <MainPage>{page}</MainPage>;
};
export default PageWithRouter;