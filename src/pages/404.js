import React from "react";
import Layout from "components/Layout";
import Button from "components/_ui/Button";

const NotFoundPage = () => (
    <Layout>
        <h1 data-sal="slide-up" data-sal-delay="400" data-sal-duration="1500" data-sal-easing="ease">
            Oops! We couldn't find this page.
        </h1>
        <p data-sal="slide-up" data-sal-delay="500" data-sal-duration="1500" data-sal-easing="ease">
            If you are reading this, it's because you are lost. Greatings from Argentina.
        </p>


        <a href="/" >
            <Button data-sal="slide-up" data-sal-delay="600" data-sal-duration="1500" data-sal-easing="ease">
                Go home
            </Button>
        </a>

    </Layout>
)

export default NotFoundPage;